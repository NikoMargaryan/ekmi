<template>
  <header>
    <div class="web_version" v-if="screenSize > 375">
      <nav>
          <ul class="list-default">
            <li class="cols"> <a class="href" href=""> Каталог</a> </li>
              <ul class="ul_cols">
                <li class="li_cols"><a class="href" href="">Диваны </a></li>
                <li class="li_cols"><a class="href" href="">Кресла </a></li>
                <li class="li_cols"><a class="href" href="">Стулья </a></li>
                <li class="li_cols"><a class="href" href=""> Кровати </a></li>
                <li class="li_cols"><a class="href" href="">Матрацы </a></li>
                <li class="li_cols"><a class="href" href=""> Пуфы </a></li>
                <li class="li_cols"><a class="href" href="">Эксклюзивная мебель </a></li>
                <li class="li_cols"><a class="href" href="">2D-3D модели </a></li>
              </ul>
            <li class="cols"> <a class="href" href=""> Индивидуальная мебель </a>  </li>
            <li class="cols"> <a class="href" href=""> Контакты </a></li>
             <li class="li_img"> <router-link to="/"> <img class="li_img_head" src="../assets/telegram-cloud-document-2-5233443011957888024 1.png" alt="logo">  </router-link>  </li>
            <li class="cols"> <router-link class="href" to="/about"> О компании </router-link>   </li>
            <li class="cols_num"> <a class="href" href="tel: +38 (099)-638-45-37"> +38 (099)-638-45-37 </a> </li>

            <li class="language" id="lang" @click="show">
              {{ currentLanguage }}
              <label for="lang">
                <span class="material-icons" :class="flip">keyboard_arrow_down</span>
              </label>
              <ul  class="lang-ul" v-if="visible===true">
                <li class="lang-li" @click="currentLanguage='RU'">
                  <router-link to="/ru" class="lang-menu">RU</router-link>
                </li>
                <li class="lang-li" @click="currentLanguage='UA'">
                  <router-link to="/ua" class="lang-menu">UA</router-link>
                </li>
                <li class="lang-li" @click="currentLanguage='EN'">
                  <router-link to="/en" class="lang-menu">EN</router-link>
                </li>
              </ul>

            </li>

          </ul>
      </nav>
    </div>
    <div class="mobile_version"  v-else>
        <div class="mobile_list">
          <div class="mob_first">
            <div class="mob_first_img">
              <router-link to="/"><img class="mob_png" src="/assets/telegram-cloud-document-2-5233443011957888024 3.png" alt="logo"> </router-link>
            </div>
          </div>
          <div class="mob_second">
            <div class="mob_li">
              <li class="language_mob" id="lang_mob" @click="show">
                {{ currentLanguage }}
                <label for="lang_mob">
                  <span class="material-icons" :class="flip">keyboard_arrow_down</span>
                </label>
                <ul  class="lang-ul_mob" v-if="visible===true">
                  <li class="lang-li_mob" @click="currentLanguage='RU'"><router-link
                      to="/ru" class="lang-menu_mob">RU</router-link></li>
                  <li class="lang-li_mob" @click="currentLanguage='UA'"><router-link
                      to="/ua" class="lang-menu_mob">UA</router-link></li>
                  <li class="lang-li_mob" @click="currentLanguage='EN'"><router-link
                      to="/en" class="lang-menu_mob">EN</router-link></li>
                </ul>

              </li>
            </div>
            <div class="call">
             <a class="href" href="tel: +38 (099)-638-45-37"> <i class="fa-solid fa-phone font"> </i></a>
            </div>
            <div class="nav-menu">

              <transition name="fade" mode="out-in">
                    <i
                        class="material-icons menu-outlined"
                        v-if="showMenu"
                        @click="showMenu= !showMenu"
                        :key="menu"
                    >
                      close
                    </i>
                    <i
                        class="material-icons close"
                        v-else
                        @click="showMenu= !showMenu"
                        :key="close"
                    >
                      menu
                    </i>
              </transition>
              <transition name="fade">
                <ul v-if="showMenu" class="nav-items">
                  <li class="li_nav">
                    Каталог
                    <ul class="ul_cat">
                      <li class="li_cat">Диваны</li>
                      <li class="li_cat">Кресла</li>
                      <li class="li_cat">Стулья</li>
                      <li class="li_cat"> Кровати</li>
                      <li class="li_cat">Матрацы</li>
                      <li class="li_cat"> Пуфы</li>
                      <li class="li_cat">Эксклюзивная мебель</li>
                      <li class="li_cat">2D-3D модели</li>
                    </ul>
                  </li>
                  <li class="li_nav">Индивидуальная мебель</li>
                  <li class="li_nav">2D-3D модели</li>
                  <li class="li_nav">Шоу-рум</li>
                  <li class="li_nav">СТРАНИЦА ПАРТНЕРОВ ДИЗАЙНЕРОВ</li>
                  <li class="li_nav">Дилерам</li>
                  <li class="li_nav">Контакты</li>
                </ul>
              </transition>
            </div>
        </div>
      </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data (){
    return{
      visible: false,
      flip: '',
      currentLanguage: 'RU',
      screenSize: "",
      showMenu: false,
      close:'',
      menu:'',
    }
  },
  methods:{
    show(){
      this.visible=!this.visible
      if(this.visible===true){
        this.flip='flip'
      }else{
        this.flip=''
      }
    },
  },
  mounted(){
    this.screenSize= window.screen.width

    window.onresize=()=>{
      this.screenSize= window.screen.width
    }
  }
}
</script>

<style scoped lang="scss">
nav{
  margin: 0 auto;
  max-width: 81.25%;
}
.list-default {
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 25px;
  padding-left: 0;
  list-style-type: none;
}
.list-default:nth-child(1){
  position: relative;
}
.list-default:nth-child(1):hover{
  .ul_cols{
    display: flex;
    flex-direction: column;
  }
}
.ul_cols{
  display: none;
  list-style-type: none;
  width: 13.5vw;
  position: absolute;
  top: 47%;
  left: 0;
  padding-left: 0;
  background-color: #FFFFFF;
  box-shadow: 0 0 0.6vw 0.1vw rgba(0,0,0, 0.15) ;
  .li_cols:hover{
    background: #ff9619;
    color: #FFFFFF;
  }
}
.li_cols{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1vw;
  line-height: 185.5%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #343434;
}
.li_img{
}
.li_img_head{
  width: 15vw;
}
.cols{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9vw;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-transform: uppercase;


}
.href{
  color: #343434;
}
.href:hover{
  text-decoration: none;
}
.cols_num{
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9vw;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #343434;

}
.language{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.8vw;
  line-height: 150%;
  display: flex;
  align-items: center;
  /* or 20px */

  color: rgba(52, 52, 52, 0.7);
  position:relative;

  span{
    color: rgba(52, 52, 52, 0.8);
    font-size:1.57vw;
    transition:all 0.3s ease;
  }

  label{
    margin:0;

    .flip{
      transform:rotateX(180deg);
    }
  }

  span:hover{
    cursor:pointer;
  }

  .lang-ul{
    list-style-type: none;
    list-style-position: inside;
    position:absolute;
    top: 65%;

    width: 2.1vw;
    padding-left:0;

    background: #FFFFFF;
    box-shadow: 0 0.5vh 0.6vw 0.1vw rgba(0, 0, 0, 0.15);
    z-index:1;

    .lang-li{
      margin-left:18%;

      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 0.9vw;
      line-height: 150%;
      /* or 21px */

      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;

      color: rgba(52, 52, 52, 0.7);

      .lang-menu{
        font-size:0.9vw;
        color: rgba(52, 52, 52, 0.7);
      }
    }

    .lang-li:hover{
      .lang-menu{
        color: #FF9619;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  nav{

    max-width:1170px;
  }
  .list-default{
    li{
      font-size: 13px;
    }
  }
  .li_img_head{
    width: initial;
  }
  .language{
    span{
      font-size: 24px;
    }
  }
}
@media screen and (max-width:1400px){
  ul.cols{
    width:208px;
  }

}





//mobile version//




.mobile_list{
  padding: 2.9vw 3.23vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.mob_first{
  width: 50%;
}
.mob_second{
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.mob_png{
  width: 13.99vw;
  height: 6.2vw;
}
.font{
  font-size: 15px;
}
.call{
  a:hover{
    color: #ff9619;
  }
}
.language_mob{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2.3vw;
  line-height: 150%;
  display: flex;
  align-items: center;
  /* or 20px */

  color: rgba(52, 52, 52, 0.7);
  position:relative;

  span{
    color: rgba(52, 52, 52, 0.8);
    font-size: 4.1vw;
    transition:all 0.3s ease;
  }

  label{
    margin:0;

    .flip{
      transform:rotateX(180deg);
    }
  }

  span:hover{
    cursor:pointer;
  }

  .lang-ul_mob{
    list-style-type: none;
    list-style-position: inside;
    position:absolute;
    top: 85%;

    width: 5.1vw;
    padding-left:0;

    background: #FFFFFF;
    box-shadow: 0 0.5vh 0.6vw 0.1vw rgba(0, 0, 0, 0.15);
    z-index:1;

    .lang-li_mob{
      margin-left:18%;

      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2.3vw;
      line-height: 150%;
      /* or 21px */

      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;

      color: rgba(52, 52, 52, 0.7);

      .lang-menu_mob{
        font-size:2.3vw;
        color: rgba(52, 52, 52, 0.7);
      }
    }

    .lang-li:hover{
      .lang-menu{
        color: #FF9619;
      }
    }
  }
}
.nav-menu{
  position: relative;
}
.nav-items{
  display: flex;
  height: 43.4vw;
  background-color: #FFFFFF;
  position: absolute;
  top: -10px;
  padding: 0;
  left: -160px;
  transition: 1s transform cubic-bezier(0, 0, 0.14, 1);
  flex-direction: column;
  justify-content: center;
}
.ul_cat{
  display: none;
}
.li_cat{
   font-family: 'Raleway',sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 2.9vw;
   line-height: 135%;
   list-style-type: none;
   display: flex;
   align-items: center;

   color: #4B4844;
 }
.li_nav{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.9vw;
  line-height: 135%;
  list-style-type: none;
  display: flex;
  align-items: center;

  color: #4B4844;
}
.close {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1;
  color: #343434;
  text-shadow: 0 1px 0 #fff;
  opacity: 1;
}
.menu,.close{

}
</style>
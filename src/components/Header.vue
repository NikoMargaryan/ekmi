<template>
  <header>
    <div class="web_version" >
      <nav>
          <ul class="list-default">
            <li class="cols_hover"> <a class="href" href=""> Каталог</a>
              <ul class="ul_cols">
                <li class="li_cols"><a class="href_li" href="">Диваны </a></li>
                <li class="li_cols"><a class="href_li" href="">Кресла </a></li>
                <li class="li_cols"><a class="href_li" href="">Стулья </a></li>
                <li class="li_cols"><a class="href_li" href=""> Кровати </a></li>
                <li class="li_cols"><a class="href_li" href="">Матрацы </a></li>
                <li class="li_cols"><a class="href_li" href=""> Пуфы </a></li>
                <li class="li_cols"><a class="href_li" href="">Эксклюзивная мебель </a></li>
                <li class="li_cols"><a class="href_li" href="">2D-3D модели </a></li>
              </ul>
            </li>
            <li class="cols"> <a class="href" href=""> Индивидуальная мебель </a>  </li>
            <li class="cols"> <a class="href" href=""> Контакты </a></li>
             <li class="li_img"> <router-link to="/"> <img class="li_img_head" src="../../public/assets/telegram-cloud-document-2-5233443011957888024 1.svg" alt="logo">  </router-link>  </li>
            <li class="cols"> <router-link class="href" to="/about"> О компании </router-link>   </li>
            <li class="cols_num"> <a class="href" href="tel: +38 (099)-638-45-37"> +38 (099)-638-45-37 </a> </li>

            <li class="language" id="lang" @click="show">
              {{ currentLanguage }}
              <label for="lang">
                <span class="material-icons" :class="flip">keyboard_arrow_down</span>
              </label>
              <ul  class="lang-ul" v-if="visible===true">
                <li class="lang-li" @click="currentLanguage='RU'">
                  <a href="#"  class="lang-menu">RU</a>
                </li>
                <li class="lang-li" @click="currentLanguage='UA'">
                  <a href="#" class="lang-menu">UA</a>
                </li>
                <li class="lang-li" @click="currentLanguage='EN'">
                  <a href="#" class="lang-menu">EN</a>
                </li>
              </ul>

            </li>

          </ul>
      </nav>
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
    }
  }
}
</script>

<style scoped lang="scss">
.web_version{
  padding-top: 1.7vw;
}
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
.ul_cols{
  display: none;
  list-style-type: none;
  width: 13.5vw;
  position: absolute;
  top: 64%;
  left: 0;
  gap: 8px;
  padding: 5px 0;
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
.cols_hover{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9vw;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-transform: uppercase;
  position: relative;
}
.cols_hover:hover{
  .ul_cols{
    display: flex;
    flex-direction: column;
  }
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
.href_li{
  color: #343434;
  padding-left: 10px;
}
.href_li:hover{
  text-decoration: none;
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
    position: absolute;
    top: -0.8vw;
  }

  label{
    margin:0;
    position: relative;

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
        text-decoration: none;
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

</style>
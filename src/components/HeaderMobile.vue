<template>
  <div class="mobile_version">
    <div class="mobile_list">
      <div class="mob_first">
        <div class="mob_first_img">
          <router-link to="/"><img class="mob_png" src="../../public/assets/telegram-cloud-document-2-5233443011957888024 3.png" alt="logo"> </router-link>
        </div>
      </div>
      <div class="mob_second">
        <div class="mob_li">
          <ul>
            <li class="language_mob" id="lang_mob" @click="show">
              {{ currentLanguage }}
              <label for="lang_mob">
                <span class="material-icons" :class="flip">keyboard_arrow_down</span>
              </label>
              <ul  class="lang-ul_mob" v-if="visible===true">
                <li class="lang-li_mob" @click="currentLanguage='RU'">
                  <a href="#" class="lang-menu_mob">RU</a>
                </li>
                <li class="lang-li_mob" @click="currentLanguage='UA'">
                  <a href="#" class="lang-menu_mob">UA</a>
                </li>
                <li class="lang-li_mob" @click="currentLanguage='EN'">
                  <a href="#" class="lang-menu_mob">EN</a>
                </li>
              </ul>

            </li>
          </ul>

        </div>
        <div class="call_icon">
          <a class="href_mob" href="tel: +38 (099)-638-45-37">
            <span class="material-icons">call
            </span>
          </a>
        </div>
        <div class="nav-menu">

          <transition name="fade" mode="out-in">
            <i
                class="material-icons menu-outlined"
                v-if="showMenu"
                @click="showMen"
                :key="menu"
            >
              close
            </i>
            <i
                class="material-icons close"
                v-else
                @click="showMen"
                :key="close"
            >
              menu
            </i>
          </transition>
          <transition name="fade">
            <ul :class="isMenuOpened" class="nav-items">
              <li class="li_nav_hover">
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
              <li class="li_nav">Страница партнеров дизайнеров</li>
              <li class="li_nav">Дилерам</li>
              <li class="li_nav">Контакты</li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile",
  data (){
    return{
      visible: false,
      flip: '',
      currentLanguage: 'RU',
      showMenu: false,
      close:'',
      menu:'',
      isMenuOpened: '',
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
    showMen() {
      this.showMenu = !this.showMenu
      if(this.showMenu == true){
        this.isMenuOpened = 'opened'
      }else{
        this.isMenuOpened = ''
      }
    }
  },
}
</script>

<style lang="scss">

.mobile_version{
  width: 100VW;
}

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
  width: 20vw;
  height: 10vw;
}
.font{
  font-size: 4vw;
}
.call_icon{
  a{
    display: flex;
    text-decoration: none;
    .material-icons{
      font-size: 6vw;
      -webkit-text-stroke: 1px rgb(10, 10, 10);
      color: rgb(255, 255, 255);
    }
  }
}
.call_icon:hover{
  a{
    span{
      -webkit-text-stroke: 1px #ff9619;
    }
  }
}
.mob_li{
  ul{
    margin: 0;
    padding: 0;
  }
}
.language_mob{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 3.3vw;
  line-height: 150%;
  display: flex;
  align-items: center;
  /* or 20px */

  color: rgba(52, 52, 52, 0.7);
  position:relative;

span{
  color: rgba(52, 52, 52, 0.8);
  font-size: 6.1vw;
  transition:all 0.3s ease;
  position: relative;
}

label{
  margin:0;
  position: absolute;
  top: -0.9vw;
  left: 3.5vw;
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

  width: 7vw;
  padding-left:0;

  background: #FFFFFF;
  box-shadow: 0 0.5vh 0.6vw 0.1vw rgba(0, 0, 0, 0.15);
  z-index:1;

.lang-li_mob{
  margin-left:18%;

  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 4.3vw;
  line-height: 150%;
  /* or 21px */

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;

  color: rgba(52, 52, 52, 0.7);

  .lang-menu_mob{
    font-size: 3.3vw;
    color: rgba(52, 52, 52, 0.7);
    text-decoration: none;
  }
}

  .lang-menu_mob:hover{
    color: #FF9619;
  }
}
}
.nav-menu{
  position: relative;
}
.nav-items{
  display: flex;
  background-color: #FFFFFF;
  position: absolute;
  height: 100vw;
  width: 51vw;
  top: -6.62vw;
  z-index: 2;
  padding: 6vw 0 3vw 5vw;
  left: -48.5vw;
  transform: translateX(120%);
  transition: 1s transform cubic-bezier(0.69, 0.24, 0.59, 0.81);
  flex-direction: column;
  gap: 3vw;
}
.opened{
  transform: translateX(3%);
}
.ul_cat{
  display: none;
  padding:  1vw 0;
  gap: 1vw;
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
.li_cat:hover{
  color: #ff9619;
}
.li_nav{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.9vw;
  line-height: 135%;
  list-style-type: none;
  width: 82%;
  color: #4B4844;
}
.li_nav_hover{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.9vw;
  line-height: 135%;
  list-style-type: none;
  width: 82%;
  position: relative;
  color: #4B4844;
}
.li_nav_hover:hover{
  .ul_cat{
    display: flex;
    flex-direction: column;
  }
  color: #ff9619;
}
.li_nav:hover{
  color: #ff9619;
}
.close {
  position: relative;
  z-index: 3;
  font-size: 8vw;
  font-weight: 100;
  line-height: 1;
  color: #343434;
  text-shadow: 0 1px 0 #fff;
  opacity: 1;

}

.menu-outlined{
  position: absolute;
  top: -2vw;
  left: -7vw;
  z-index: 3;
  font-size: 8vw;
}
@media screen and (max-width: 375px){
  .mob_first{
    width: 187.5px;
  }
  .mob_second{
    width: 187.5px;
  }
  .call{
    font-size: 20px;
  }
}

</style>
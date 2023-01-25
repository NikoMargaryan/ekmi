<template>
  <header>
    <nav>
        <ul class="list-default">
          <li class="cols"> <a class="href" href=""> Каталог</a> </li>
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
              <li class="lang-li" @click="currentLanguage='RU'"><router-link
                  to="/ru" class="lang-menu">RU</router-link></li>
              <li class="lang-li" @click="currentLanguage='UA'"><router-link
                  to="/ua" class="lang-menu">UA</router-link></li>
              <li class="lang-li" @click="currentLanguage='EN'"><router-link
                  to="/en" class="lang-menu">EN</router-link></li>
            </ul>

          </li>

        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data (){
    return{
      visible: false,
      flip: '',
      currentLanguage: 'RU'
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

</style>
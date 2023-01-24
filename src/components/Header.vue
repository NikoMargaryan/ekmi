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
          <li class="cols_select">
            <label for="language">
              <select id="language" class="cols_lang">
                <option
                    v-for="(language,index) in languages"
                    :key="index"
                    value="language.value"
                    class="cols_lang_option"
                >
                  {{language.value}}
                </option>
              </select>
            </label>
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
      languages :[
        {
          label: "RU",
          value: "RU"
        },
        {
          label: "ENG",
          value: "ENG"
        },
        {
          label: "UA",
          value: "UA"
        }
      ]
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
.cols_select{
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #343434;

}
label{
  margin: 0;
}
.cols_lang{
  border: 0;
}
.cols_lang_option{
  height: 0.716vw;
  width:  1.307vw;

  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9vw;
  line-height: 150%;
  /* or 20px */

  border:0;
  color: rgba(52, 52, 52, 0.7);
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
  .cols_lang{
    font-size: 13px;
  }
}
@media screen and (max-width: 1440px) {
  .cols_lang_option{
    font-size: 13px;
    height: 11px;
    width:  20px;
  }
  label{
    font-size: 13px;
  }
}


</style>
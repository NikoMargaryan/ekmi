<template>
  <header>
    <div class="container">
    <ul class="list-default">
      <li class="cols"> <a class="href" href=""> Каталог</a> </li>
      <li class="cols"> <a class="href" href=""> Индивидуальная мебель </a>  </li>
      <li class="cols"> <a class="href" href=""> Контакты </a></li>
       <li class="li_img"> <a href="http://localhost:8080/" ><img class="li_img_head" src="../assets/telegram-cloud-document-2-5233443011957888024 1.png" alt="logo"> </a> </li>
      <li class="cols"> <a class="href" href="http://localhost:8080/about"> О компании </a> </li>
      <li class="cols_num"> <a class="href" href="tel: +38 (099)-638-45-37"> +38 (099)-638-45-37 </a> </li>
      <li class="cols_select">
        <label for="language">
        <select id="language" class="cols_lang">
          <option
              v-for="(language,index) in languages"
              :key="index"
              value="language.value"
          >
            {{language.value}}
          </option>
      </select>
        </label>
      </li>
    </ul>
    </div>
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

<style scoped lang="scss" media="all">
.list-default{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 990px) {
    .href{
     font-size: 10px;
    }
    .cols{
     font-size: 10px;
    }
    .li_img_head{
      width: 150px;
    }
    .cols_num{
     font-size: 10px;
    }
    .cols_lang{
      font-size: 10px;
    }
}
  }
.li_img{
  width: 216px;
  height: 66px;
  list-style-type: none;
}
.li_img_head{
  width: 216px;
}
.cols{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
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
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
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
.cols_lang{
  /*height: 11px;*/
  /*width: 20.08969497680664px;*/

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  border:0;
  color: rgba(52, 52, 52, 0.7);
}
</style>
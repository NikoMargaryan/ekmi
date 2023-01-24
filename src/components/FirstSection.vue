<template>
  <section class="main">
    <div class="container_section">
      <div class="flex_cont">
        <div class="flex_one">
          <div class="second_writing">
            <p class="writing">ЛУЧШАЯ ЖИЗНЬ,
              СОЗДАННАЯ ДЛЯ ВАС!</p>
          </div>
            <div class="button_first">
              <button type="button" class="button_cat" >
                перейти в КАталог
              </button>
            </div>
        </div>
        <div class="flex_sec">
          <div class="first_writing">
            <p >Основано в 1993 году</p>
          </div>
          <div class="slider">
            <agile :dots="true" :autoplay="true" :autoplaySpeed="2500" :mobileFirst="true" :navButtons="false" :fade="true" >

              <div class="slide" v-for="img in imgs">
                <div class="png">
                  <img class="png_image" :src=img.pic alt="pictue">
                </div>
              </div>
            </agile>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script>
// import 'vueperslides/dist/vueperslides.css'
import { VueAgile } from 'vue-agile'


export default {
  name: "FirstSection",
  components: {
    agile: VueAgile
  },
  data(){
    return{
      imgs:[
        {
          pic: "/assets/10000_Post01.png",
        },
        {
          pic: "/assets/Ampir2.png",
        },
        {
          pic: "/assets/Leon2.png",
        }
      ]
    }
  }

}
</script>
<!--media="screen"-->
<style lang="scss" >

.main .agile {

  .agile__actions{
    margin: 2.5% 0 0 0;
    .agile__dots{
      gap: 0.65vw;
      .agile__dot{
        border: none;
        border-radius: 50%;
        background-color: #f2f3f5;

        &--current {
          background-color: #ff9619;
          border-radius: 50%;
        }

        button{
          padding: 0.45vw;
          background-color: transparent;
          border: none;
          border-radius: 50%;

        }
      }

    }

  }




}
.main{
  background: #CCB2A3;
  //width: 93.75vw;
  height: 38.41vw;
}

.container_section{
  max-width: 81.25%;
  margin: 0 auto;
}
.flex_cont{
  display:flex;
}
.flex_one{
  display: flex;
  flex-direction: column;
  gap: 3.9vw;
  justify-content: center;
}
.flex_sec{
  display: flex;
  flex-direction: column;
  gap: 2.27vw;
}
.first_writing{
  height: 1.62vw;
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4vw;
  line-height: 127.5%;
  /* or 25px */
  padding-top: 0.97vw;
  text-align: end;
  color: #FFFFFF;
}
.second_writing{
  height: 11.97vw;
  width: 18.75vw;

  display: flex;
  align-items: center;
  text-transform: capitalize;

}
.writing{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2.73vw;
  line-height: 110%;
  color: #FF9619;
}
.button_first{
  //sans-serif;
}
.button_cat{

  background: #FF9619;
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* or 24px */
  font-size: 1.04vw;
  padding:  0.9vw 1.4vw;
  text-transform: uppercase;
  color: #FFFFFF;
}
.button_cat:hover{
  background: #5B5B5B;
  color: #FFFFFF;
}
.slider{
  width: 56.6vw;
}
.png_image{
  width: 56.6vw;
  height: 40.16vw;
}
@media screen and (min-width: 1440px) {
  .main{
    height: 590px;
  }
  .container_section{
    width: 1170px;
    margin: 0 auto;
  }
  .flex_one{
     display: flex;
     justify-content: center;
     flex-direction: column;
     padding-bottom: 145px;
   }
  .flex_cont{
    gap:35px;
    padding: 0;
    display: flex;
  }
  .flex_sec{
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  .first_writing{
    font-size: 20px;
    text-align: end;
  }
  .second_writing{
    height: 184px;
    width: 270px;
  }
  .writing{
    font-size: 42px;
  }
  .button_cat{
    padding: 14px 21px;
    font-size: 16px;
  }
  .slider{
    width: 870px;
  }
  .png_image{
    width: 870px;
    height: 617px;
  }
}
@media screen and (max-width: 1440px){
  .container_section{
    width: 1170px;
    margin: 0 auto;
  }
  .flex_cont{
    gap: 55px;
  }
}
@media screen and (max-width: 980px){
  .flex_cont{
    gap: 30px;
  }
}
@media screen and (max-width: 540px){
  .flex_cont{
    gap: 25px;
  }
}


</style>









//.main::before{
//  z-index: -1;
//  height: 79%;
//  content: '';
//  top: 0;
//  left: 0;
//  position: absolute;
//}
//max-height: 51.6vw;
//height: 100%;
//position: relative;
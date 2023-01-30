<template>
  <section class="mobile_first_sec">
    <div class="flex_one_mob">
      <div class="first_writing_mob">
        <h2 class="h2_mob"><span>Л</span>УЧШАЯ ЖИЗНЬ СОЗДАННАЯ ДЛЯ ВАС!</h2>
      </div>
      <div class="slider_mob">
        <agile :dots="true" :autoplay="true" :fade="true" :autoplaySpeed="2500" :mobileFirst="true" :navButtons="false"  >
          <div class="slide" v-for="img in imgs">
            <div class="png_sec_mob">
              <img class="png_image_mob" :src=img.pic alt="pictue">
            </div>
          </div>
        </agile>
      </div>
      <div class="second_writing_mob">
        <h4 class="h4_mob">Основано в 1993 году</h4>
      </div>
      <div class="button_first_mob">
        <button type="button" class="button_cat_mob" >
          перейти в КАталог
        </button>
      </div>
    </div>
  </section>
</template>

<script>

import { VueAgile } from 'vue-agile'


export default {
  name: "FirstSectionMobile",
  components: {
    agile: VueAgile,
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
      ],
    }
  }
}
</script>

<style lang="scss">
.mobile_first_sec{
  padding-bottom: 3.97vw;
  background: #CCB2A3;
}
.agile {

  .agile__actions {
    margin: 2.5% 0 0 0;
    .agile__dots {
      gap: 1.65vw;
      .agile__dot {
        border: none;
        border-radius: 50%;
        background-color: #f2f3f5;

        &--current {
          background-color: #ff9619;
          border-radius: 50%;
        }

        button {
          padding: 1.15vw;
          background-color: transparent;
          border: none;
          border-radius: 50%;

        }
      }

    }

  }
}
.slider_mob{
  padding-top: 3.9vw;
}

.flex_one_mob{
  display: flex;
  flex-direction: column;
  gap: 3.97vw;
}
.png_image_mob{
  width: 100vw;
  height: 100%;
}
.first_writing_mob{
  padding: 4.97vw 0 4.97vw 4.97vw;
  width: 67.35vw;
  height: 11.8vw;
  .h2_mob{
    font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 4.73vw;
    line-height: 110%;
    color: #FFFFFF;
    span{
      color: #FF9619;
    }
  }
}
.second_writing_mob{
  text-align: center;
  text-transform: capitalize;
  .h4_mob{
    font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 4.3vw;
    color: #FFFFFF;
  }
}
.button_first_mob{
  text-align: center;
  padding-bottom: 3.9vw;
}
.button_cat_mob{

  background: #FF9619;
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  font-size: 4.3vw;
  padding:  0.9vw 1.4vw;
  text-transform: uppercase;
  color: #FFFFFF;
  border: none;
}
.button_cat_mob:hover{
  background: #5B5B5B;
  color: #FFFFFF;
}
</style>
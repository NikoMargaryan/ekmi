<template>
  <section class="main_second">
    <div class="container_second">
      <div class="new_slider">
        <div class="news">
          <h2><span>Н</span>овинки</h2>
        </div>
        <div class="slider_middle">
          <div class="prev">
            <img src="../../public/assets/Vector112.jpg" @click="$refs.carousel.goToPrev()" alt="previous picture">
          </div>
            <agile
              ref="carousel"
               :mobile-first="true"
               :autoplay="true"
               :pause-on-hover="true"
               :autoplaySpeed="3000"
               :center-mode="true"
               :navButtons="false"
               :dots="false"
               :slides-to-show="3"
            >
              <div class="slide" v-for="slider in sliders">
                <div class="png_second_sec">
                  <img class="png_img" :src="slider.img" alt="pictue">
                </div>
                <div class="slider_middle_content">
                  <h4>{{slider.name}}</h4>
                  <p>{{slider.price}} UAH</p>
                </div>
              </div>
            </agile>
          <div class="next">
            <img src="../../public/assets/Vector17.jpg" @click="$refs.carousel.goToNext()" alt="next picture"></div>
          </div>
        <div class="button_second">
          <button type="button" class="button_sec" >
            перейти в КАталог
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: "SecondSection",
  components: {
    agile: VueAgile
  },
  data(){
    return{
      sliders:[
        {
          img:"/assets/IMG_3505-готовый.png",
          name:"ALBA",
          price:"15 000",
          // index: 0
        },
        {
          img:"/assets/image4.png",
          name:"MARTIN",
          price:"15 000",
          // index: 1
        },
        {
          img:"/assets/732.png",
          name:"LUARA",
          price:"15 000",
          // index: 2
        },
        {
          img:"/assets/image 41.png",
          name:"TOSCANA",
          price:"15 000",
          // index: 3
        },
        {
          img:"/assets/image 15.png",
          name:"ALBA",
          price:"15 000",
          // index: 4
        }
      ],
    }
  }
}
</script>

<style lang="scss">
.main_second .agile{
  max-width: 69.01vw;
  padding-top: 3.97vw;
  .agile__slide{
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.main_second{
  padding: 10.4166666667vw 0 5.4vw 2vw;
}
.container_second{
  max-width: 81.5%;
  margin: 0 auto;
}
.news{
  padding-top: 2.734375vw;
}
.news h2{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size:  2.278vw;
  line-height: 110%;
  /* identical to box height, or 39px */
    span{
      color: #FF9619;
    }
}

.slider_middle{
  padding:  5.20vw 3.9vw;
  height:  33.07vw;
  //padding:  80px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.png_img{
  width: 16.53vw;
  height: 16.6vw;
  padding:  0.71vw  0.52vw;
  mix-blend-mode: darken;
}
.prev img{
  width: 0.91vw;
  height:  1.497vw;
}
.next img{
  width: 0.91vw;
  height:  1.497vw;
}
.png_second_sec{
  background-color: #f2f3f5;
}
.slider_middle_content{
  display: contents;
  h4{
    font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size:  1.17vw;
    //line-height: 22px;
    text-transform: uppercase;
    color: #343434;
    padding-top: 0.97vw;
  }
    p{
      font-family: 'Open Sans',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 1.17vw;
      //line-height: 25px;
      color: #FF9619;
    }
}
.button_sec{
  background: #FF9619;
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  border: none;
  font-size: 1.04vw;
  padding:  0.9vw 1.4vw;
  text-transform: uppercase;
  color: #FFFFFF;
}
.button_second{
  text-align: center;
}
.button_sec:hover{
  background: #5B5B5B;
  color: #FFFFFF;
}
@media screen and (min-width: 1400px){
  .main_second .agile{
    max-width: 1060px;
    padding-top: 60px;
  }
  .main_second{
    padding: 160px 0 83px 30px;
  }
  .container_second{
    max-width: 1173px;
    margin: 0 auto;
  }
  .news h2{
    font-size: 35px;
    span{
      font-size: 35px;
    }
  }
  .slider_middle{
    padding:  80px 60px;
    height:  507px;
    box-sizing: content-box;
  }
  .png_img{
    width: 254px;
    height: 256px;
    padding:  11px 8px;
  }
  .prev{
    width: 29.17px;
    height: 16.09px;
  }
  .next{
    width: 29.17px;
    height: 16.09px;
  }
  .slider_middle_content{

    h4{
      font-size:  18px;
      padding-top: 15px;
    }
    p{
      font-size: 18px;
    }
  }
  .button_sec{
    font-size: 16px;
    padding:  13px 21px;
  }
}
@media screen and (max-width: 1000px){
  .main_second .agile{
    padding-top: 53px;
  }
}
@media screen and (max-width: 600px){
  .main_second .agile{
    padding-top: 40px;
  }
}
</style>
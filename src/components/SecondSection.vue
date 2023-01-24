<template>
  <section class="main_second">
    <div class="container_second">
      <div class="new_slider">
        <div class="news">
          <h2><span>Н</span>овинки</h2>
        </div>
<!--&lt;!&ndash;        :dots="true"&ndash;&gt;:autoplay="true"-->
        <div class="slider_middle">
          <div class="prev"> <img src="/assets/Vector112.jpg" @click="$refs.carousel.goToPrev()" alt="previous picture"></div>
            <agile ref="carousel"  :mobile-first="true"  :pause-on-hover="true"  :autoplaySpeed="3000" :center-mode="true" :navButtons="false" :dots="false" :fade="true" :slides-to-show="3">
              <div class="slider_sec" v-for="slider in sliders">
                <div class="png_second_sec">
                  <img class="png_img" :src="slider.img" alt="pictue">
                </div>
                <div class="slider_middle_content">
                  <h4>{{slider.name}}</h4>
                  <p>{{slider.price}} UAH</p>
                </div>
              </div>
            </agile>
          <div class="next"> <img src="/assets/Vector17.jpg" @click="$refs.carousel.goToNext()" alt="next picture"></div>
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
          price:"15000"
        },
        {
          img:"/assets/image4.png",
          name:"MARTIN",
          price:"15000"
        },
        {
          img:"/assets/732.png",
          name:"LUARA",
          price:"15000"
        },
        // {
        //   img:"/assets/image 41.png",
        //   name:"TOSCANA",
        //   price:"15000"
        // },
        // {
        //   img:"/assets/image 15.png",
        //   name:"ALBA",
        //   price:"15000"
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main_second .agile{
  max-width: 1060px;
}

.main_second{
  padding: 10.4166666667vw 0 5.4vw 0;
}
.container_second{
  max-width: 83.5%;
  margin: 0 auto;
  //padding-top: 10.416666666666666vw;
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
  display: flex;
  align-items: center;
}
//.slider_sec{
//  text-align: center;
//  img {
//    margin: auto;
//    width: 200px;
//    height: 100px;
//    background-image: linear-gradient(gray 100%, transparent 0);
//  }
//}
.png_img{
  width: 16.53vw;
  height: 16.6vw;
}
.prev img{
  width: 0.91vw;
  height:  1.497vw;
}
.next img{
  width: 0.91vw;
  height:  1.497vw;
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
  /* or 24px */
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
</style>
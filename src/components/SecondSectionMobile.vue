<template>
  <section class="second_section_mob" >
    <div class="new_slider_mob">
      <div class="news_mob">
        <h2 class="h2_news_mob"><span>Н</span>овинки</h2>
      </div>
      <div class="slider_middle_mob">
        <div class="prev_mob"> <img src="../../public/assets/Vector112.jpg" @click="$refs.carousel.goToPrev()" alt="previous picture"></div>
        <agile ref="carousel" :autoplay="true"  :mobile-first="true"  :pause-on-hover="true"  :autoplaySpeed="3000" :center-mode="true" :navButtons="false" :dots="false" >
          <div class="slide" v-for="(slider,index) in sliders" :key="index">
            <div class="png_second_sec_mob">
              <img class="png_img_mob" :src="slider.img" alt="picture">
            </div>
            <div class="slider_middle_cont_mob">
              <h4>{{slider.name}}</h4>
              <p>{{slider.price}} UAH</p>
            </div>
          </div>
        </agile>
        <div class="next_mob"> <img src="../../public/assets/Vector17.jpg" @click="$refs.carousel.goToNext()" alt="next picture"></div>
      </div>
      <div class="slider_middle_mob">
        <div class="prev_mob"> <img src="../../public/assets/Vector112.jpg" @click="$refs.carousel1.goToPrev()" alt="previous picture"></div>
        <agile ref="carousel1"  :autoplay="true" :mobile-first="true"  :pause-on-hover="true"  :autoplaySpeed="3000" :center-mode="true" :navButtons="false" :dots="false" >
          <div class="slide" v-for="(slider,index) in [sliders[1],...sliders]" :key="index">
            <div class="png_second_sec_mob">
              <img class="png_img_mob" :src="slider.img" alt="picture">
            </div>
            <div class="slider_middle_cont_mob">
              <h4>{{slider.name}}</h4>
              <p>{{slider.price}} UAH</p>
            </div>
          </div>
        </agile>
        <div class="next_mob"> <img src="../../public/assets/Vector17.jpg" @click="$refs.carousel1.goToNext()" alt="next picture"></div>
      </div>
      <div class="button_second_mob">
        <button type="button" class="button_sec_mob" >
          перейти в КАталог
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: "SecondSectionMobile",
  components: {
    agile: VueAgile,
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
.second_section_mob{
  width: 100vw;
}
.new_slider_mob{
  padding-top: 20vw;
  .agile{
    width: 75vw;
    .agile__track{
      width: 75vw;
    }
    .agile--no-nav-buttons{
      width: 75vw;
    }
  }

}
.news_mob{
  padding-left: 3.97vw;
}
.h2_news_mob{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #343434;
  font-size: 4.3vw;
  span{
    color: #ff9619;
  }
}
.slider_middle_mob{
  padding: 5.2vw 5.9vw;
  display: flex;
  align-items: center
}
.prev_mob{
  padding-bottom: 25vw;
  padding-right: 3vw;
  img{
    width: 3.8vw;
    height: 4.5vw;
  }
}
.next_mob{
  padding-bottom: 25vw;
  padding-left: 3vw;
  img{
    width: 3.8vw;
    height: 4.5vw;
  }

}
.png_second_sec_mob{
  background-color: #f2f3f5;
  text-align: center;
}
.png_img_mob{
  width: 70vw;
  height: 74vw;
  mix-blend-mode: multiply;
}
.slider_middle_cont_mob{
  padding-top: 2vw;
  text-align: center;
  h4{
    font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 4.3vw;
    color: #343434;
  }
  p{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 4.3vw;
    color: #ff9619;
  }
}
.button_second_mob{
  text-align: center;
  padding-bottom: 3.9vw;
}
.button_sec_mob{

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
.button_sec_mob:hover{
  background: #5B5B5B;
  color: #FFFFFF;
}
@media screen and (max-width: 375px){
  .slider_middle_mob{
    padding: 11.5px 13.07px;
  }
}
</style>
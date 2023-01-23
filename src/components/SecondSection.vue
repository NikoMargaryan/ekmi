<template>
  <div class="main_second">
    <div class="container">
      <div class="new_slider">
        <div class="news">
          <p>Новинки</p>
        </div>
<!--        :dots="true"-->
        <div class="slider_middle">
          <agile  :autoplaySpeed="3000" :mobileFirst="true" :navButtons="true" :fade="true" >

            <div class="slide">
              <div class="png">
                <img class="png_image" src="../assets/10000_Post01.png" alt="pictue">
              </div>
            </div>

            <div class="slide">
              <div class="png">
                <img class="png_image" src="../assets/Ampir2.png" alt="pictue">
              </div>

            </div>
            <div class="slide">

              <div class="png">
                <img class="png_image" src="../assets/Leon2.png" alt="pictue">
              </div>

            </div>

          </agile>
        </div>
        <div class="button_first">
          <button type="button" class="button_cat" >
            перейти в КАталог
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondSection"
}
</script>

<style lang="scss" >
.main_second .agile{
  .agile__actions{
    margin: 2.5% 0 0 0;
  }
}

.main_second{
  padding-top: 10.4166666667vw;
}
.container{
  max-width: 81.25%;
  margin: 0 auto;
  padding-top: 10.416666666666666vw;
}
.news{
  padding-top: 2.734375vw;
  //height: ;
  //width: ;
  //display: flex;
  //align-items: center;
}
.news p{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size:  2.278vw;
  line-height: 110%;
  /* identical to box height, or 39px */
}
.slider_middle{
  //width: ;
  //height: ;
  //
}

</style>
<template>
  <div class="conatiner">
    <div class="main">
      <div class="first_writing">
        <p >Основано в 1993 году</p>
      </div>
      <div class="second_writing">
          <p>ЛУЧШАЯ ЖИЗНЬ,
            СОЗДАННАЯ ДЛЯ ВАС!</p>
      </div>
      <button type="button" class="button_first" >
      перейти в КАталог
      </button>
      <div class="slider">
            <agile class="agile" :dots="true" :autoplaySpeed="3000" :mobileFirst="true" :navButtons="false" >

              <div class="slide">
                <div class="png">
                  <img src="../assets/10000_Post01.png" alt="pictue">
                </div>
              </div>

              <div class="slide">
                <div class="png">
                  <img src="../assets/Ampir2.png" alt="pictue">
                </div>

              </div>
              <div class="slide">

                <div class="png">
                  <img src="../assets/Leon2.png" alt="pictue">
                </div>

              </div>

            </agile>
      </div>


    </div>
  </div>
</template>


<script>
// import 'vueperslides/dist/vueperslides.css'
import { VueAgile } from 'vue-agile'


export default {
  name: "FirstSection",
  components: {
    agile: VueAgile
  }

}
</script>

<style lang="scss" >

.agile {

  .agile__actions{
    margin: 2.5% 0px 0px 0px;
    .agile__dots{
      gap: 10px;
      .agile__dot{
        border: none;
        border-radius: 50%;
        background-color: #f2f3f5;

        &--current {
          background-color: #ff9619;
          border-radius: 50%;
        }

        button{
          padding: 7px;
          background-color: transparent;
          border: none;
          border-radius: 50%;

        }
      }

    }

  }




}

.main{
  height: 590px;
  display:flex;
  background: #CCB2A3;
}
.first_writing{
  height: 25px;
  left: 1100px;
  top: 151px;
  position: absolute;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 127.5%;
  /* or 25px */

  display: flex;
  align-items: center;

  color: #FFFFFF;
}
.second_writing{
  position: absolute;
  height: 184px;
  width: 270px;
  left: 135px;
  top: 290px;


  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 110%;
  /* or 46px */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #FF9619;

}
//.png{
//  position: absolute;
//  width: 800px;
//  height: 617px;
//  left: 435px;
//  top: 211px;
//}
.button_first{
  position: absolute;
  width: 209.54px;
  height: 43px;
  left: 134px;
  top: 534px;

  background: #5B5B5B;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */


  text-transform: uppercase;
  color: #FFFFFF;
}

.slider{
  position: absolute;
  height: 617px;
  width: 870px;
  left: 435px;
  top: 211px;

}
</style>
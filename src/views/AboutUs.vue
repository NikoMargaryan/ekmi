<template>
  <div class="about">
    <section>
      <div class="conatiner">
        <div class="first">
          <div class="history">
            <p class="p_history">
              Наша история
            </p>
          </div>
            <div class="bcg_img">
              <img src="../assets/Босфор1.png" alt="PNG">
            </div>
              <div class="box">
                <h3 class="h_box">
                  Наработки длинной в 25 лет
                </h3>
                  <p class="p_box">
                    Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей
                  </p>
              </div>
        </div>
      </div>
      </section>
    <footer>
      <div class="second">
        <div class="sec_flex">
          <div>
            <p class="p_sec">1993</p>
          </div>
          <div>
            <p class="p_big">25 лет </p>
          </div>
          <div>
            <p class="p_sec">2021</p>
          </div>
        </div>
      </div>
    </footer>


  </div>
</template>

 <style lang="scss">
 .container{
   width:1170px;
 }
.history {
  position: absolute;
  width: 256px;
  height: 37px;
  left: 126px;
  top: 175px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 150%;
  /* or 52px */

  display: flex;
  align-items: center;

  color: #343434;
}
.p_history:hover{
  color: #FF9619;
}
.bcg_img{
  position: absolute;
  width: 800px;
  height: 543px;
  left: 505px;
  top: 225px;
}
.box{
  position: absolute;
  width: 538px;
  height: 247px;
  left: 126px;
  top: 290px;

  background: #5B5B5B;
}
.h_box{
  position: absolute;
  height: 25px;
  left: 42px;
  top: 51px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  /* identical to box height, or 25px */

  display: flex;
  align-items: center;
  letter-spacing: 0.1em;

  color: #FFFFFF;

}
.p_box{
  position: absolute;
  height: 96px;
  width: 454px;
  left: 42px;
  top: 114px;


  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 135%;
  /* or 24px */

  display: flex;
  align-items: center;
  letter-spacing: 0.1em;

  color: #FFFFFF;
}
.second{
  position: relative;
  left: -45px;
  top: 700px;
}
.sec_flex{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.p_sec{
  height: 32px;
  width: 53.549224853515625px;
  top: 800px;


  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 127.5%;
  /* identical to box height, or 32px */

  display: flex;
  align-items: center;

  color: #343434;

}
.p_big{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 144px;
  line-height: 150%;
  /* or 216px */

  display: flex;
  align-items: center;

  color: rgba(90, 90, 90, 0.1);
}
 @media screen and (max-width: 540px) {

 }
 @media screen and (max-width: 440px) {

 }

 @media screen and (max-width: 390px) {

 }
 </style>
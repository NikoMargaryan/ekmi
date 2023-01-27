<template>
  <div class="about">
      <div class="container_sec_2">
        <div class="history">
          <h2 class="p_history">
            <span>Н</span>аша история
          </h2>
        </div>
          <div class="first">
                <div class="box">
                  <div class="div_1">
                    <h3 class="h_box">
                      Наработки длинной в 25 лет
                    </h3>
                  </div>
                  <div class="div_2">
                    <p class="p_box">
                      Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей
                    </p>
                  </div>
                </div>
          </div>
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
      </div>


  </div>
</template>

 <style lang="scss">
 .about{
   //margin: 0 auto;
 }
 .container_sec_2{
   max-width: 81.25%;
   margin: 0 auto;
 }
 .history{
   width: 16.6vw;
 }
.p_history {
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.27vw;
  line-height: 150%;
  /* or 52px */
  color: #343434;
  span{
    color: #FF9619;
  }
}

.first{
  display: flex;
  flex-direction: row;
  padding-top: 5.2vw;
}
.h_box{
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.30vw;
  line-height: 125%;
  /* identical to box height, or 25px */
  letter-spacing: 0.1em;
  color: #FFFFFF;
}
.p_box{
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.17vw;
  line-height: 135%;
  /* or 24px */
  letter-spacing: 0.1em;

  color: #FFFFFF;
}
 .bcg_1{
   width:  52.08vw;
   //height: 35.35px;
 }
 .bcg_img{
   width:  52.08vw;
   height: 35.35vw;
 }
 .box{
   padding: 3.25vw 2.73vw;
   background: #5B5B5B;
   max-width: 35.02vw;
   height: 16.08vw;
   position: relative;
 }
 .box::before{
   background-image: url("../../public/assets/Босфор1.png");
   content: "";
   position: absolute;
   width: 52.08vw;
   height: 35.35vw;
   z-index: -1;
   top: -4.29vw;
   left: 24.08vw;
   background-size: cover;
 }
 .box::after{
   content: "";
   position: absolute;
   top: 14.32vw;
   left: 23.95vw;
   width: 6.57vw;
   height: 3.58vw;
   background-color: #FF9619;
 }
 .second{
  padding-top: 20.18vw;
}
.sec_flex{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.p_sec{
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.62vw;
  line-height: 127.5%;
  /* identical to box height, or 32px */
  color: #343434;
}
.p_big{
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9.375vw;
  line-height: 150%;
  /* or 216px */

  display: flex;
  align-items: center;

  color: rgba(90, 90, 90, 0.1);
}
 @media screen and (min-width: 1440px){
   .container_sec_2{
     max-width: 1170px;
     margin: 0 auto;
   }
   .box{
     width: 538px;
     height: 247px;
     padding: 50px 42px;
     position: relative;
   }
   .box::before{
     Width: 800px;
     Height: 543px;
     position: absolute;
     top: -66px;
     left: 370px;
   }
   .box::after{
     width: 101px;
     height: 55px;
     left: 361px;
     top: 220px;
   }
   .h_box{
     font-size: 20px;
   }
   .p_box{
     font-size: 18px;
   }
   .p_sec{
     font-size: 25px;
   }
   .p_big{
     font-size: 144px;
   }
   .history{
     width: 256px;
   }
   .p_history{
     font-size: 35px;
   }
   .second{
     padding-top: 310px;
   }
 }
 //@media screen and (max-width: 1300px){
 //  .box::after{
 //    position:absolute;
 //
 //  }
 //}
 </style>
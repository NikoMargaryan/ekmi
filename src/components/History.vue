<template>
<div class="history">
    <div class="history_mob">
      <h2 class="p_history_mob">
        <span>Н</span>аша история
      </h2>
    </div>
    <div class="first_mob">
      <div class="box_mob">
        <div class="div_1_mob">
          <h3 class="h_box_mob">
            Наработки длинной в 25 лет
          </h3>
        </div>
        <div class="div_2_mob">
          <p class="p_box_mob">
            Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей
          </p>
        </div>
      </div>
    </div>
    <div class="second_mob">
      <div class="sec_flex_mob">
        <div class="year">
          <p class="p_big_mob">25 лет </p>
        </div>
        <div class="date_main">
          <div class="date_mob">
            <p class="p_sec_mob">1993</p>
          </div>
          <div class="date_mob">
            <p class="p_sec_mob">2021</p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "History"
}
</script>

<style lang="scss" scoped>
.history{
  padding: 9vw 0;
}
.first_mob{
  padding-top: 6vw;
}
.history_mob{
  padding-left: 3.97vw;
}
.p_history_mob{
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #343434;
  font-size: 4.3vw;
  span{
    color: #ff9619;
  }
}
.box_mob{
  background-color: #5B5B5B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8vw 3.97vw;
  position: relative;
}
.box_mob::before{
  background-image: url("../../public/assets/Босфор1.png");
  content: "";
  position: absolute;
  width: 91.08vw;
  height: 53.35vw;
  z-index: 1;
  top: 50.7vw;
  left: 4.08vw;
  background-size: cover;
}
.box_mob::after{
  content: "";
  position: absolute;
  top: 46.4vw;
  left: 88vw;
  z-index: 10;
  width: 12vw;
  height: 12vw;
  background-color: #FF9619;
}
.div_1_mob{
  width: 79%;
}
.div_2_mob{
  width: 87%;
}
.h_box_mob{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 4vw;
  line-height: 125%;
  color: #FFFFFF;
}
.p_box_mob{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 3.8vw;
  line-height: 135%;
  color: #FFFFFF;
}
.sec_flex_mob{
  padding: 60vw 3.97vw 0 3.97vw;
}
.date_main{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 97%;
}
.p_big_mob{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30vw;
  line-height: 150%;
  color: rgba(52, 52, 52, 0.1);;
}
.p_sec_mob{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 4.3vw;
  line-height: 127.5%;
  color: #343434;
}
</style>
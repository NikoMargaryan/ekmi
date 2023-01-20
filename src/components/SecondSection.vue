<template>
  <div class="container">
    <div class="new_slider">
      <div class="news">
        <p>Новинки</p>
      </div>
      <div class="slider_middle">

      </div>
      <div class="btn">
        <button type="button" class="button" >
          перейти в КАталог
        </button>
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
.news{
  position: absolute;
  height: 39px;
  width: 152px;
  left: 135px;
  top: 1020.908203125px;



  display: flex;
  align-items: center;
}
.news p{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 110%;
  /* identical to box height, or 39px */
}
.slider_middle{
  width: 1063px;
  height: 423px;
  position: absolute;
  left: 185px;
  top: 1069.908203125px;
  background-color: #2c3e50;
}
.btn{
  padding-top: 20px;
}
.button{
    position: absolute;
    height: 43px;
    width: 209.5416717529297px;
    left: 615px;
    top: 1547.908203125px;
    border-radius: 0px;


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
</style>
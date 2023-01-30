<template>
  <div id="app">
    <Header   v-if="screenSize > 375"/>
    <HeaderMobile v-else/>
    <router-view />
  </div>
</template>

<style lang="scss">

</style>

<script>
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";

export default {
  components: {HeaderMobile, Header },
  data(){
    return{
      screenSize: '',
    }
  },
  mounted(){
    this.screenSize= window.screen.width

    window.onresize=()=>{
      this.screenSize= window.screen.width
    }
  }
}
</script>

<style lang="scss">
#app {
}

</style>

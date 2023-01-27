<template>
  <div class="home">
    <first-section />
    <second-section />
    <history v-if="screenSize <= 375" />
  </div>
</template>

<script>
// @ is an alias to /src

import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import History from "@/components/History";


export default {
  name: 'HomeEkmi',
  components: {History, SecondSection, FirstSection},
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

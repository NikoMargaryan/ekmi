<template>
  <div class="home">
    <first-section v-if="screenSize > 375" />
    <FirstSectionMobile v-else-if="screenSize <= 375"/>
    <second-section v-else-if="screenSize > 375" />
    <SecondSectionMobile v-else-if="screenSize <= 375"/>
    <history v-if="screenSize <= 375" />
  </div>
</template>

<script>
// @ is an alias to /src

import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import History from "@/components/History";
import FirstSectionMobile from "@/components/FirstSectionMobile";
import SecondSectionMobile from "@/components/SecondSectionMobile";


export default {
  name: 'HomeEkmi',
  components: {SecondSectionMobile, FirstSectionMobile, History, SecondSection, FirstSection},
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

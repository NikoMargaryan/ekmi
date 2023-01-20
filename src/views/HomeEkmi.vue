<template>
  <div class="home">
    <first-section />
    <second-section />
  </div>
</template>

<script>
// @ is an alias to /src

import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";


export default {
  name: 'HomeEkmi',
  components: {SecondSection, FirstSection},
}
</script>

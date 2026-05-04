<template>
  <NavBar />
  <HomeWork />
  <ExpertMedical />
  <Footer></Footer>
</template>
<script setup>
import ExpertMedical from '@/components/ExpertMedical.vue';
import HomeWork from '@/components/HomeWork.vue';

import NavBar from '@/components/NavBar.vue';

import Footer from '@/components/Footer.vue';

</script>
<style scoped>
.animationtransform {
  animation: translate 9s ease-in-out infinite;
}

@keyframes translate {
  0% {
    transform: translateY(15px);
  }

  50% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(15px);
  }
}
</style>

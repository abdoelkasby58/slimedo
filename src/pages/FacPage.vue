<template>
  <NavBar :logo="SlimedoLogo"/>
  <header class="flex flex-col gap-5 items-center justify-center py-10">
<FacQuestion/>
   <BoxCheckTo/>
  </header>
  <Footer></Footer>
</template>
<script setup>

import NavBar from "@/components/NavBar.vue";
import SlimedoLogo from "@/assets/slimedo_logo.Webp";
import Footer from "@/components/Footer.vue";
import FacQuestion from "@/components/FacQuestion.vue";
import BoxCheckTo from "@/components/BoxCheckTo.vue";

</script>
<style scoped></style>

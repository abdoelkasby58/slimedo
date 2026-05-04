<template>
  <NavBar :logo="SlimedoLogo" />
  <HeroSection />
  <HomeWork />
  <ExpertMedical />
  <Chart />
  <BlogSection />

  <Footer></Footer>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import HeroSection from "@/components/HeroSection.vue";
import NavBar from "@/components/NavBar.vue";
import SlimedoLogo from "@/assets/slimedo_logo.png";
import HomeWork from "@/components/HomeWork.vue";
import ExpertMedical from "@/components/ExpertMedical.vue";
import Chart from "@/components/Chart.vue";
import BlogSection from "@/components/BlogSection.vue";
</script>
<style scoped></style>

<template>
<NavBar :logo="SlimedoLogo"/>
    <Chart />
    <BlogSection />
<Footer></Footer>
</template>
<script setup>
import BlogSection from "@/components/BlogSection.vue";
import Chart from "@/components/Chart.vue";
import SlimedoLogo from "@/assets/slimedo_logo.png";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>
<style scoped></style>

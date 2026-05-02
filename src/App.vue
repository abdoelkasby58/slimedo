<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import SlimedoLogo from "@/assets/slimedo_logo.png";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header class="flex flex-col bg-[#F4F7FF]">
    <NavBar :logo="SlimedoLogo" />
    <RouterView />
    <Footer></Footer>
  </header>
</template>

<style scoped></style>

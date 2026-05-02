<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

import Footer from "@/components/Footer.vue";
</script>

<template>
  <header class="flex flex-col bg-[#F4F7FF]">
   
    <RouterView />
 
  </header>
</template>

<style scoped></style>

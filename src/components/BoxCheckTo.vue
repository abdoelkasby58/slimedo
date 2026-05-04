<template>
  <section class="w-full py-10 px-5">
    <div
      class="relative w-full max-w-[1200px] h-[60vh] mx-auto rounded-3xl overflow-hidden flex items-center justify-center"
    >
      <!-- BACKGROUND IMAGE -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        loading="lazy"
        :style="{ backgroundImage: `url(${ImgGradient})` }"
      ></div>

      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black/0"></div>

      <!-- BIG BACK TEXT -->
      <h1
        class="absolute text-[200px] font-bold text-white/20 top-40 group-hover:top-10 group-hover:scale-110 transition-all duration-700 ease-out select-none pointer-events-none"
      >
        SLIMEDO
      </h1>

      <!-- CONTENT -->
      <div
        class="relative z-10 text-center flex flex-col items-center text-white px-6 max-w-xl"
      >
        <!-- LOGO -->
        <img
          :src="Logo"
          loading="lazy"
          decoding="async"
          class="w-20 mx-auto mb-4"
          alt="Slimedo Logo"
        />

        <!-- TITLE -->
        <h2 class="text-3xl font-bold mb-3">Your Health, Simplified</h2>

        <!-- PARAGRAPH -->
        <p class="text-sm opacity-90 mb-6">
          Experience modern telemedicine solutions designed to make your life
          easier, faster, and healthier.
        </p>

        <!-- BUTTON -->
        <button
          class="flex items-center justify-center gap-1 pl-3 pr-2 py-2 bg-[#fff] text-[#29584F] rounded-full hover:bg-transparent border-2 border-[#29584F] transition"
          @click="$router.push('/check')"
        >
          check suitability
          <span class="bg-[#29584F] p-1 rounded-[50%] text-[#fff]"
            ><Icon icon="material-symbols:arrow-forward-ios-rounded"
          /></span>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import ImgGradient from "@/assets/bg-gradient.png";
import Logo from "@/assets/slimedo_logo.png";

</script>
<style scoped></style>

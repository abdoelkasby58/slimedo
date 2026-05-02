<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  logo: String,
});

const isOpen = ref(false);
</script>

<template>
  <header class="navbar bg-[#F4F7FF]">
    <div class="navbar-container flex items-center justify-between mt-3 px-6 py-3">
      <!-- Logo -->
      <div class="img-logo w-[140px]">
        <img :src="logo" class="w-18" alt="logo" />
      </div>

      <!-- Hamburger (Mobile) -->
      <button class="md:hidden text-2xl" @click="isOpen = !isOpen">☰</button>

      <!-- Nav Links -->
      <nav
        :class="[
          'absolute md:static top-[70px] left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 z-[10]',
          isOpen
            ? 'mt-7 max-h-[300px] opacity-100'
            : 'm-h-0 opacity-0 md:opacity-100 md:max-h-full',
          'md:block',
        ]"
      >
        <ul
          class="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-5 md:p-0 text-sm text-[#414141b9]"
        >
          <div class="flex">
            <li>
              <RouterLink class="hover:text-black transition" to="/"
                >WeightLossPrograms</RouterLink
              >
            </li>
            <div tabindex="0" class="text-[#414141b9] hover:text-black transition">
              <Icon
                icon="material-symbols:keyboard-arrow-down-rounded"
                width="24"
                height="24"
              class="transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
          </div>
          <li>
            <RouterLink class="hover:text-black transition" to="/howitworks"
              >HowItWorks</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:text-black transition" to="/blog"
              >Blog</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:text-black transition" to="/fac"
              >FAC</RouterLink
            >
          </li>
        </ul>
      </nav>

      <!-- Buttons -->
      <div class="hidden md:flex gap-3">
        <button
          class="px-4 py-2 border-2 border-[#29584F] rounded-[20px] hover:bg-[#29584F] hover:text-white transition"
        >
          log in
        </button>
        <button
        @click="$router.push('/check')" 
        class="px-4 py-2 text-white border-2 border-[#29584F] bg-[#29584F] rounded-[20px] hover:bg-transparent hover:text-black transition"
        >
          check suitability
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped></style>

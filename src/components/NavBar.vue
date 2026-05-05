<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
const refresh = () => {
  router.push("/")
}
import SlimedoLogo from "@/assets/slimedo_logo.png"

const isOpen = ref(false);
</script>

<template>
  <header
    class="navbar bg-[#f4f7ffa2] h-[100px] w-full sticky flex flex-col justify-center top-1 rounded-[500px] z-[111]">
    <div class="navbar-container flex items-center justify-between m-1 md:m-3 px-6">
      <!-- Logo -->
      <div class="img-logo w-[140px]" @click="refresh">
        <img :src="SlimedoLogo" loading="lazy" class="w-14 md:w-18" alt="logo" />
      </div>

      <!-- Hamburger (Mobile) -->
      <button class="md:hidden text-2xl" @click="isOpen = !isOpen">☰</button>

      <!-- Nav Links -->
      <nav :class="[
        'absolute md:static top-[70px] left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 z-[10]',
        isOpen
          ? 'mt-7 max-h-[400px] opacity-100'
          : 'max-h-0 opacity-0 md:opacity-100 md:max-h-full',
        'md:block overflow-hidden',
      ]">
        <ul class="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-5 md:p-0 text-sm text-[#414141b9]">
          <div class="flex">
            <li>
              <RouterLink class="hover:text-black transition" to="/">
                WeightLossPrograms
              </RouterLink>
            </li>
            <div tabindex="0" class="hover:text-black transition">
              <Icon icon="material-symbols:keyboard-arrow-down-rounded" width="24" height="24" />
            </div>
          </div>

          <li>
            <RouterLink class="hover:text-black transition" to="/howitworks">
              HowItWorks
            </RouterLink>
          </li>

          <li>
            <RouterLink class="hover:text-black transition" to="/blog">
              Blog
            </RouterLink>
          </li>

          <li>
            <RouterLink class="hover:text-black transition" to="/fac">
              FAQ
            </RouterLink>
          </li>

          <!-- ✅ Buttons داخل المينيو -->
          <div class="flex flex-col md:hidden w-full gap-3 mt-4">
            <button @click="$router.push('/login')"
              class="w-full px-4 py-2 border-2 border-[#29584F] rounded-[20px] hover:bg-[#29584F] hover:text-white transition">
              log in
            </button>

            <button @click="$router.push('/check')"
              class="w-full px-4 py-2 text-white border-2 border-[#29584F] bg-[#29584F] rounded-[20px] hover:bg-transparent hover:text-black transition">
              check suitability
            </button>
          </div>
        </ul>
      </nav>

      <!-- Buttons -->
      <div class="hidden md:flex gap-3">
        <button @click="$router.push('/login')"
          class="px-4 py-2 border-2 border-[#29584F] rounded-[20px] hover:bg-[#29584F] hover:text-white transition">
          log in
        </button>
        <button @click="$router.push('/check')"
          class="px-4 py-2 text-white border-2 border-[#29584F] bg-[#29584F] rounded-[20px] hover:bg-transparent hover:text-black transition">
          check suitability
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped>
h1 {
  color: #f4f7ffa2;
}
</style>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { Icon } from "@iconify/vue";


const showScroll = ref(false)
const handleScroll = () => {
  showScroll.value = window.scrollY > 300
}
const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <header class="flex flex-col bg-[#F4F7FF]">
     <div :class="[
    'fixed bottom-5 right-5 cursor-pointer transition-all duration-300 flex items-center justify-center rounded-full shadow-md z-[1111]',
    showScroll
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-5 pointer-events-none'
  ]" @click="ScrollToTop">
    <div
      class="bg-[#26594E] hover:bg-[#1e463d] opacity-70 hover:opacity-100 text-white p-2 text-2xl md:text-4xl rounded-full transition-all duration-300 hover:scale-110">
      <Icon icon="material-symbols:keyboard-arrow-up-rounded"  />
    </div>
  </div>
    <RouterView />

  </header>
</template>

<style scoped></style>

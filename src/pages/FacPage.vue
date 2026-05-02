<template>
  <header class="flex flex-col gap-5 items-center justify-center py-10">
    <section class="flex flex-col items-center">
      <h1
        class="text-sm px-2 py-1 mb-6 bg-[#E3ECE9] w-fit rounded-[20px] font-bold text-[#26594E]"
      >
        fac
      </h1>
      <h4 class="text-4xl font-bold text-black mb-2">
        frequently asked questions
      </h4>
      <p class="text-[13px] text-[#666] mt-2 text-center">
        everything you need to know about our telemedicine service
      </p>
    </section>
    <!-- FAQ -->
    <section
      class="w-full max-w-2xl flex flex-col justify-center items-center gap-4 px-5"
    >
      <div
        v-for="(item, i) in faqs"
        :key="i"
        class="border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
      >
        <!-- QUESTION -->
        <button
          @click="toggle(i)"
          class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50 transition"
        >
          {{ item.question }}
          <span
            class="transition-transform duration-300 flex items-center text-xl text-[#29584f]"
          >
            <Icon
              v-if="activeIndex !== i"
              icon="material-symbols:add-2-rounded"
              class=""
            />
            <Icon
              v-else
              icon="material-symbols:check-indeterminate-small-rounded"
              class="text-[23px] bg-[#29584f] rounded-[50%] text-[#fff]"
            />
          </span>
        </button>
        <!-- ANSWER -->
        <div
          class="overflow-hidden transition-all duration-300"
          :class="activeIndex === i ? 'max-h-[200px] p-4' : 'max-h-0 px-4'"
        >
          <p class="text-sm text-gray-600 p-5">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </section>
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
          <img :src="Logo" class="w-20 mx-auto mb-4" alt="logo" />

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
          >
            check suitability
            <span class="bg-[#29584F] p-1 rounded-[50%] text-[#fff]"
              ><Icon icon="material-symbols:arrow-forward-ios-rounded"
            /></span>
          </button>
        </div>
      </div>
    </section>
  </header>
</template>
<script setup>
import { ref } from "vue";
import ImgGradient from "@/assets/bg-gradient.png";
import Logo from "@/assets/slimedo_logo.png";
const activeIndex = ref(null);

const toggle = (i) => {
  activeIndex.value = activeIndex.value === i ? null : i;
};

const faqs = [
  {
    question: "What is this service about?",
    answer:
      "This platform helps you connect with healthOur services are expanding globally and available in many countriescare professionals easily.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up Our services are expanding globally and available in many countriesand follow the onboarding steps.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use aOur services are expanding globally and available in many countriesdvanced encryption to keep your data safe.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely, yoOur services are expanding globally and available in many countriesu can cancel your subscription whenever you want.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, 24/7Our services are expanding globally and available in many countries support is available for all users.",
  },
  {
    question: "Is this available worldwide?",
    answer:
      "Our services are expanding globally and available in many countries Our services are expanding globally and available in many countries.",
  },
];
</script>
<style scoped></style>

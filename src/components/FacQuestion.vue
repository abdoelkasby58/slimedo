<template>
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
</template>
<script setup>
import { ref } from "vue";
const toggle = (i) => {
  activeIndex.value = activeIndex.value === i ? null : i;
};
const activeIndex = ref(null);
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

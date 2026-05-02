<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#0B1B18] rounded-tr-[100px]"
  >
    <!-- TITLE -->
    <div class="flex flex-col justify-center items-center max-w-2xl mb-12">
      <h1
        class="text-sm px-2 py-1 mb-6 bg-[#E3ECE9] w-fit rounded-[20px] font-bold text-[#26594E]"
      >
        How It Works
      </h1>
      <h2 class="text-4xl font-bold text-[#fff] mb-4">How It Works</h2>

      <p class="text-[#666] leading-relaxed text-center">
        Follow simple steps to start your journey with us. Everything is
        designed to be easy, fast, and effective.
      </p>
    </div>

    <!-- BOXES -->
    <div class="flex flex-wrap justify-center gap-6 mx-10">
      <!-- BOX -->
      <div
        v-for="(box, index) in iconboxes"
        :key="index"
        class="p-6 rounded-2xl border border-white/40 backdrop-blur-md flex flex-col gap-4 shadow-lg hover:scale-101 transition"
      >
        <section class="flex justify-between">
          <!-- LOGO -->
          <div
            class="p-2 bg-[#E3ECE9] rounded-full flex items-center justify-center"
          >
            <span class="text-[#29584F] text-3xl"
              ><Icon :icon="box.icon" loading="lazy" style="color: #29584f"
            /></span>
          </div>
          <!-- NUMBER -->
          <span class="text-4xl font-bold text-[#29584F]">
            0{{ index + 1 }}
          </span>
        </section>
        <section>
          <!-- TITLE -->
          <h3 class="text-lg font-semibold text-white text-[#1f1f1f] pb-3">
            {{ box.title }}
          </h3>

          <!-- PARAGRAPH -->
          <p class="text-sm text-[#666]">
            {{ box.description }}
          </p>
        </section>
      </div>
    </div>
  </section>
</template>
<script setup>
const iconboxes = [
  {
    id: 1,
    title: "Suitability Check",
    description:
      "Complete a quick medical questionnaire to check if our treatment is suitable for you.",
    icon: "material-symbols:list-alt-check-rounded",
  },
  {
    id: 2,
    title: "Medical Questionnaire",
    description:
      "Provide detailed health information for our physicians to review your case thoroughly.",
    icon: "material-symbols:fact-check-rounded",
  },
  {
    id: 3,
    title: "Medical Review",
    description:
      "Licensed physicians review your information and approve your prescription if suitable.",
    icon: "material-symbols:medical-information",
  },
  {
    id: 4,
    title: "Pharmacy & Delivery",
    description:
      "Choose your preferred pharmacy and receive your prescription quickly and discreetly.",
    icon: "material-symbols:local-pharmacy",
  },
];
</script>
<style scoped></style>

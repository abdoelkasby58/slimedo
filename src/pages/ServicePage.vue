<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#0B1B18] rounded-tr-[100px]"
  >
    <!-- TITLE -->
    <div class="flex flex-col justify-center items-center max-w-2xl mb-12">
       <h1 class="text-sm px-2 py-1 mb-6 bg-[#E3ECE9] w-fit rounded-[20px] font-bold text-[#26594E]">How It Works</h1>
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
              ><Icon :icon="box.icon" style="color: #29584f"
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
  <div class="min-h-screen flex flex-col items-center px-6 py-16 bg-[#F4F7FF]">
    <!-- HEADER -->
    <div class="flex flex-col items-center mb-12 capitalize">
      <h1
        class="text-sm px-2 py-1 mb-6 bg-[#E3ECE9] w-fit rounded-[20px] font-bold text-[#26594E]"
      >
        expert medical professionals
      </h1>
      <h1 class="text-4xl font-bold text-black mb-2">meet our expert team</h1>
      <p class="text-[13px] text-[#666] mt-2 text-center">
        Licensed physicians dedicated to providing comprehensive medical<br />review
        and individualized prescription decisions
      </p>
    </div>

    <!-- BOXES -->
    <div class="flex flex-row flex-wrap justify-center gap-6">
      <!-- BOX -->
      <div
        v-for="(nurse, index) in nurses"
        :key="index"
        class="relative bg-[#B8C6C3] hover:rotate-x-20 hover:rotate-y-10 transition duration-400 rounded-2xl overflow-hidden group"
      >
        <!-- IMAGE -->
        <img
          :src="nurse.img"
          class="animationtransform w-[45vh] h-full object-cover group-hover:scale-110 transition duration-500"
          alt="nurse"
        />

        <!-- OVERLAY TEXT -->
        <div
          class="absolute bottom-0 left-0 w-full p-4 backdrop-blur-md bg-white/10 text-black"
        >
          <h3 class="text-lg font-semibold">
            {{ nurse.name }}
          </h3>

          <p class="text-sm opacity-90">
            {{ nurse.specialty }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const nurses = [
  {
    name: "Dr. John Williams",
    specialty: "Cardiology Specialist",
    img: "src/assets/pexels-oys-photography-838143052-19438561-removebg-preview.png",
  },
  {
    name: "Dr. Sarah Johnson",
    specialty: "Pediatric Care",
    img: "src/assets/pexels-tima-miroshnichenko-5407249-removebg-preview.png",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "General Health",
    img: "src/assets/pexels-konrads-photo-32254655-removebg-preview.png",
  },
  {
    name: "Dr. James Anderson",
    specialty: "Emergency Care",
    img: "src/assets/pexels-konrads-photo-32160037-removebg-preview.png",
  },
];
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
<style scoped>
.animationtransform{
  animation: translate 9s ease-in-out infinite;
}
@keyframes translate {
  0%{
    transform: translateY(15px);
  }
  50%{
    transform: translateY(0px);
  }
  100%{
    transform: translateY(15px);
  }
}
</style>

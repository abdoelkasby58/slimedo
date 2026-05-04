<template>
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
          loading="lazy"
          decoding="async"
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
import img1 from '@/assets/pexels-oys-photography-838143052-19438561-removebg-preview.png'
import img2 from '@/assets/pexels-tima-miroshnichenko-5407249-removebg-preview.png'
import img3 from '@/assets/pexels-konrads-photo-32254655-removebg-preview.png'
import img4 from '@/assets/pexels-konrads-photo-32160037-removebg-preview.png'
const props = defineProps({
  nurses: {
    type: Array,
    required: true,
  },
});
const nurses = [
  {
    name: "Dr. John Williams",
    specialty: "Cardiology Specialist",
    img: img1,
  },
  {
    name: "Dr. Sarah Johnson",
    specialty: "Pediatric Care",
    img:img2,
  },
  {
    name: "Dr. Michael Chen",
    specialty: "General Health",
    img: img3,
  },
  {
    name: "Dr. James Anderson",
    specialty: "Emergency Care",
    img: img4,
  },
];

</script>

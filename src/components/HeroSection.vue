<template>
  <header
    class="w-full flex flex-col lg:flex-row items-center justify-between px-6 py-6"
  >
    <!-- BOX 1 -->
    <div class="flex flex-col gap-6 flex-1 pl-1 lg:pl-10">
      <span
        class="w-fit text-[#26594E] capitalize font-bold inline-flex items-center gap-1 text-sm bg-[#E3ECE9] rounded-[20px] px-3 py-1"
      >
        <Icon
          icon="material-symbols:star-shine-outline"
          width="17"
          height="17"
        />
        your telemedicine partner
      </span>
      <h1 class="text-4xl font-bold text-black">
        medically reviewed<br />
        <span class="inline-flex items-center gap-2 text-[#26594E] w-fit">
          online prescriptions

          <div
            class="relative w-[50px] h-6 bg-[#E3ECE9] rounded-full flex items-center justify-center"
          >
            <img
              :src="GrainLogo"
              class="absolute w-[100px] max-w-[100%] bottom-[-7px]"
              loading="lazy"
              decoding="async"
              alt="Slimedo Logo"
            />
          </div>
        </span>
      </h1>

      <p class="text-[#666] leading-relaxed">
        Telemedicine-approved by licensed physicians. Get your prescription<br />
        reviewed and approved from the comfort of your home.
      </p>

      <button
        @click="$router.push('/reviewed')"
        class="w-fit px-4 py-2 bg-[#29584F] text-white capitalize rounded-full hover:bg-transparent hover:text-black border-2 border-[#29584F] transition"
      >
        rewviewed & receive a prescription
      </button>

      <div class="flex gap-4 mt-4 capitalize">
        <div
          class="p-2 bg-gray-100 flex flex-col items-center gap-2 rounded-lg"
        >
          <Icon
            icon="material-symbols:assignment-turned-in-outline-rounded"
            width="30"
            height="30"
            style="color: #29584f"
          />
          
          <h1>medicalty approved</h1>
        </div>
        <div
          class="p-3 bg-gray-100 flex flex-col items-center gap-2 rounded-lg"
        >
          <Icon
            icon="material-symbols:groups-2-outline-rounded"
            width="30"
            height="30"
            style="color: #29584f"
          />
          <h1>50,000+ patients</h1>
        </div>
        <div
          class="p-3 bg-gray-100 flex flex-col items-center gap-2 rounded-lg"
        >
          <Icon
            icon="material-symbols:military-tech-outline-rounded"
            width="30"
            height="30"
            style="color: #29584f"
          />
          <h1>certified & secure</h1>
        </div>
      </div>
      <div class="flex items-center gap-4 p-2">
        <!-- مجموعة صور المرضى (Avatar Group) -->
        <div class="flex -space-x-3 overflow-hidden">
          <img
            v-for="(image, index) in patientImages"
            :key="index"
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover"
            :src="image + '&q=60'"
            loading="lazy"
            decoding="async"
            width="48"
            height="48"
            alt="Patient"
          />
        </div>

        <!-- النصوص الإحصائية -->
        <div class="flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-[#1a4332] leading-none">2,450+</h2>
          <p class="text-sm text-gray-500 mt-1">Patients treated this month</p>
        </div>
      </div>
    </div>

    <!-- BOX 2 -->
    <article class="flex gap-8 flex-1 justify-evenly mt-10 lg:mt-0 p-5">
      <div
        class="animationtransform relative w-[150px] h-[340px] lg:w-[230px] lg:h-[400px] overflow-hidden rounded-[140px] bg-white shadow-sm border border-gray-100"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover"
          :src="NurseSumet"
          loading="lazy"
          decoding="async"
          alt="nursesumet"
        />

        <div
          class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent [mask-image:linear-gradient(to_top,black,transparent)] bg-black/30"
        ></div>
      </div>

      <div
        class="animationtransform relative w-[150px] h-[340px] lg:w-[230px] lg:h-[400px] overflow-hidden rounded-[140px] rounded-tr-[40px] bg-white shadow-sm border border-gray-100"
      >
        <img
          class="absolute top-10 w-full h-full object-contain p-4"
          :src="Lungs"
          loading="lazy"
          decoding="async"
          alt="Lungs"
        />

        <div
          class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent [mask-image:linear-gradient(to_top,black,transparent)] bg-black/30"
        ></div>
      </div>
    </article>
  </header>
</template>
<script setup>
import GrainLogo from "@/assets/grainLogo-removebg.png";
import NurseSumet from "@/assets/nursesumet-removebg.png";
import Lungs from "@/assets/lungsgraphic-removebg.png";
import { ref } from "vue";

const patientImages = ref([
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
]);
</script>
<style>
.animationtransform {
  animation: translate 3s ease-in-out infinite;
}
@keyframes translate {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>

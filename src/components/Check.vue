<script setup>
import { ref, computed } from "vue";
import SlimedoLogo from "@/assets/slimedo_logo.Webp";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
const form = ref({
  name: "",
  age: "",
  experience: "",
  specialty: "",
});

const result = ref("");

const checkSuitability = () => {
  if (form.value.age >= 22 && form.value.experience >= 1) {
    result.value = "Suitable ✅";
    form.value.name = ""
  form.value.age= ""
  form.value.experience= ""
  form.value.specialty= ""
  } else {
    result.value = "Not Suitable ❌";
  }
};

</script>

<template>
  <NavBar :logo="SlimedoLogo"/>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Check Suitability</h2>

      <!-- INPUTS -->
      <div class="space-y-3">
        <input
          v-model="form.name"
          type="text"
          placeholder="Name"
          class="w-full p-2 border rounded-lg"
        />

        <input
          v-model="form.age"
          type="number"
          placeholder="Age"
          class="w-full p-2 border rounded-lg"
        />

        <input
          v-model="form.experience"
          type="number"
          placeholder="Years of Experience"
          class="w-full p-2 border rounded-lg"
        />

        <input
          v-model="form.specialty"
          type="text"
          placeholder="Specialty"
          class="w-full p-2 border rounded-lg"
        />
      </div>

      <!-- BUTTON -->
      <button
        @click="checkSuitability"
        class="mt-4 w-full bg-[#B8C6C3] hover:bg-[#9fb0ac] p-2 rounded-lg font-semibold"
      >
        Check Now
      </button>

      <!-- RESULT -->
      <p v-if="result" class="mt-4 text-center font-bold text-lg">
        {{ result }}
      </p>
    </div>
  </div>
  <Footer></Footer>
</template>

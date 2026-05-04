<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Slimedo from "@/assets/slimedo_logo.png"
const router = useRouter();

const name = ref("");
const email = ref("");
const status = ref("pending");

onMounted(() => {
  name.value = localStorage.getItem("Name");
  email.value = localStorage.getItem("Email");

  // ✅ الشرط المهم
  if (!name.value || !email.value) {
    router.push("/login");
    return;
  }

  // simulate review
  setTimeout(() => {
    status.value = "reviewed";
  }, 2000);
});

const receivePrescription = () => {
  status.value = "done";
};
</script>

<template>
  <NavBar  :logo="Slimedo"/>

  <section class="min-h-[70vh] flex items-center justify-center px-4">
    <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

      <!-- Title -->
      <h1 class="text-2xl font-bold text-[#26594E] mb-4">
        Reviewed & Receive Prescription
      </h1>

      <!-- User Info -->
      <div class="mb-6">
        <p class="text-gray-600">Name: <span class="font-semibold">{{ name }}</span></p>
        <p class="text-gray-600">Email: <span class="font-semibold">{{ email }}</span></p>
      </div>

      <!-- Status -->
      <div class="mb-6">
        <p v-if="status === 'pending'" class="text-yellow-500 font-semibold">
          ⏳ Waiting for review...
        </p>

        <p v-if="status === 'reviewed'" class="text-blue-500 font-semibold">
          ✅ Your case has been reviewed
        </p>

        <p v-if="status === 'done'" class="text-green-600 font-semibold">
          💊 Prescription received successfully
        </p>
      </div>

      <!-- Button -->
      <button
        v-if="status === 'reviewed'"
        @click="receivePrescription"
        class="w-full bg-[#26594E] text-white py-3 rounded-xl hover:opacity-90 transition"
      >
        Receive Prescription
      </button>

    </div>
  </section>

  <Footer />
</template>
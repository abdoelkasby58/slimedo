<template>
  <NavBar :logo="SlimedoLogo" />
  <header class="min-h-screen flex items-center justify-center bg-[#F4F7FF]">
    <div
      class="w-[320px] md:w-[380px] p-8 py-15 flex flex-col items-center rounded-tr-[40px] border-2 border-[#26594E] bg-white shadow-lg"
    >
      <!-- LOGO -->
      <img :src="SlimedoLogo" class="w-20 mb-4" alt="" />

      <h1 class="text-2xl font-bold mb-6">Forget Password</h1>

      <!-- EMAIL -->
      <div class="w-full mb-4 flex flex-col">
        <small
          v-if="emailError"
          class="border-l-2 pl-1 font-bold bg-[#ff000055] py-1 rounded-tr-[20px] text-red-500 text-xs"
        >
          {{ emailError }}
        </small>

        <label class="text-sm">Email</label>

        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#26594E]"
        />
      </div>

      <!-- BUTTON -->
      <button
        @click="validate"
        class="w-full bg-[#26594E] text-white py-2 rounded-lg hover:opacity-90 transition"
      >
        Log In
      </button>
    </div>
  </header>
  <Footer></Footer>
</template>
<script setup>
import { ref } from "vue";
import SlimedoLogo from "@/assets/slimedo_logo.png";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import router from "@/router";

const email = ref("");

const emailError = ref("");

const emailRegex =
  /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

const allowedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
const validate = () => {
  emailError.value = "";
  const domainfor = email.value.split("@")[1];
  const SavedEmail = localStorage.getItem("Email");
  let Logfor = false;
  if (!email.value) {
    emailError.value = "Please is your email";
    Logfor = true;
  } else if (!allowedDomains.includes(domainfor)) {
    emailError.value = "Email is incorrect";
    Logfor = true;
  } else if (email.value !== SavedEmail) {
    emailError.value = "Email not found";
    Logfor = true;
  }
  if (Logfor) return;
  router.push("/confirmpassword");
};
</script>

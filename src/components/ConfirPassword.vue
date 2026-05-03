<script setup>
import { ref } from "vue";
import SlimedoLogo from "@/assets/slimedo_logo.Webp";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import { Icon } from "@iconify/vue";
import router from "@/router";

const password = ref("");
const passwordcon = ref("");
const showPassword = ref(false);
const showPasswordcon = ref(false);

const passwordError = ref("");
const passwordErrorcon = ref("");
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,16}$/;
const validate = () => {
  passwordError.value = "";
  passwordErrorcon.value = "";
  let LogCon = false;
  if (!password.value) {
    passwordError.value = "Please is your password";
    LogCon = true;
  } else if (!passwordRegex.test(password.value)) {
    passwordError.value = "Password is incorrect";
    LogCon = true;
  }
  if (!passwordcon.value) {
    passwordErrorcon.value = "Please is your password";
    LogCon = true;
  } else if (!passwordRegex.test(passwordcon.value)) {
    passwordErrorcon.value = "Password is incorrect";
    LogCon = true;
  } else if (password.value !== passwordcon.value) {
    passwordErrorcon.value = "The password does not match";
    LogCon = true;
  }
  if (LogCon) return;
  localStorage.setItem("Password", passwordcon.value);
  router.push("/login");
};
</script>

<template>
  <NavBar :logo="SlimedoLogo" />
  <header class="min-h-screen flex items-center justify-center bg-[#F4F7FF]">
    <div
      class="w-[320px] md:w-[380px] p-8 flex flex-col items-center rounded-tr-[40px] border-2 border-[#26594E] bg-white shadow-lg my-2"
    >
      <!-- LOGO -->
      <img :src="SlimedoLogo" class="w-20 mb-4" alt="" />

      <h1 class="text-2xl font-bold mb-6">Log In</h1>

      <!-- PASSWORD -->
      <div class="w-full mb-6 flex flex-col">
        <small
          v-if="passwordError"
          class="border-l-2 pl-1 font-bold bg-[#ff000055] py-1 rounded-tr-[20px] text-red-500 text-xs"
        >
          {{ passwordError }}
        </small>

        <label class="text-sm">Password</label>

        <div class="relative mt-1">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter your password"
            class="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#26594E]"
          />

          <!-- ICON -->
          <span
            @click="showPassword = !showPassword"
            class="absolute right-3 top-[10px] cursor-pointer text-[20px] text-gray-600"
          >
            <Icon :icon="showPassword ? 'mdi:eye' : 'mdi:eye-off'"></Icon>
          </span>
        </div>
      </div>
      <!-- PASSWORD CONFIRM -->
      <div class="w-full mb-6 flex flex-col">
        <small
          v-if="passwordErrorcon"
          class="border-l-2 pl-1 font-bold bg-[#ff000055] py-1 rounded-tr-[20px] text-red-500 text-xs"
        >
          {{ passwordErrorcon }}
        </small>

        <label class="text-sm">Confirm Password</label>

        <div class="relative mt-1">
          <input
            v-model="passwordcon"
            :type="showPasswordcon ? 'text' : 'password'"
            placeholder="Enter your password"
            class="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#26594E]"
          />

          <!-- ICON -->
          <span
            @click="showPasswordcon = !showPasswordcon"
            class="absolute right-3 top-[10px] cursor-pointer text-[20px] text-gray-600"
          >
            <Icon :icon="showPasswordcon ? 'mdi:eye' : 'mdi:eye-off'"></Icon>
          </span>
        </div>
      </div>

      <!-- BUTTON -->
      <button
        @click="validate"
        class="w-full bg-[#26594E] text-white py-2 rounded-lg hover:opacity-90 transition"
      >
        Log In
      </button>
      <div class="text-center mt-3 text-sm">
        <h1
          @click="$router.push('/login')"
          class="hover:text-[#000000be] cursor-pointer mb-1"
        >
          Log in
        </h1>
      </div>
    </div>
  </header>
  <Footer></Footer>
</template>

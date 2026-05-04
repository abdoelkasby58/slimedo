<script setup>
import { ref } from "vue";
import SlimedoLogo from "@/assets/slimedo_logo.png";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import { Icon } from "@iconify/vue";
import router from "@/router";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const showPassword = ref(false);

const emailError = ref("");
const passwordError = ref("");
const emailRegex =
  /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

const allowedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,16}$/;

const validate = () => {
  emailError.value = "";
  passwordError.value = "";
  const Savedemail = localStorage.getItem("Email");
  const Savedpassword = localStorage.getItem("Password");
  const domain = email.value.split("@")[1];
  let Login = false;
  if (!email.value) {
    emailError.value = "Please enter your email";
    Login = true;
  } else if (
    !allowedDomains.includes(domain) ||
    !emailRegex.test(email.value)
  ) {
    emailError.value = "Email is incorrect";
    Login = true;
  } else if (Savedemail !== email.value) {
    emailError.value = "Email not found";
    Login = true;
  }
  if (!password.value) {
    passwordError.value = "Please enter your password";
    Login = true;
  } else if (!passwordRegex.test(password.value)) {
    passwordError.value = "Password is incorrect";
    Login = true;
  } else if (Savedpassword !== password.value) {
    passwordError.value = "Password not found";
  }
  if (Login) return;
  localStorage.setItem("Email", email.value);
  localStorage.setItem("Password", password.value);

  router.push("/");
};
</script>

<template>
  <NavBar :logo="SlimedoLogo" />
  <header class="min-h-screen flex items-center justify-center bg-[#F4F7FF]">
    <div
      class="w-[320px] md:w-[380px] p-8 flex flex-col items-center rounded-tr-[40px] border-2 border-[#26594E] bg-white shadow-lg"
    >
      <!-- LOGO -->
      <img :src="SlimedoLogo" class="w-20 mb-4" alt="" />

      <h1 class="text-2xl font-bold mb-6">Log In</h1>

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

      <!-- BUTTON -->
      <button
        @click="validate"
        class="w-full bg-[#26594E] text-white py-2 rounded-lg hover:opacity-90 transition"
      >
        Log In
      </button>
      <div class="text-center mt-3 text-sm">
        <h1
          @click="$router.push('/createaccount')"
          class="hover:text-[#000000be] cursor-pointer mb-1"
        >
          Create Account New
        </h1>
        <h1
          @click="$router.push('/forgetpassword')"
          class="hover:text-[#000000be] cursor-pointer"
        >
          Forget Password
        </h1>
      </div>
    </div>
  </header>
  <Footer></Footer>
</template>
<style scoped>
article {
  color: #000000be;
}
</style>

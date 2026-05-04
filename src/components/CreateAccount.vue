<script setup>
import { ref } from "vue";
import Slimedo from "@/assets/slimedo_logo.png";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import { Icon } from "@iconify/vue";
import router from "@/router";
const name = ref("");
const email = ref("");
const password = ref("");
const passwordcon = ref("");
const showPassword = ref(false);
const showPasswordcon = ref(false);
const NameError = ref("");
const emailerror = ref("");
const passwordError = ref("");
const passwordErrorcon = ref("");
const emailRegex =
  /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

const allowedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,16}$/;
const validate = () => {
  NameError.value = "";
  emailerror.value = "";
  passwordError.value = "";
  passwordErrorcon.value = "";
  let logCreate = false;

  //name
  if (!name.value) {
    NameError.value = "Please enter your name";
    logCreate = true;
  }
  //email
  const domainCreate = email.value.split("@")[1];
  if (!email.value) {
    emailerror.value = "Please enter your email";
    logCreate = true;
  } else if (!allowedDomains.includes(domainCreate)) {
    emailerror.value = "Email is incorrect";
    logCreate = true;
  }
  // password
  if (!password.value) {
    passwordError.value = "Please enter your password";
    logCreate = true;
  } else if (!passwordRegex.test(password.value)) {
    passwordError.value = "Password is incorrect";
    logCreate = true;
  }
  //password con
  if (!passwordcon.value) {
    passwordErrorcon.value = "Please enter your password";
    logCreate = true;
  } else if (password.value !== passwordcon.value) {
    passwordErrorcon.value = "The password does not match";
    logCreate = true;
  }
 if (logCreate) return;

localStorage.setItem("Name", name.value);
localStorage.setItem("Email", email.value);
localStorage.setItem("Password", passwordcon.value);

router.push("/login");
};
</script>

<template>
  <NavBar :logo="Slimedo" />
  <header class="min-h-screen flex items-center justify-center bg-[#F4F7FF]">
    <div
      class="w-[320px] md:w-[380px] p-8 flex flex-col items-center rounded-tr-[40px] border-2 border-[#26594E] bg-white shadow-lg my-2"
    >
      <!-- LOGO -->
      <img :src="SlimedoLogo" class="w-20 mb-4" alt="" />

      <h1 class="text-2xl font-bold mb-6">Create Account</h1>
      <!-- Name -->
      <div class="w-full mb-4 flex flex-col">
        <small
          v-if="NameError"
          class="border-l-2 pl-1 font-bold bg-[#ff000055] py-1 rounded-tr-[20px] text-red-500 text-xs"
          >{{ NameError }}</small
        >
        <label for="text" class="text-sm">Name</label>
        <input
          type="text"
          v-model="name"
          name="text"
          class="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#26594E]"
          id="text"
          placeholder="Your is Name"
        />
      </div>
      <!-- EMAIL -->
      <div class="w-full mb-4 flex flex-col">
        <small
          v-if="emailerror"
          class="border-l-2 pl-1 font-bold bg-[#ff000055] py-1 rounded-tr-[20px] text-red-500 text-xs"
        >
          {{ emailerror }}
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
        <!-- <h1
          @click="$router.push('/login')"
          class="hover:text-[#000000be] cursor-pointer mb-1"
        >
          Log in
        </h1> -->
      </div>
    </div>
  </header>
  <Footer></Footer>
</template>

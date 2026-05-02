<template>
  <footer class="bg-[#0a1a16] text-gray-400 py-6 px-6 md:px-16 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <!-- الجزء العلوي: اللوجو والقوائم -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-800 pb-12"
      >
        <!-- عمود اللوجو والوصف -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <img
              :src="SlimedoLogo"
              loading="lazy"
              decoding="async"
              alt="Slimedo Logo"
              class="w-[40px]"
            />
            <span class="text-white font-bold text-xl">Slimedo</span>
          </div>
          <p class="text-sm leading-relaxed mb-6">
            Your trusted telemedicine partner for professional medical
            consultations and prescription services.
          </p>
          <!-- أيقونات السوشيال ميديا -->
          <div class="flex gap-3">
            <a
              href="#"
              class="rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#29584F] p-2 transition-colors"
            >
              <Icon icon="cib:facebook-f" />
            </a>
            <a
              href="#"
              class="rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#29584F] p-2 transition-colors"
            >
              <Icon icon="cib:instagram" />
            </a>
            <a
              href="#"
              class="rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#29584F] p-2 transition-colors"
            >
              <Icon icon="cib:twitter" />
            </a>
            <a
              href="#"
              class="rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#29584F] p-2 transition-colors"
            >
              <Icon icon="cib:linkedin-in" />
            </a>
          </div>
        </div>

        <!-- القوائم الروابط -->
        <di v v-for="(group, index) in footerLinks" :key="index">
          <h3 class="text-white font-semibold mb-4">{{ group.title }}</h3>
          <ul class="space-y-2">
            <li v-for="link in group.links" :key="link">
              <a
                href="#"
                class="text-sm hover:text-emerald-400 transition-colors"
                >{{ link }}</a
              >
            </li>
          </ul>
        </di>
      </div>

      <!-- الجزء السفلي: الدفع وحقوق الملكية -->
      <div
        class="flex flex-col md:flex-row justify-between items-center mt-8 gap-6"
      >
        <!-- وسائل الدفع -->
        <div>
          <p
            class="text-xs font-semibold mb-3 uppercase tracking-wider text-gray-500"
          >
            Secure Payment Methods
          </p>
          <div class="flex gap-2 flex-wrap">
            <span class="bg-[#fff] px-1 rounded-[5px] cursor-pointer"
              ><Icon
                icon="cib:visa"
                width="32"
                height="32"
                style="color: #1022ef"
            /></span>
            <span class="bg-[#fff] px-1 rounded-[5px] cursor-pointer"
              ><Icon
                icon="cib:apple-pay"
                width="32"
                height="32"
                style="color: #1022ef"
            /></span>
            <span class="bg-[#fff] px-1 rounded-[5px] cursor-pointer"
              ><Icon
                icon="cib:apple-pay"
                width="32"
                height="32"
                style="color: #1022ef"
            /></span>
            <span class="bg-[#fff] px-1 rounded-[5px] cursor-pointer"
              ><Icon
                icon="cib:stripe"
                width="32"
                height="32"
                style="color: #1022ef"
            /></span>
            <span class="bg-[#fff] px-1 rounded-[5px] cursor-pointer"
              ><Icon
                icon="cib:stripe"
                width="32"
                height="32"
                style="color: #1022ef"
            /></span>
          </div>
        </div>

        <!-- حقوق النشر -->
        <div class="text-right">
          <p class="text-xs">© Slimedo Telemedicine Platform Ltd. 2026</p>
          <p class="text-[10px] text-gray-600 mt-1">
            Designed with care • All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import SlimedoLogo from "@/assets/slimedo_logo.Webp";
import { ref } from "vue";

const footerLinks = ref([
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Press & Media"],
  },
  {
    title: "Departments",
    links: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"],
  },
  {
    title: "Patient Services",
    links: [
      "Health Packages",
      "Appointments",
      "Prescriptions",
      "Medical Reports",
    ],
  },
  {
    title: "Quick Links",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Medical Ethics",
      "Cookie Policy",
    ],
  },
]);

const paymentMethods = ["visa", "mastercard", "stripe", "paypal", "apple-pay"];
</script>
<style scoped></style>

<template>
  <NavBar :logo="SlimedoLogo"/>
  <section class="py-16 px-6 bg-[#F4F7FF]">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <h1 class="text-4xl font-bold text-gray-800 mb-10">All Blog Posts</h1>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="post in posts"
          :key="post.id"
          class="border rounded-2xl overflow-hidden hover:shadow-lg transition"
        >
          <img
            :src="post.image"
            loading="lazy"
            decoding="async"
            class="w-full h-52 object-cover"
          />

          <div class="p-5">
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">
              {{ post.tag }}
            </span>

            <h3 class="font-bold text-lg mt-3 mb-2">
              {{ post.title }}
            </h3>

            <p class="text-gray-500 text-sm mb-4">
              {{ post.desc }}
            </p>

            <button class="text-[#29584F] font-medium">Read More →</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script setup>
import SlimedoLogo from "@/assets/slimedo_logo.Webp";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
const posts = [
  {
    id: 1,
    title: "The Future of Telemedicine",
    desc: "Discover how telemedicine is changing healthcare...",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&q=80",
    tag: "Telemedicine",
  },
  {
    id: 2,
    title: "Understanding Your Prescription",
    desc: "Learn how to read prescriptions and dosage...",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&q=80",
    tag: "Tips & Guide",
  },
  {
    id: 3,
    title: "Improve Your Health",
    desc: "Simple lifestyle changes that make a difference...",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&q=80",
    tag: "Wellness",
  },
  {
    id: 4,
    title: "Healthy Diet Plans",
    desc: "Best diet plans for weight loss...",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&q=80",
    tag: "Nutrition",
  },
];
</script>

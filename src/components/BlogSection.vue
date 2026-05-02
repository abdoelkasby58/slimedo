<template>
  <section class="py-16 px-6">
    <!-- Header -->
    <div class="flex justify-between items-center max-w-6xl mx-auto mb-10">
      <div>
        <h1
          class="text-sm px-2 py-1 mb-6 bg-[#E3ECE9] w-fit rounded-[20px] font-bold text-[#26594E]"
        >
          Blog
        </h1>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Latest Health Insights
        </h2>
        <p class="text-gray-500 mt-2">
          Expert medical advice, healthcare tips, and industry news
        </p>
      </div>

      <button
        @click="goToBlog"
        class="bg-[#29584F] text-white px-5 py-2 rounded-full hover:scale-105 transition"
      >
        View All →
      </button>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
        v-for="post in posts"
        :key="post.id"
        class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
      >
        <img
          :src="post.image + '&q=60'"
          loading="lazy"
          decoding="async"
          class="w-full h-48 object-cover"
        />

        <div class="p-4">
          <div class="flex gap-2 mb-2">
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">
              {{ post.tag }}
            </span>
          </div>

          <h3 class="font-semibold text-gray-800 mb-2">
            {{ post.title }}
          </h3>

          <p class="text-gray-500 text-sm mb-4">
            {{ post.desc }}
          </p>

          <button class="text-[#29584F] font-medium">Read More →</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToBlog = () => {
  router.push("/blogviewall");
};

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
];
</script>

<template>
  <section class="py-16 px-6">
    <!-- Header -->
    <div class="flex justify-between items-center max-w-6xl mx-auto mb-10">
      <div>
        <h1 class="text-sm px-2 py-1 mb-6 bg-[#E3ECE9] w-fit rounded-[20px] font-bold text-[#26594E]">
          Blog
        </h1>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Latest Health Insights
        </h2>
        <p class="text-gray-500 mt-2">
          Expert medical advice, healthcare tips, and industry news
        </p>
      </div>

      <button @click="goToBlog" class="bg-[#29584F] text-white px-5 py-2 rounded-full hover:scale-105 transition">
        View All →
      </button>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div v-for="post in posts" :key="post.id"
        class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        <img :src="post.image + '&q=60'" loading="lazy" decoding="async" class="w-full h-48 object-cover" />

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
    title: "Track Your Calories",
    desc: "Learn how to track your daily calories and reach your health goals with simple and effective steps.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&q=80",
    tag: "Nutrition",
  },
  {
    id: 2,
    title: "Why Hydration Matters",
    desc: "Discover the importance of staying hydrated and how it impacts your energy and overall health.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&auto=format&q=80",
    tag: "Health Tips",
  },
  {
    id: 3,
    title: "Daily Fitness Routine",
    desc: "A simple daily routine you can follow to gradually improve your fitness and stay active.",
    image:
      "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&auto=format&q=80",
    tag: "Fitness",
  },
];
</script>

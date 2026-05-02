<template>
  <section
    class="min-h-screen flex flex-col justify-center items-center p-6"
  >
    <!-- Title -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-800 mb-3">
        Real Results, Backed by Data
      </h1>
      <p class="text-gray-500 max-w-xl">
        Join thousands who have transformed their health with our proven
        treatments.
      </p>
    </div>

    <!-- Content -->
    <div class="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
      <!-- Chart -->
      <div class="bg-white rounded-2xl shadow p-6 flex-1">
        <h2 class="text-green-700 font-semibold text-xl mb-4">
          Patient Improvement
        </h2>
        <canvas ref="chartRef"></canvas>
      </div>

      <!-- Stats -->
      <div class="flex flex-col gap-6 w-full lg:w-[300px]">
        <div class="bg-white p-5 rounded-xl shadow">
          <h3 class="text-2xl font-bold text-green-700">92%</h3>
          <p class="text-gray-700 font-medium">Patient Satisfaction</p>
          <p class="text-gray-400 text-sm">
            See significant improvement within 12 weeks
          </p>
        </div>

        <div class="bg-white p-5 rounded-xl shadow">
          <h3 class="text-2xl font-bold text-green-700">50K+</h3>
          <p class="text-gray-700 font-medium">Happy Patients</p>
          <p class="text-gray-400 text-sm">
            Trusted by thousands across the country
          </p>
        </div>

        <div class="bg-white p-5 rounded-xl shadow">
          <h3 class="text-2xl font-bold text-green-700">4.5 ★</h3>
          <p class="text-gray-700 font-medium">Average Rating</p>
          <p class="text-gray-400 text-sm">Based on verified reviews</p>
        </div>
      </div>
    </div>
  </section>
  <section class="w-full bg-[#0B1B18] py-16 flex justify-center px-4 rounded-bl-[100px]">
    <div class="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
      <!-- Left Content -->
      <div class="text-white flex-1">
        <p class="text-sm mb-3 text-gray-300">⭐ Excellent 4.7/5 (10,035)</p>

        <h1 class="text-3xl lg:text-4xl font-bold mb-6 leading-snug">
          Weight loss injections to reach your desired weight
        </h1>

        <ul class="space-y-3 text-gray-300">
          <li>✔ Test without financial risk</li>
          <li>✔ Free express delivery in 1–2 days</li>
          <li>✔ Unlimited medical support</li>
        </ul>
      </div>

      <!-- Card -->
      <div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h3 class="text-center font-semibold text-gray-700 mb-4">
          Check how much weight you could lose.
        </h3>

        <!-- Fake silhouettes -->
        <div class="flex justify-center gap-6 mb-4">
          <div class="w-16 h-32 bg-orange-200 rounded-full"></div>
          <div class="w-16 h-32 bg-green-200 rounded-full"></div>
        </div>

        <!-- Weight -->
        <div class="text-center mb-4">
          <p class="text-sm text-gray-400">Starting weight:</p>
          <p class="font-bold text-lg">{{ weight }} kg</p>
        </div>

        <!-- Slider -->
        <input
          type="range"
          min="50"
          max="150"
          v-model="weight"
          class="w-full accent-[#29584F] mb-6"
        />

        <!-- Result -->
        <div class="text-center mb-6">
          <p class="text-sm text-gray-400">Your result could be:</p>

          <h2
            class="text-3xl font-bold text-[#29584F] transition-all duration-300"
          >
            -{{ weightLoss }} kg
          </h2>
        </div>

        <!-- Button -->
        <button
          class="w-full bg-[#29584F] text-white py-3 rounded-full hover:scale-105 transition"
        >
          Check your BMI now
        </button>

        <p class="text-xs text-gray-400 text-center mt-3">
          180-day money-back guarantee
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
);

const weight = ref(95);

// معادلة بسيطة (تقدر تغيرها براحتك)
const weightLoss = computed(() => {
  return Math.round(weight.value * 0.1);
});

const chartRef = ref(null);

onMounted(() => {
  const ctx = chartRef.value.getContext("2d");

  // gradient 🔥
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "#29584F");
  gradient.addColorStop(1, "rgba(41,88,79,0)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Fab", "Mar", "Apr", "May"],
      datasets: [
        {
          data: [10, 40, 40, 70, 100],
          borderColor: "#29584F",
          backgroundColor: gradient,
          fill: true,
          tension:0.3,
          pointRadius:5,
          pointBackgroundColor:"#29584F"
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#29584F",
          callbacks: {
            label: () => "-20 kg",
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          grid: {
            color: "#eee",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
});
</script>
<style scoped></style>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import NavBar from "./NavBar.vue";

import Footer from "./Footer.vue";
const weight = ref("");
const height = ref("");

const bmi = computed(() => {
    if (!weight.value || !height.value) return null;
    const h = height.value / 100;
    return (weight.value / (h * h)).toFixed(1);
});

const category = computed(() => {
    if (!bmi.value) return "";

    if (bmi.value < 18.5) return "Underweight";
    if (bmi.value < 25) return "Normal";
    if (bmi.value < 30) return "Overweight";
    return "Obese";
});
</script>

<template>
    <NavBar />
    <div class="min-h-screen flex items-center justify-center bg-[#f4f7ff] p-4">
        <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">

            <!-- Icon -->
            <div class="flex justify-center mb-4">
                <Icon icon="mdi:scale-bathroom" width="50" class="text-[#26594E]" />
            </div>

            <!-- Title -->
            <h1 class="text-2xl font-bold mb-2 text-[#26594E]">
                Check your BMI now
            </h1>
            <p class="text-gray-500 mb-6 text-sm">
                Enter your weight and height to calculate your BMI
            </p>

            <!-- Inputs -->
            <div class="flex flex-col gap-4">
                <input v-model="weight" type="number" placeholder="Weight (kg)"
                    class="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26594E]" />

                <input v-model="height" type="number" placeholder="Height (cm)"
                    class="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26594E]" />
            </div>

            <!-- Result -->
            <div v-if="bmi" class="mt-6">
                <p class="text-lg font-semibold">
                    Your BMI: <span class="text-[#26594E]">{{ bmi }}</span>
                </p>
                <p class="text-sm text-gray-500 mt-1">
                    Category: {{ category }}
                </p>
            </div>

            <!-- Button -->
            <button @click="weight = ''; height = ''"
                class="mt-6 w-full bg-[#26594E] text-white py-2 rounded-lg hover:bg-[#1e463d] transition">
                Reset
            </button>
        </div>
    </div>
    <Footer></Footer>
</template>
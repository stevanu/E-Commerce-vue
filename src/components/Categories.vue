<template>
  <section id="categories" class="py-16 scroll-mt-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-amber-950 mb-3">
          Explore Our Fragrance Collections
        </h2>
        <p class="text-lg text-gray-800 max-w-2xl mx-auto">
          Discover Scents that match your personality
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="h-64 overflow-hidden">
            <img
              :src="category.image"
              :alt="category.alt"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          >
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-xl font-semibold text-white">
                {{ category.title }}
              </h3>
              <p class="text-gray-200 mt-1">{{ category.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import product8 from "../assets/bag7.jpg";
import product9 from "../assets/bag1.jpg";
import product10 from "../assets/bag2.jpg";
import product11 from "../assets/bag3.jpg";
import product12 from "../assets/bag4.jpg";
import product13 from "../assets/bag5.jpg";

const categories = ref([
  {
    image: product8,
    title: "Woman's Collection",
    description: "Bold & masculine scents",
    alt: "Woman's Collection",
  },
  {
    image: product9,
    title: "Woman's Collection",
    description: "Bold & masculine scents",
    alt: "Woman's Collection",
  },
  {
    image: product10,
    title: "Woman's Collection",
    description: "Bold & masculine scents",
    alt: "Woman's Collection",
  },
  {
    image: product11,
    title: "Woman's Collection",
    description: "Bold & masculine scents",
    alt: "Woman's Collection",
  },
  {
    image: product12,
    title: "Woman's Collection",
    description: "Bold & masculine scents",
    alt: "Woman's Collection",
  },
  {
    image: product13,
    title: "Woman's Collection",
    description: "Bold & masculine scents",
    alt: "Woman's Collection",
  },
]);
</script>

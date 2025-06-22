<template>
  <section class="py-12 scroll-mt-20 bg-gray-50" id="products">
    <main class="container mx-auto px-4">
      <header class="flex justify-between items-center mb-8">
        <h2 class="md:text-3xl text-2xl font-bold text-amber-900">
          Featured Products
        </h2>
        <nav class="flex space-x-4" aria-label="Products carousel controls">
          <button
            @click="prevSlide"
            class="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors"
            aria-label="Previous slide"
          >
            <Icon icon="line-md:arrow-small-left" width="24" height="24" />
          </button>
          <button
            @click="nextSlide"
            class="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors"
            aria-label="Next slide"
          >
            <Icon icon="line-md:arrow-small-right" width="24" height="24" />
          </button>
        </nav>
      </header>

      <section class="relative overflow-hidden">
        <ul
          class="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <li
            v-for="product in visibleProducts"
            :key="product.id"
            class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <article>
              <figure class="relative">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-64 object-cover"
                />
                <figcaption
                  v-if="product.discount > 0"
                  class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                >
                  -{{ product.discount }}%
                </figcaption>

                <button
                  class="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-pink-100 text-gray-700"
                  aria-label="Add to wishlist"
                >
                  <icon icon="line-md:heart" width="18" height="18" />
                </button>
              </figure>

              <section class="p-4">
                <div class="flex items-center mb-2">
                  <icon
                    v-for="i in 5"
                    :key="i"
                    icon="line-md:star-alt-filled"
                    width="16"
                    height="16"
                    :class="
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    "
                  />
                  <span class="text-sm text-gray-500 ml-1"
                    >({{ product.rating }})</span
                  >
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-1">
                  {{ product.name }}
                </h3>

                <footer class="flex items-center justify-between">
                  <div>
                    <span class="text-lg font-bold text-pink-600">
                      ${{
                        (product.price * (1 - product.discount / 100)).toFixed(
                          2
                        )
                      }}
                    </span>
                    <span
                      v-if="product.discount > 0"
                      class="text-sm text-gray-500 line-through ml-2"
                    >
                      ${{ product.price.toFixed(2) }}
                    </span>
                  </div>
                  <button
                    class="p-2 bg-pink-950 rounded-full text-white hover:bg-pink-700 transition-colors cursor-pointer"
                    aria-label="Add to cart"
                  >
                    <icon
                      icon="icon-park-solid:shopping"
                      width="18"
                      height="18"
                    />
                  </button>
                </footer>
              </section>
            </article>
          </li>
        </ul>
      </section>

      <nav
        class="flex justify-center mt-6 space-x-2"
        aria-label="Carousel Pagination"
      >
        <button
          v-for="index in totalSlides"
          :key="index"
          @click="currentSlide = index - 1"
          :class="[
            'w-3 h-3 rounded-full',
            currentSlide === index - 1 ? 'bg-pink-950' : 'bg-gray-400',
          ]"
        />
      </nav>
    </main>
  </section>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import product1 from "../assets/bag1.jpg";
import product2 from "../assets/bag2.jpg";
import product3 from "../assets/bag3.jpg";
import product4 from "../assets/bag4.jpg";
import product5 from "../assets/bag5.jpg";
import product6 from "../assets/bag6.jpg";
import product7 from "../assets/bag7.jpg";
import product8 from "../assets/bag8.jpg";

const currentSlide = ref(0);
const productsPerPage = ref(4);

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    rating: 4.5,
    image: product1,
    discount: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 10.99,
    rating: 4.5,
    image: product2,
    discount: 15,
  },
  {
    id: 3,
    name: "Product 3",
    price: 10.99,
    rating: 4.5,
    image: product3,
    discount: 20,
  },
  {
    id: 4,
    name: "Product 4",
    price: 10.99,
    rating: 4.5,
    image: product4,
    discount: 10,
  },
  {
    id: 5,
    name: "Product 5",
    price: 10.99,
    rating: 4.5,
    image: product5,
    discount: 15,
  },
  {
    id: 6,
    name: "Product 6",
    price: 10.99,
    rating: 4.5,
    image: product6,
    discount: 5,
  },
  {
    id: 7,
    name: "Product 7",
    price: 10.99,
    rating: 4.5,
    image: product7,
    discount: 25,
  },
  {
    id: 8,
    name: "Product 8",
    price: 10.99,
    rating: 4.5,
    image: product8,
    discount: 20,
  },
];

const totalSlides = computed(() =>
  Math.ceil(products.length / productsPerPage.value)
);
const visibleProducts = computed(() => {
  const start = currentSlide.value * productsPerPage.value;
  return products.slice(start, start + productsPerPage.value);
});

const nextSlide = () => {
  currentSlide.value =
    currentSlide.value === totalSlides.value - 1 ? 0 : currentSlide.value + 1;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === totalSlides.value - 1 ? 0 : currentSlide.value - 1;
};

const handleResize = () => {
  if (window.innerWidth <= 640) {
    productsPerPage.value = 1;
  } else if (window.innerWidth <= 768) {
    productsPerPage.value = 2;
  } else if (window.innerWidth <= 1024) {
    productsPerPage.value = 3;
  } else {
    productsPerPage.value = 4;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

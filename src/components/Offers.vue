<template>
  <div id="offers" class="container scroll-mt-20 max-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-center mb-2 text-amber-900">
      Special Offers
    </h2>
    <p class="text-center text-gray-600 mb-12">
      Take Advantage Of these limited-time offers
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="offer in curretOffers"
        :key="offer.id"
        :class="[
          offer.bgColor,
          'rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105',
        ]"
      >
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3 :class="[offer.textColor, 'text-xl font-semibold']">
              {{ offer.title }}
            </h3>
            <span class="bg-white rounded-full p-3 shadow-md">
              <Icon
                :icon="
                  offer.discount.includes('%')
                    ? 'material-symbols:percent'
                    : 'mdi:gift'
                "
                :class="[offer.textColor, 'text-2xl']"
              />
            </span>
          </div>
        </div>
        <p class="text-gray-700 mb-6">{{ offer.description }}</p>

        <div class="flex items-center text-gray-600 mb-6">
          <Icon icon="svg-spinners:clock" class="mr-2" />
          <span>Ends on {{ offer.endDate }} </span>
        </div>

        <div class="bg-white rounded-lg p-4 mb-4">
          <p class="text-sm text-gray-500 mb-1">Use Code</p>
          <p class="font-bold font-mono text-lg">{{ offer.code }}</p>
        </div>

        <button
          :class="[
            offer.textColor,
            'w-full py-3 rounded-lg font-semibold border',
            offer.textColor.replace('text', 'border'),
            'hover:bg-white transition-colors duration-300',
          ]"
        >
          Claim Offer
        </button>

      </div>
    </div>
  </div>
</template>
<script setup>

import { ref } from "vue";

const curretOffers = ref([
  {
    id: 1,
    title: "Hot Summer sale",
    description: "Up to 30% on of our summer bag collection",
    discount: "30%",
    endDate: "2025-07-12",
    code: "SUMMER30",
    bgColor: "bg-amber-200",
    textColor: "text-amber-700",
  },

  {
    id: 2,
    title: "Free Bag Offer",
    description: "Up to 30% on of our summer bag collection",
    discount: "Gift",
    endDate: "2025-07-12",
    code: "FREEBAG",
    bgColor: "bg-purple-200",
    textColor: "textpurpler-700",
  },
  {
    id: 3,
    title: "New Launch Discount",
    description: "Up to 30% on of our summer bag collection",
    discount: "20%",
    endDate: "2025-07-12",
    code: "NEW20",
    bgColor: "bg-pink-200",
    textColor: "text-pink-700",
  },
]);
</script>

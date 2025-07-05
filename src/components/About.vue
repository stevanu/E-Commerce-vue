<template>
    <div id="about" class="min-h-screen scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-12 px-4
    sm:px-6 lg:px-8">
        <div class="mx-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row gap-12 mb-20">
                <!-- image section -->
                 <div class="lg:w-1/2">
                    <div class="relative rounded-2xl overflow-hidden h-96 ml-6 mr-6 shadow-xl">
                        <img :src="product1" alt="Luxury bag" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                        <div class="absolute bottom-0 left-0 p-6 text-white">
                            <h3 class="text-2xl font-bold">Since 2025</h3>
                            <p class="mt-2">Crafting bag with passion</p>
                        </div>
                    </div>
                 </div>

                 <!-- Text Content -->
                  <div class="lg:w-1/2 flex flex-col justify-center">
                    <h2 class="text-4xl font-bold text-amber-900 mb-6">About Us</h2>
                    <p class="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aperiam dolorem quaerat illum, odit placeat sunt iure recusandae maxime excepturi dignissimos 
                        veniam corporis non rerum fugit, autem, ad blanditiis commodi doloremque.
                    </p>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <h4 class="font-semibold text-pink-600">400+</h4>
                            <p class="text-gray-600 ">Unique Fragrances</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <h4 class="font-semibold text-pink-600">60+</h4>
                            <p class="text-gray-600 ">Countries WorldWide</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <h4 class="font-semibold text-pink-600">200+</h4>
                            <p class="text-gray-600 ">Costumer Satification</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <h4 class="font-semibold text-pink-600">24/7</h4>
                            <p class="text-gray-600 ">Costumer Support</p>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import product1 from "../assets/bag1.jpg";
</script>

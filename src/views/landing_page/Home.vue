<template>
  <hero-section />
  <choose-us-section />
  <product-section />
  <get-touch-section />
</template>

<script>
import HeroSection from "./../../components/landing_pages/HeroSection.vue";
import ChooseUsSection from "./../../components/landing_pages/ChooseUsSection.vue";
import ProductSection from "./../../components/landing_pages/ProductSection.vue";
import GetTouchSection from "./../../components/landing_pages/GetTouchSection.vue";

export default {
  name: "Home",
  components: {
    ChooseUsSection,
    HeroSection,
    ProductSection,
    GetTouchSection,
  },
};
</script>

<style lang="postcss">
@import "./../../../node_modules/sal.js/dist/sal.css";

.phil-white-button {
  @apply px-6 py-3 bg-white text-green-600 rounded-full font-bold hover:bg-gray-100 hover:shadow-md
} 
</style>

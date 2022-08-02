<template>
  <div class="bg-gray-200">
    <navigation-bar
      :class="{ 'bg-transpatent md:bg-white shadow-md': scrollIsActive > 1 }"
    />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import sal from 'sal.js';
import NavigationBar from "./../../components/landing_pages/NavigationBar.vue";
import TheFooter from "./../../components/commons_component/TheFooter.vue";

export default {
  name: "LandingPage",
  components: {
    NavigationBar,
    TheFooter,
  },
  data() {
    return {
      scrollIsActive: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollIsActive = window.scrollY;
    },
  },
  mounted() {
    sal();
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="postcss">
.form-input {
  @apply rounded-lg
              ring-inset
              focus:outline-none
              focus:ring-2
              focus:ring-green-400
              focus:border-transparent
              bg-gray-200
              px-4
              py-3
              w-full
}

.submit-button {
  @apply px-6
            py-3
            text-green-900
            rounded-lg
            font-bold
            bg-green-400
            hover:bg-green-500 hover:shadow-md
}
</style>

<template>
  <section
    class="
      relative
      flex flex-col
      md:flex-row
      py-32
      md:py-44
      px-4
      md:px-6
      items-center
      lg:px-36
      bg-green-50
    "
  >
    <div class="custom-shape-divider-bottom-1637744615">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="order-reverse flex-1 space-y-4 text-center md:text-left">
      <p
        class="text-4xl md:text-4xl xl:text-5xl font-black"
        data-sal="slide-up" data-sal-delay="300"
      >
        {{ $t("heroSection.title") }}
      </p>
      <p
        class="w-full md:w-10/12 text-lg pb-4"
        data-sal="slide-up" data-sal-delay="300"
      > 
        {{ $t("heroSection.subtitle") }}
      </p>
      <div
        class="flex justify-center md:justify-start space-x-2"
        data-sal="slide-up" data-sal-delay="300"
      >
        <a href="/contact" class="started-btn">
          {{ $t("heroSection.getStartedButton") }}
        </a>
        <a href="#product" class="explore-btn">
          <span>{{ $t("heroSection.ExploreButton") }}</span>
          <righ-arrow-icon />
        </a>
      </div>
    </div>
    <div class="order flex-1 pb-8 md:pb-0">
      <div
        class="w-full text-center bg-white rounded-md shadow-lg"
        data-sal="slide-up" data-sal-delay="300"
      >
        <img
          src="./../../assets/biji_kopi_liberika.webp"
          class="object-cover w-full rounded-md"
          alt="biji kopi liberika meranti"
        />
      </div>
    </div>
  </section>
</template>

<script>
import sal from 'sal.js'
import RighArrowIcon from "./../icons/RightArrowIcon.vue";

export default {
  name: "HeroSection",
  components: { RighArrowIcon },
  mounted() {
    sal()
  }
};
</script>

<style lang="postcss">
.started-btn {
  @apply px-4 py-2 bg-gradient-to-b from-green-400 to-green-500 hover:shadow-md font-semibold rounded-full hover:bg-green-500 focus:ring-4 focus:ring-green-300 ring-inset text-white;
}

.explore-btn {
  @apply flex items-center px-4 py-2 bg-green-50 text-green-600 hover:shadow-md font-semibold rounded-full hover:bg-green-400 hover:text-white ring-2 ring-green-400 ring-inset;
}

.order {
  @apply order-1 md:order-2;
}

.order-reverse {
  @apply order-2 md:order-1;
}

/* Wave Style */
.custom-shape-divider-bottom-1637744615 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1637744615 svg {
  position: relative;
  display: block;
  width: calc(112% + 1.3px);
  height: 136px;
}

.custom-shape-divider-bottom-1637744615 .shape-fill {
  fill: #e5e7eb;
}
</style>

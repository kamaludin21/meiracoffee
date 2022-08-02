<template>
  <!-- Hero page -->
  <section class="relative mt-20">
    <div
      class="bg-cover bg-no-repeat bg-blend-darken py-28 text-center text-white"
      style="
        background-image: url(https://ik.imagekit.io/n0t5masg5jg/areca-catechu_hM5uud49s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659363709301);
      "
      data-sal="fade"
      data-sal-delay="300"
      data-sal-duration="800"
      data-sal-easing="ease-out-bounce"
    >
      <p class="text-5xl font-bold leading-normal">{{ $t("productsNav") }}</p>
    </div>
  </section>

  <section class="px-4 py-20 md:py-32 md:px-10 lg:px-36 space-y-6">
    <div
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="800"
      data-sal-easing="ease-out-bounce"
    >
      <p class="text-lg font-medium text-gray-600">
        {{ $t("productSection.smallTitle") }}
      </p>
      <p class="text-4xl font-black text-green-900">
        {{ $t("productSection.bigTitle") }}
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        class="product-card-wrapper"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img
          class="rounded-lg object-cover rounded-b-none"
          src="./../../assets/betel_nut/betel_4.jpeg"
          alt="product image"
          loading="lazy"
        />
        <div class="p-4 space-y-2">
          <h1 class="text-2xl font-bold text-green-900">{{ $t("productSection.productTitle") }}</h1>
          <p class="font-normal leading-5">{{ $t("productSection.description") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sal from "sal.js";
export default {
  name: "Product",
  mounted() {
    sal();
  },
};
</script>

<style lang="postcss">
.product-card-wrapper {
  @apply flex flex-col
          h-full
          max-w-lg
          mx-auto
          bg-white
          shadow
          hover:shadow-xl
          cursor-pointer
          duration-700
          rounded-lg;
}

.product-button {
  @apply flex
              px-3
              py-1
              bg-green-400
              items-center
              font-semibold
              rounded-full
              text-green-900
              hover:bg-green-500
              focus:ring-4 focus:ring-green-300;
}
</style>

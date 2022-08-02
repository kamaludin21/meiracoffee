<template>
  <!-- Hero page -->
  <section class="relative mt-20">
    <div
      class="bg-local bg-blend-darken py-28 text-center text-white"
      style="
        background-image: url(https://ik.imagekit.io/n0t5masg5jg/areca-catechu_hM5uud49s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659363709301);
      "
      data-sal="fade"
      data-sal-delay="300"
      data-sal-duration="800"
      data-sal-easing="ease-out-bounce"
    >
      <p class="text-5xl font-bold leading-normal">{{ $t("menu[2]") }}</p>
    </div>
  </section>
  <section class="flex py-20 md:py-36 px-4 items-center md:px-10 lg:px-36">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="w-full md:w-2/5" data-sal="fade"
      data-sal-delay="300"
      data-sal-duration="800"
      data-sal-easing="ease-out-bounce">
        <p class="text-lg text-green-600 font-medium">{{ $t("aboutPage.title") }}</p>
        <p class="text-4xl font-black">{{ $t("menu[2]") }}</p>
        <p class="text-lg pt-4">{{ $t("aboutPage.description") }}</p>
        <p class="text-lg pt-2">{{ $t("aboutPage.thankGreeting") }}</p>
      </div>
      <div class="w-full md:w-1/2 relative" data-sal="fade"
      data-sal-delay="300"
      data-sal-duration="800"
      data-sal-easing="ease-out-bounce">
        <div
          class="w-full h-80 ring-4 ring-green-300 rounded-lg ring-inset"
        ></div>
        <div class="company-image">
          <img src="./../../assets/meira.png" class="w-1/4" alt="logo" />
        </div>
      </div>
    </div>
  </section>
  <section
    class="
      py-36
      bg-gray-300
      opacity-80
      text-center
      px-6
      items-center
      md:px-10
      lg:px-36
    "
  >
    <p class="text-3xl font-black">{{ $t("aboutPage.visi.title") }}</p>
    <p class="text-lg">
      {{ $t("aboutPage.visi.desc") }}
    </p>
    <p class="text-3xl font-black pt-5">{{ $t("aboutPage.misi.title") }}</p>
    <div class="text-lg">
      <p>{{ $t("aboutPage.misi.misi1") }}</p>
      <p>{{ $t("aboutPage.misi.misi2") }}</p>
      <p>{{ $t("aboutPage.misi.misi3") }}</p>
    </div>
  </section>
</template>

<script>
import sal from 'sal.js'
export default {
  name: "Product",
  mounted() {
    sal()
  }
};
</script>

<style lang="postcss">
.company-image {
  @apply absolute
            flex
            items-center
            justify-center
            bg-gradient-to-b
            from-green-300
            to-green-600
            shadow-lg
            rounded-lg
            w-full
            h-80
            top-0
            md:top-6
            right-0
            md:right-6;
}
</style>

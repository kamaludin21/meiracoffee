<template>
  <section class="pt-0 md:pt-24 pb-24 px-4 md:px-6 lg:px-20 xl:px-36 bg-gray-200">
    <p class="text-3xl md:text-4xl font-black text-left md:text-center" data-sal="slide-up"
        data-sal-delay="2000">
      {{ $t("chooseSection.title") }}
    </p>
    <div class="choose-card-wrapper">
      <choose-card
        :title="$t('chooseSection.cardOne.title')"
        :subtitle="$t('chooseSection.cardOne.subtitle')"
        data-sal="slide-up"
        data-sal-delay="300"
      >
        <document-icon />
      </choose-card>
      <choose-card
        :title="$t('chooseSection.cardTwo.title')"
        :subtitle="$t('chooseSection.cardTwo.subtitle')"
        data-sal="slide-up"
        data-sal-delay="300"
      >
        <dollar-icon />
      </choose-card>
      <choose-card
        :title="$t('chooseSection.cardThree.title')"
        :subtitle="$t('chooseSection.cardThree.subtitle')"
        data-sal="slide-up"
       data-sal-delay="300"
      >
        <shield-icon />
      </choose-card>
    </div>
  </section>
  <section class="bg-gray-200 pb-10 px-4 mx:px-6 md:px-10 lg:px-36">
    <div class="gradient-hero" data-sal="slide-up"
        data-sal-delay="300">
      <div class="w-full md:w-1/3">
        <p class="hero-text">
          {{ $t("chooseSection.interestedSection") }}
        </p>
      </div>
      <a href="/contact" class="phil-white-button">
        {{ $t("contactButton") }}
      </a>
    </div>
  </section>
</template>

<script>
import sal from 'sal.js'
import ChooseCard from "./ChooseCard.vue";
import DocumentIcon from "./../icons/DocumentIcon.vue";
import DollarIcon from "./../icons/DollarIcon.vue";
import ShieldIcon from "./../icons/ShieldIcon.vue";
export default {
  name: "ChooseUsSection",
  components: { ChooseCard, DocumentIcon, DollarIcon, ShieldIcon },
  mounted() {
    sal()
  }
};
</script>

<style lang="postcss">
.choose-card-wrapper {
  @apply flex flex-col
        md:flex-row
        space-x-0
        md:space-x-6
        space-y-16
        md:space-y-0
        mt-24;
}

.hero-text {
  @apply text-3xl
            md:text-4xl
            text-gray-100
            font-bold
            text-center
            md:text-left;
}

.gradient-hero {
  @apply flex flex-col
        md:flex-row
        items-center
        justify-between
        w-full
        bg-gradient-to-b
        from-green-400
        to-green-600
        rounded-xl
        px-0
        md:px-10
        py-8
        space-y-4
        md:space-y-0;
}
</style>

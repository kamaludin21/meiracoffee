<template>
  <div class="flex flex-col w-full md:w-1/3">
    <div class="choose-card card-wrapper">
      <div class="choose-icon-wrapper">
        <slot></slot>
      </div>
      <p class="text-3xl font-bold text-green-900">{{ title }}</p>
      <p class="text-2xl font-light">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseCard",
  props: {
    icon: String,
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="postcss">
.choose-card {
  @apply flex-1
        transform
        transition
        duration-500
        hover:scale-105 hover:shadow-lg;
}
.choose-icon-wrapper {
  @apply bg-gradient-to-b
          from-green-300
          to-green-500
          w-min
          p-4
          shadow-lg
          rounded-3xl
          absolute
          -mt-28
          text-white;
}
.card-wrapper {
  @apply bg-white
        rounded-3xl
        group-hover:shadow-lg
        border-2
        px-5 lg:px-10
        py-20
        space-y-2;
}
</style>

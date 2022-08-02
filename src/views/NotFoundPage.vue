<template>
  <div class="flex justify-center pt-40">
    <div class="text-center space-y-6">
      <p class="font-black text-9xl">
        <span
          class="
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-green-400
            to-indigo-400
          "
          >404
        </span>
      </p>
      <p class="font-bold text-4xl text-green-900">Whooops, this page is not available</p>
      <div class="flex justify-center">
        <a href="/" class="explore-btn space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>
        <span>Back to App</span>
      </a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.explore-btn {
  @apply flex items-center px-4 py-2 bg-green-50 text-green-600 hover:shadow-md font-semibold rounded-full hover:bg-green-400 hover:text-white ring-2 ring-green-400 ring-inset;
}
</style>

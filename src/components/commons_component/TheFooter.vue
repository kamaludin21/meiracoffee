<template>
  <footer class="bg-green-600">
    <div class="px-4 md:px-10 lg:px-36 py-14">
      <div class="flex flex-col md:flex-row items-start justify-between gap-10">
        <div class="flex-1">
          <img src="./../../assets/meira.png" class="w-44" alt="Logo" />
          <p class="font-medium text-lg pt-2">{{ $t("address") }}</p>
          <p class="text-lg">{{ $t("city") }}</p>
        </div>
        <div class="">
          <p class="text-xl font-semibold text-gray-900">Menu</p>
          <ul class="flex flex-col text-lg font-light space-y-1 mt-2 text-gray-800 cursor-pointer">
            <a href="/" class="hover:text-white hover:underline">{{ $t("menu[0]") }}</a>
            <a href="/product" class="hover:text-white hover:underline">{{ $t("menu[1]") }}</a>
            <a href="/about" class="hover:text-white hover:underline">{{ $t("menu[2]") }}</a>
            <a href="/contact" class="hover:text-white hover:underline">{{ $t("menu[3]") }}</a>
            <a href="/admin" class="hover:text-white hover:underline">Administrator</a>
          </ul>
        </div>
        <div class="">
          <p class="text-xl font-semibold text-gray-900">Social Media</p>
          <ul class="flex flex-col text-lg font-light space-y-1 mt-2 text-gray-800 cursor-pointer">
            <a href="https://facebook.com/" class="hover:text-white hover:underline">Facebook</a>
            <a href="https://instagram.com/" class="hover:text-white hover:underline">Instagram</a>
            <a href="https://wa.me/+6282170548877" class="hover:text-white hover:underline">Whatsapp</a>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-green-700 py-2">
      <p class="text-center text-lg font-medium text-green-50">
        S. Eksportir &copy; 2021 &bull; All Right Reserved | Dev. by <a href="https://github.com/kamaludin21" class="hover:underline" target="_blank">kamaludin21</a>
      </p>
    </div>
  </footer>
</template>
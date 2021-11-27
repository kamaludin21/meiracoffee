<template>
  <nav class="fixed top-0 py-2 w-full z-20 bg-white md:bg-transparent">
    <div class="nav-wrapper">
      <div class="flex-none">
        <router-link to="/">
          <img class="w-24" src="./../../assets/meira.png" alt="logo" />
        </router-link>
      </div>
      <div class="block md:hidden">
        <div @click="menuMobile">
          <menu-icon />
        </div>
      </div>

      <div class="hidden md:block flex-initial">
        <ul class="nav-item-wrapper">
          <li class="text-gray-600 hover:text-gray-900">
            <router-link to="/" exact>
              {{ $t("menu[0]") }}
            </router-link>
          </li>
          <li class="text-gray-600 hover:text-gray-900">
            <router-link to="/product">
              {{ $t("menu[1]") }}
            </router-link>
          </li>
          <li class="text-gray-600 hover:text-gray-900">
            <router-link to="/about">
              {{ $t("menu[2]") }}
            </router-link>
          </li>
          <li class="text-gray-600 hover:text-gray-900">
            <router-link to="/contact">
              {{ $t("menu[3]") }}
            </router-link>
          </li>
          <li class="relative">
            <button @click.prevent="menuResponse" class="lang-button">
              <language-icon />
              <span class="px-1">{{ $t("lang") }}</span>
              <chevron-down />
            </button>
            <div
              v-if="dropdown"
              class="absolute mt-2 border-2 shadow-md bg-white"
            >
              <div class="lang-item" @click="changeLang('id')">
                Bahasa Indonesia
              </div>
              <div class="lang-item" @click="changeLang('en')">English</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="menuMobileState" class="block md:hidden border-t-2">
      <div class="grid gap-2 w-full p-4">
        <div class="w-full py-1" @click="menuMobile">
          <router-link to="/" class="w-min text-xl">{{
            $t("menu[0]")
          }}</router-link>
        </div>
        <div class="w-full py-1" @click="menuMobile">
          <router-link to="/product" class="w-min text-xl">{{
            $t("menu[1]")
          }}</router-link>
        </div>
        <div class="w-full py-1" @click="menuMobile">
          <router-link to="/about" class="w-min text-xl">{{
            $t("menu[2]")
          }}</router-link>
        </div>
        <div class="w-full py-1" @click="menuMobile">
          <router-link to="/contact" class="w-min text-xl">{{
            $t("menu[3]")
          }}</router-link>
        </div>
      </div>
      <div
        class="flex px-4 justify-between items-center space-x-4 border-t-2 pt-2"
      >
        <button @click="changeLang('id')" :class="activeLang == 'id' ? 'bg-green-400' : 'bg-green-100'" class="flex-1 py-2 rounded-lg bg-green-100 shadow-md font-medium focus:bg-green-400 focus:ring-4 ring-green-300 ring-inset">B. Indonesia</button>
        <button @click="changeLang('en')" :class="activeLang == 'en' ? 'bg-green-400' : 'bg-green-100'"  class="flex-1 py-2 rounded-lg bg-green-100 shadow-md font-medium focus:bg-green-400 focus:ring-4 ring-green-300 ring-inset">English</button>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageIcon from "./../icons/LanguageIcon.vue";
import ChevronDown from "./../icons/ChevronDown.vue";
import MenuIcon from "./../icons/MenuIcon.vue";
export default {
  name: "Navigation",
  components: { LanguageIcon, ChevronDown, MenuIcon },
  data() {
    return {
      activeLang: this.$i18n.getLocale(),
      dropdown: false,
      menuMobileState: false,
    };
  },
  methods: {
    changeLang(lang) {
      this.$i18n.setLocale(lang);
      this.menuResponse();
      this.menuMobile();
      this.activeLang = lang;
    },
    menuResponse() {
      this.dropdown = !this.dropdown;
    },
    menuMobile() {
      this.menuMobileState = !this.menuMobileState;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdown = false;
        this.menuMobileState = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  unmounted() {
    document.removeEventListener("click", this.close);
  },
};
</script>

<style lang="postcss">
.active {
  @apply border-b-2 border-green-500 text-gray-900;
}

.lang-button {
  @apply flex px-3 py-1 bg-green-400 items-center font-semibold rounded-full text-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-300;
}

.nav-wrapper {
  @apply flex w-full py-4 items-center justify-between px-4 sm:px-6 md:px-10 lg:px-36;
}

.nav-item-wrapper {
  @apply flex cursor-pointer space-x-6 text-lg font-semibold items-center;
}

.lang-item {
  @apply select-none py-2 px-4 block text-sm font-medium hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none;
}
</style>

<template>
  <nav class="fixed top-0 py-2 w-full z-20 bg-white shadow-md">
    <div class="nav-wrapper">
      <div class="flex-none">
        <router-link to="/admin/dashboard">
          <img class="w-24" src="./../../assets/meira.png" alt="" />
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
            <router-link to="/admin/dashboard"> Pesan </router-link>
          </li>
          <li class="text-gray-600 hover:text-gray-900">
            <button
              @click="signOut"
              class="
                text-xl
                flex
                items-center
                space-x-2
                hover:bg-gray-200
                p-2
                rounded-lg
              "
            >
              <p>Log Out</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="menuMobileState" class="block md:hidden border-t-2">
      <div class="grid gap-2 w-full p-4">
        <div class="w-full py-1" @click="menuMobile">
          <router-link to="/" class="w-min text-xl">Pesan</router-link>
          <button
            @click="signOut"
            class="
              text-xl
              flex
              items-center
              space-x-2
              hover:bg-gray-200
              p-2
              rounded-lg
            "
          >
            <p>Log Out</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MenuIcon from "./../icons/MenuIcon.vue";
import firebaseApp from "./../../firebaseInit";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

export default {
  name: "Navigation",
  components: { MenuIcon },
  data() {
    return {
      dropdown: false,
      menuMobileState: false,
    };
  },
  methods: {
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
    signOut: function () {
      signOut(auth)
        .then(() => {
          this.$router.replace({ path: "/" });
        })
        .catch((error) => {
          console.log(error);
        });
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

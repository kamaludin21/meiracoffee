<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-200 p-2">
    <div class="bg-white
        mb-2
        py-2
        shadow-lg
        flex items-center
        px-6
        rounded-lg
        w-full
        justify-center space-x-2
        md:w-1/2
        lg:w-1/3
        xl:w-1/4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
      <a href="/" class="font-medium text-lg hover:text-green-400"
        >Back to Home</a
      >
    </div>
    <div
      class="
        bg-white
        border-2
        shadow-lg
        h-96
        flex flex-col
        justify-center
        px-6
        rounded-lg
        w-full
        md:w-1/2
        lg:w-1/3
        xl:w-1/4
      "
    >
      <loading v-if="isProcess" class="w-full" />
      <div v-if="!isProcess" class="space-y-3">
        <div class="text-5xl font-bold mb-2 text-green-900">
          <span
            class="
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-indigo-400
              to-purple-500
            "
          >
            Sign In
          </span>
        </div>
        <div
          v-if="error"
          class="p-2 rounded-lg bg-red-200 leading-5 font-medium text-sm"
        >
          {{ error }}
        </div>
        <div class="space-y-1">
          <p class="text-lg font-semibold">Email</p>
          <div
            class="
              group
              flex
              items-center
              border-2 border-gray-400
              rounded-md
              p-2
            "
            :class="
              errors.includes('email') ? 'ring-2 ring-red-400 border-none' : ''
            "
          >
            <i class="text-gray-500 fas fa-user-circle"></i>
            <input
              placeholder="ex: alamat.email@mail.com"
              v-model="email"
              type="text"
              class="pl-2 w-full focus:outline-none"
            />
          </div>
        </div>
        <div class="space-y-1">
          <p class="text-lg font-semibold">Password</p>
          <div
            class="
              group
              flex
              items-center
              border-2 border-gray-400
              rounded-md
              p-2
            "
            :class="
              errors.includes('password')
                ? 'ring-2 ring-red-400 border-none'
                : ''
            "
          >
            <i class="text-gray-500 fas fa-lock"></i>
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="pl-2 w-full focus:outline-none"
            />
          </div>
        </div>
        <button
          id="button"
          @click="login"
          class="
            text-lg
            font-bold
            py-3
            bg-blue-500
            text-white
            w-full
            rounded-lg
            shadow-md
            overflow-hidden
            relative
            hover:bg-blue-600
          "
        >
          LOGIN
        </button>
        
      </div>
      
    </div>
  </div>
</template>

<script>
import Loading from "./../components/commons_component/Loading.vue";
import firebaseApp from "./../firebaseInit";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(firebaseApp);

export default {
  name: "Login",
  components: {
    Loading,
  },
  data() {
    return {
      error: null,
      errors: [],
      email: null,
      password: null,
      isProcess: false,
    };
  },
  methods: {
    login: function () {
      this.isProcess = !this.isProcess;
      this.error = null;
      this.errors = [];
      if (this.email && this.password) {
        this.isProcess = !this.isProcess;
        setPersistence(auth, browserLocalPersistence)
          .then(async () => {
            try {
              await signInWithEmailAndPassword(auth, this.email, this.password);
              this.$router.push({ path: "/admin/dashboard" });
            } catch (e) {
              this.isProcess = false;
              this.error = e.message;
            }
          })
          .catch((e) => {
            this.isProcess = false;
            this.error = e.message;
          });
      }
      if (!this.email) this.errors.push("email");
      if (!this.password) this.errors.push("password");
      this.isProcess = !this.isProcess;
    },
  },
};
</script>

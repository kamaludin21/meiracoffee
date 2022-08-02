<template>
  <section class="py-20 px-4 md:px-6 lg:px-36 space-y-10 md:space-y-20">
    <p
      class="text-4xl font-black text-center"
      data-sal="fade"
      data-sal-delay="300"
      data-sal-duration="800"
      data-sal-easing="ease-out-bounce"
    >
      {{ $t("getTouchSection.mainTitle") }}
    </p>
    <div
      class="
        flex flex-col
        md:flex-row
        items-start
        justify-between
        space-y-8
        md:space-y-0
      "
    >
      <div
        class="w-full md:w-1/3 space-y-2"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <p class="text-2xl font-bold">{{ $t("getTouchSection.title") }}</p>
        <p class="text-lg font-medium leading-snug">
          {{ $t("getTouchSection.subtitle") }}
        </p>
        <div class="flex w-full gap-4">
          <a
            target="_blank"
            href="https://facebook.com/"
            class="bg-white hover:bg-green-100 rounded-full hover:shadow-md p-4"
          >
            <img
              src="./../../assets/icons8-facebook-f-500.png"
              class="w-6"
              alt="facebook icon"
            />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/"
            class="bg-white hover:bg-green-100 rounded-full hover:shadow-md p-4"
          >
            <img
              src="./../../assets/instagram.png"
              class="w-6"
              alt="instagram icon"
            />
          </a>
          <a
            target="_blank"
            href="https://wa.me/+6282170548877"
            class="bg-white hover:bg-green-100 rounded-full hover:shadow-md p-4"
          >
            <img
              src="./../../assets/whatsapp.png"
              class="w-6"
              alt="whatsapp icon"
            />
          </a>
          <a
            target="_blank"
            href="mailto:refinsianipar@gmail.com"
            class="bg-white hover:bg-green-100 rounded-full hover:shadow-md p-4"
          >
            <img
              src="./../../assets/email.png"
              class="w-6"
              alt="email icon"
            />
          </a>
        </div>
      </div>
      <div
        class="form-wrapper"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <!-- Empty State -->
        <div
          v-if="isSending"
          class="flex flex-col justify-center w-full px-2 md:px-24 py-24"
        >
          <smiley-icon />
          <p class="text-center font-semibold text-lg">
            Terima kasih telah mengirimkan pesan, akan kami tanggapi dalam waktu
            dekat.
          </p>
        </div>
        <!-- Form -->
        <loading v-if="loading" class="w-full" />
        <div v-if="!loading && !isSending" class="p-4 space-y-2">
          <p>{{ firebaseError }}</p>
          <div class="w-full space-y-1">
            <p :class="errors.includes('name') ? 'text-error' : ''">
              {{ $t("getTouchSection.name") }}
            </p>
            <input
              v-model="name"
              name="name"
              :class="errors.includes('name') ? 'ring-error' : ''"
              class="form-input"
            />
          </div>
          <div class="w-full space-y-1">
            <p :class="errors.includes('mail') ? 'text-error' : ''">
              {{ $t("getTouchSection.mail") }}
            </p>
            <input
              v-model="mail"
              name="mail"
              :class="errors.includes('mail') ? 'ring-error' : ''"
              class="form-input"
            />
          </div>
          <div class="w-full space-y-1">
            <p :class="errors.includes('message') ? 'text-error' : ''">
              {{ $t("getTouchSection.message") }}
            </p>
            <textarea
              v-model="message"
              name="message"
              rows="4"
              :class="errors.includes('message') ? 'ring-error' : ''"
              class="form-input"
            ></textarea>
          </div>
          <div class="w-full text-right">
            <button class="submit-button" @click="submitMessage">
              {{ $t("getTouchSection.submit") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sal from 'sal.js'
import Loading from "./../commons_component/Loading.vue";
import SmileyIcon from "./../icons/SmileyIcon.vue";
import app from "./../../firebaseInit";
import { addDoc, getFirestore, collection } from "firebase/firestore";
const db = getFirestore(app);

export default {
  name: "GetTouchSection",
  components: { Loading, SmileyIcon },
  data() {
    return {
      name: null,
      mail: null,
      message: null,
      errors: [],
      firebaseError: null,
      loading: false,
      isSending: false,
    };
  },
  mounted() {
    sal()
  },
  methods: {
    submitMessage: async function () {
      if (this.name && this.mail && this.message) {
        this.loading = !this.loading;
        try {
          await addDoc(collection(db, "messages"), {
            name: this.name,
            mail: this.mail,
            message: this.message,
            date: new Date().toLocaleString()
          });
        } catch (error) {
          this.firebaseError = error;
        } finally {
          this.loading = !this.loading;
          this.isSending = true;
        }
      } else {
        this.errors = [];

        if (!this.name) {
          this.errors.push("name");
        }
        if (!this.mail) {
          this.errors.push("mail");
        }
        if (!this.message) {
          this.errors.push("message");
        }
      }
    },
  },
};
</script>

<style lang="postcss">
.form-wrapper {
  @apply bg-white w-full md:w-3/5 lg:w-1/2 md:p-6 rounded-lg shadow-md space-y-2;
}

.ring-error {
  @apply ring-2 ring-red-400;
}

.text-error {
  @apply text-red-400 font-medium;
}
</style>

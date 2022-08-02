<template>
  <section
    class="
      flex flex-col
      py-32
      md:py-44
      px-4
      mc:px-6
      items-start
      md:px-10
      lg:px-36
      bg-gray-200
    "
  >
    <p class="font-bold text-4xl">Pesan Masuk</p>
    <div class="pt-10 w-full">
      <ul class="w-full">
        <li
          class="flex hover:bg-green-50 items-start justify-start bg-gray-100"
          v-for="(message, index) in messages"
          :key="message.id"
        >
          <div class="flex-initial p-4">
            <p class="text-lg font-bold">{{ index + 1 }}.</p>
          </div>
          <div class="flex-1 flex flex-col md:flex-row">
            <div class="w-full md:w-1/4 border-r-2 p-2 md:p-4">
              <p class="text-lg font-semibold">{{ message.name }}</p>
              <p class="text-sm">{{ message.mail }}</p>
            </div>
            <div class="flex-1 h-full p-2 md:p-4">
              <p class="text-lg font-semibold">{{ message.message }}</p>
            </div>
            <div class="flex-initial p-4">
              <p class="text-lg font-semibold">{{ message.date }}</p>
            </div>
          </div>
          <div>
            
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import app from "./../../firebaseInit";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
const db = getFirestore(app);

export default {
  name: "Dashboard",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData: async function () {
      const q = query(collection(db, "messages"));
      await getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.messages.push({
              id: doc.id,
              name: doc.data().name,
              mail: doc.data().mail,
              message: doc.data().message,
              date: doc.data().date,
            });
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="postcss"></style>

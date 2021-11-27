<template>
  <div class="bg-gray-200">
    <admin-navigation/>
    <router-view />
  </div>
</template>

<script>
import AdminNavigation from "./../../components/admin_dashboard/AdminNavigation.vue"

export default {
  name: 'AdminPage',
  components: {
    AdminNavigation
  }
}
</script>
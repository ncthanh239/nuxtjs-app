<template>
  <NuxtLink to="/user">User page</NuxtLink>
</template>

<script>
export default {
  middleware: 'authenticated',
  components: {
  },
  layout: 'HomeLayout',
  created() {
  }
}
</script>
<template>
  <div>
    <nuxt-link :to="{path: '/user'}">User</nuxt-link>
  </div>
</template>

<script>

export default {
  layout: 'HomeLayout',
  middleware: 'authenticated',
}
</script>

<template>
  <Detail :isCreate="isCreate" :data="data" :error="error" />
</template>

<script>
import Detail from '~/components/pages/user/detail/Detail'
export default {
  layout: 'HomeLayout',
  components: {
    Detail
  },
  data () {
    return {}
  },
  computed: {
    isCreate() {
      return this.$store.state.user.userInfoDetail.is_create
    },
    loading() {
      return this.$store.state.user.userInfoDetail.loading
    },
    data() {
      return this.$store.state.user.userInfoDetail.data
    },
    error() {
      return this.$store.state.user.userInfoDetail.error
    }
  },
  created () {
    this.$store.commit('user/userInfoDetail/setIsCreate', true)
    this.$store.commit('user/userInfoDetail/put', null)
    this.$store.commit('user/userInfoDetail/pendingData', false)
    this.$store.commit('user/userInfoDetail/handleError', null)
  },
}
</script>
<style scoped>
  .title {
    text-align: center;
  }
</style>

<template>
  <Detail :isCreate="isCreate" :data="data" :error="error" />
</template>

<script>
import Detail from '~/components/pages/user/detail/Detail'
import { ACTION_TYPE } from '~/define_constant/action_type'
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
      console.log('123', this.$store.state.user.userInfoDetail.is_create)
      return this.$store.state.user.userInfoDetail.is_create
    },
    loading() {
      return this.$store.state.user.userInfoDetail.loading
    },
    data() {
        console.log('data', this.$store.state.user.userInfoDetail.data)
      return this.$store.state.user.userInfoDetail.data
    },
    error() {
      return this.$store.state.user.userInfoDetail.error
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch({
        type: ACTION_TYPE.USER_INFO_DETAIL,
        id
    })
  },
}
</script>
<style scoped>
  .title {
    text-align: center;
  }
</style>

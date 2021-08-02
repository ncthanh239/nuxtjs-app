<template>
  <div>
      <h1 class="title">User page</h1>
      <b-table striped hover :items="dataUserInfo"></b-table>
  </div>
</template>

<script>
import {ACTION_TYPE} from '~/define_constant/action_type'
export default {
  data () {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  computed: {
    dataUserInfo() {
      console.log('123', this.$store.state.user.userInfo.data)
      return this.$store.state.user.userInfo.data
    }
  },
  created () {
    this.$store.dispatch({
      type: ACTION_TYPE.USER_INFO
    })
  },
  
}
</script>
<style scoped>
    .title {
        text-align: center;
    }
</style>

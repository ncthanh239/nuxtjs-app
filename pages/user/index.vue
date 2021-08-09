<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Data Table With Full Features</h3>
        </div>
        <div class="box-body">
          <Loading :isLoading="loading"/>
          <table id="example" class="table table-striped table-bordered" style="width:100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Updated</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in dataUserInfo" :key="data.id">
                    <td>{{data.id}}</td>
                    <td>{{data.name}}</td>
                    <td>{{data.email}}</td>
                    <td>{{data.created_at}}</td>
                    <td>{{data.updated_at}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Updated</th>
                </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ACTION_TYPE} from '~/define_constant/action_type'
import Loading from '~/components/LoadingBar.vue'
export default {
  layout: 'HomeLayout',
  components: {
    Loading
  },
  data () {
    return {}
  },
  computed: {
    dataUserInfo() {
      return this.$store.state.user.userInfo.data
    },
    loading() {
      console.log('loading', this.$store.state.user.userInfo.loading)
      return this.$store.state.user.userInfo.loading
    }
  },
  created () {
    this.$store.dispatch({
      type: ACTION_TYPE.USER_INFO,
    })
  },
}
</script>
<style scoped>
    .title {
        text-align: center;
    }
</style>

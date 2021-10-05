<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Data Table With Full Features</h3>
        </div>
        <div class="box-body">
          <Loading :isLoading="loading"/>
          <NuxtLink to="/user/create/">
            <button type="button" class="btn btn-sm btn-primary custom-btn">New</button>
          </NuxtLink>
          <table id="example" class="table table-striped table-bordered" style="width:100%">
            <thead>
                <tr>
                  <th v-if="actionCanEdit"></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Created</th>
                  <th>Updated</th>
                  <th v-if="actionCanDelete"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in dataUserInfo" :key="data.id">
                    <td v-if="actionCanEdit">
                      <button class="btn btn-sm btn-warning" @click="onClickEdit(data.id)">Edit</button>
                    </td>
                    <td>{{data.name}}</td>
                    <td>{{data.email}}</td>
                    <td>{{data.created_at}}</td>
                    <td>{{data.updated_at}}</td>
                    <td v-if="actionCanDelete">
                      <button class="btn btn-sm btn-danger" type="button" @click="onClickDelete(data.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
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
    },
    actionCanEdit() {
      return this.$store.state.user.userInfo.gridOptions.canEdit
    },
    actionCanDelete() {
      return this.$store.state.user.userInfo.gridOptions.canDelete
    }
  },
  created () {
    this.$store.dispatch({
      type: ACTION_TYPE.USER_INFO,
    })
  },
  beforeUpdate() {
    this.$nextTick(() => {
      // console.log('in beforeCreate');
      $('#example').DataTable();
    });
  },
  methods: {
    onClickDelete(rowData) {
      console.log('rowData', rowData);
      const params = {
        id: rowData
      }
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch({
            type: ACTION_TYPE.USER_INFO_DELETE,
            params
          })
          this.$store.commit('user/userInfo/pendingData', true)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    },
    onClickEdit(data) {
      this.$router.push({
        name: 'user-edit',
        params: {
          id: data
        }
      })
    }
  },
}
</script>
<style scoped>
  .title {
    text-align: center;
  }
  .custom-btn {
    margin-bottom: 10px;
  }
</style>

<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Data Table With Full Features</h3>
        </div>
          <NuxtLink to="/user/create/">
            <button type="button" class="btn btn-sm btn-primary">New</button>
          </NuxtLink>
        <div class="box-body">
          
          <div class="col-sm-6">
            
            <div>
              <label class="label-filter">
                  Show
                  <select name="example1_length" aria-controls="example1" class="form-control input-sm select-filter">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  entries
              </label>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="box-search"><label class="label-search">Search:<input v-model="searchQuery" type="search" class="form-control input-sm input-search" placeholder="" aria-controls="example1"></label></div>
          </div>
          <Loading :is-loading="loading"/>
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
                <tr v-for="data in resultQuery" :key="data.id">
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
  components: {
    Loading
  },
  layout: 'HomeLayout',
  middleware: 'authenticated',
  data () {
    return {
      searchQuery: null
    }
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
    },
    resultQuery(){
      if(this.searchQuery){
        return this.dataUserInfo.filter((item)=>{
          return this.searchQuery.toLowerCase().split('').every(v => item.name.toLowerCase().includes(v))
        })
      }else{
        return this.dataUserInfo;
      }
    }
  },
  created () {
    this.$store.dispatch({
      type: ACTION_TYPE.SET_ACTIVE_SIDEBAR,
      url: '/user'
    })
    this.$store.dispatch({
      type: ACTION_TYPE.USER_INFO,
    })
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
<style>
  .title {
    text-align: center;
  }
  
</style>

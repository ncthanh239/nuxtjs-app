<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 v-if="isCreate" class="box-title">Create new data</h3>
          <h3 v-else class="box-title">Edit data</h3>
        </div>
        <div class="box-body">
        <Loading :isLoading="loading"/>
          <form enctype="multipart/form-data" method="post" accept-charset="utf-8" @submit.prevent>
            <div class="form-group">
							<label for="">Name</label>
							<input type="text" v-model="queries.name" class="form-control" placeholder="Name">
              <div v-if="errors && errors.name">
              <span v-bind:key="key" v-for="(value, key) in errors.name" class="text-danger">
                {{ value }}
              </span>
            </div>
            </div>
            <div class="form-group">
							<label for="">Email</label>
							<input type="text" v-model="queries.email" class="form-control" placeholder="Email" :disabled="!isCreate">
              <div v-if="errors && errors.email">
              <span v-bind:key="key" v-for="(value, key) in errors.email" class="text-danger">
                {{ value }}
              </span>
              </div>
            </div>
            <div class="form-group">
							<label for="">Password</label>
							<input type="text" v-model="queries.password" class="form-control" placeholder="Password">
              <div v-if="errors && errors.password">
              <span v-bind:key="key" v-for="(value, key) in errors.password" class="text-danger">
                {{ value }}
              </span>
              </div>
            </div>
            <button @click="requestConfirm()" type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ACTION_TYPE } from '~/define_constant/action_type'
import Loading from '~/components/LoadingBar.vue'
export default {
  name: 'DetailUserInfo',
  components: {
    Loading
  },
  props: {
    isCreate: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Object, Array],
      default: null
    },
    error: {
      type: [Object, Array],
      default: null
    },
  },
  data () {
    return {
			queries: {
				name: '',
				email: '',
				password: ''
			},
      errors: null
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val, oldVal) {
        if (!this.isCreate) {
          const cloneVal = _.cloneDeep(val)
          if (JSON.stringify(cloneVal) !== JSON.stringify(oldVal)) {
            this.setQueries(cloneVal)
          }
        }
      }
    },
    error: {
      immediate: true,
      deep: true,
      handler(val, oldVal) {
        this.errors = val
      }
    }
  },
  computed: {
    loading() {
      console.log('loading1', this.$store.state.user.userInfoDetail.loading)
      return this.$store.state.user.userInfoDetail.loading
    },
  },
  created () {},
  methods: {
    requestConfirm() {
        const querySubmits = _.clone(this.queries)
        if (!this.isCreate) {
					const id = this.data.id
          this.$store.dispatch({
						type: ACTION_TYPE.USER_INFO_UPDATE,
            id,
						queries: querySubmits
					})
        } else {
					this.$store.dispatch({
						type: ACTION_TYPE.USER_INFO_CREATE,
						queries: querySubmits
					})
        }
    },
    setQueries(data) {
      if (data) {
        this.queries.name = data.name
        this.queries.email = data.email
        this.queries.password = data.password
      }
    }
  }
}
</script>
<style scoped>
  .title {
    text-align: center;
  }
</style>

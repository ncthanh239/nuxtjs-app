<template>
  <div class="login-box">
    <div class="login-logo">
      <a href=""><b>Admin</b>LTE</a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">Login to start your session</p>
      <form action="#" method="post" @submit.prevent>
      <div class="form-group" :class="error && error.email ? 'has-error': ''">
        <input v-model="user.email" type="text" class="form-control" placeholder="Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        <span v-if="error && error.email" class="help-block">{{ error.email[0] }}</span>
      </div>
      <div class="form-group" :class="error && error.password ? 'has-error': ''">
        <input v-model="user.password" type="password" class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        <span v-if="error && error.password" class="help-block">{{ error.password[0] }}</span>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block btn-flat" @click="login">Login</button>
        <button class="btn btn-block btn-facebook btn-flat"><i class="fa fa-facebook"></i> Login with
        Facebook</button>
        <button class="btn btn-block btn-google btn-flat"><i class="fa fa-google-plus"></i> Login with
        Google+</button>
        <!-- </div> -->
      </div>
      </form>
      <!-- <div class="form-group">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Login with
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Login with
        Google+</a>
      </div> -->
      <a href="#">I forgot my password</a><br>
      <a href="" class="text-center">Register a new membership</a>
    </div>
  </div>
</template>
<script>
import { ACTION_TYPE } from '~/define_constant/action_type'
export default {
  middleware: 'guest',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    async login() {
      try {
        this.$nuxt.$loading.start()
        await this.$auth.loginWith('local', {data: this.user})
        .then((response) => {
          this.$nuxt.$loading.finish()
          console.log('123123123123', response)
          const accessToken = response.data.token
          this.$store.dispatch({
            type: ACTION_TYPE.SET_ACCESS_TOKEN,
            accessToken
          })
        })
      } catch (e) {
        this.error = e.response.data.message
        console.log('12313', this.error)
        this.$nuxt.$loading.finish()
      }
    }
  }
}
</script>
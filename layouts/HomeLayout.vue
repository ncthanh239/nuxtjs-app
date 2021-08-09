<template>
<div class="hold-transition skin-blue sidebar-mini">
  <div class="wrapper">
    <NavBar />
    <SideBar />
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          Data Tables
          <small>advanced tables</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Tables</a></li>
          <li class="active">Data tables</li>
        </ol>
      </section>
      <section class="content">
        <nuxt />
      </section>
    </div>
    <Footer />
  </div>
</div>
</template>

<script>
// import Vue from 'vue'
import NavBar from './partials/NavBar'
import SideBar from './partials/SideBar'
import Footer from './partials/Footer'

export default {
  components: {
    NavBar,
    SideBar,
    Footer
  },
  mounted() {
    // $('#example').DataTable();
  }
}
// Vue.mixin(global)
</script>

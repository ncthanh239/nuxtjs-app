<template>
    <aside class="main-sidebar">
    <section class="sidebar">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="/bootstrap/img/avatar_jisoo.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p v-if="loggedInUser && loggedInUser.name">{{ loggedInUser.name }}</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li :class="getActiveClassTreeview('dashboard')">
          <NuxtLink to="/">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
          </NuxtLink>
        </li>
        <li :class="getActiveClassTreeview('user')">
          <NuxtLink to="/user">
            <i class="fa fa-user"></i> <span>User</span>
          </NuxtLink>
        </li>
        <li :class="getActiveClassTreeview('upload')">
          <NuxtLink to="/upload">
            <i class="fa fa-upload"></i>
            <span>Upload</span>
          </NuxtLink>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>UI Elements</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="../UI/general.html"><i class="fa fa-circle-o"></i> General</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-edit"></i> <span>Forms</span>
            <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="../forms/general.html"><i class="fa fa-circle-o"></i> General Elements</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-table"></i> <span>Tables</span>
            <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
          </a>
          <ul class="treeview-menu">
            <li class="active"><a href="data.html"><i class="fa fa-circle-o"></i> Data tables</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['getTreeview', 'getNowpage', 'loggedInUser'])
  },
  methods: {
    getActiveClassTreeview(treeView) {
      if (treeView === this.getTreeview) return 'treeview active'
      return 'treeview'
    },
    getNowPage(page) {
      if (page === this.getNowpage) return 'now_page'
      return ''
    }
  }
}
</script>

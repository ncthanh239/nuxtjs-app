<template>
<div class="body">
  <div class="sidebar" :class="active ? 'active': ''">
    <div class="logo_content">
      <div class="logo">
        <i class="fa fa-music" aria-hidden="true"></i>
        <div class="logo_name">
          JisooApp
        </div>
      </div>
      <i class="fa fa-bars" id="btn" aria-hidden="true" @click="sideBarActive()"></i>
    </div>
    <ul class="nav_list">
      <li>
          <i class="fa fa-search" aria-hidden="true" @click="searchActive()"></i>
          <input type="text" class="input_search" placeholder="Search...">
          <!-- <span class="tooltip">Dashboard</span> -->
      </li>
      <li>
        <a href="">
          <i class="fa fa-th-large" aria-hidden="true"></i>
          <span class="link_name">Dashboard</span>
        </a>
        <!-- <span class="tooltip">Dashboard</span> -->
      </li>
      <li>
        <a href="">
          <i class="fa fa-user" aria-hidden="true"></i>
          <span class="link_name">User</span>
        </a>
        <!-- <span class="tooltip">User</span> -->
      </li>
      <li>
        <a href="">
          <i class="fa fa-comments" aria-hidden="true"></i>
          <span class="link_name">Message</span>
        </a>
        <!-- <span class="tooltip">Message</span> -->
      </li>
      <li>
        <a href="">
          <i class="fa fa-pie-chart" aria-hidden="true"></i>
          <span class="link_name">Analystics</span>
        </a>
        <span class="tooltip">Analystics</span>
      </li>
    </ul>
    <div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-i5liksKo3g85Qz90jpYieJ4J_YGy5S7JQ&usqp=CAU" alt="">
          <div class="name_job">
            <div class="name">Nguyen Van A</div>
            <div class="job">Developer</div>
          </div>
        </div>
      <i class="fa fa-sign-out" id="log_out" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="home_content">
    <div class="text">
      Home content
    </div>
  </div>
</div>

</template>

<script>
import 'boxicons'
export default {
  components: {
  },
  data () {
    return {
      active: false,
      avtiveSearch: false
    }
  },
  created() {
  },
  methods: {
    sideBarActive() {
      this.active = !this.active
    },
    searchActive() {
      this.active = !this.active
    }
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 78px;
  background: #11101d;
  padding: 6px 14px;
  transition: all 0.5s ease;
}
.sidebar.active {
  width: 240px;
}
.sidebar .logo_content .logo {
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  pointer-events: none;
  opacity: 0;
}
.sidebar.active .logo_content .logo {
  opacity: 1;
  pointer-events: none;
}
.sidebar ul li i {
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
.sidebar ul li a {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4 ease;
  border-radius: 12px;
}
.sidebar ul li a:hover {
  background: #fff;
  color: #11101d;
}
.logo_content .logo i {
  font-size: 28px;
  margin-right: 5px;
}
.logo_content .logo .logo_name {
  font-size: 20px;
  font-weight: 400;
}
.input_search {
  line-height: normal;
}
.sidebar #btn {
  position: absolute;
  color: #fff;
  left: 50%;
  top: 6px;
  font-size: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
}
.sidebar.active #btn {
  left: 90%;
}
.sidebar ul {
  margin-top: 20px;
}
.sidebar ul li {
  position: relative;
  margin: 0 5px;
  height: 50px;
  width: 100%;
  list-style: none;
  line-height: 50px;
}
.sidebar.active .link
.sidebar ul li .tooltip {
  position: absolute;
  height: 35px;
  width: 122px;
  background: #fff;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.2);
}
.sidebar ul li input {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: #1d1b31;
  padding-left: 50px;
  font-size: 18px;
  color: #fff;
}
.sidebar ul li .fa-search {
  position: absolute;
  z-index: 99;
  color: #fff;
  font-size: 22px;
  transition: all 0.5 ease;
}
.sidebar ul li .fa-search:hover {
  background: #fff;
  color: #1d1b31;
}
.sidebar .profile_content {
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
}
.sidebar .profile_content .profile {
  position: relative;
  padding: 10px 6px;
  height: 60px;
  background: #11101d;
}
.profile_content .profile .profile_details {
  display: flex;
  align-items: center;
}
.profile .profile_details img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 12px;
}
.profile .profile_details .name_job {
  margin-left: 10px;
}
.profile .profile_details .name {
  font-size: 15px;
  font-weight: 400;
}
.profile .profile_details .job {
  font-size: 12px;
}
.profile #log_out {
  position: absolute;
  left: 88%;
  bottom: 5px;
  transform: translateX(-50%);
  min-width: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 12px;
}
.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 240px);
  left: 240px;
}
.home_content .text {
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}

</style>
<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Dashboard</h3>
        </div>
        <div class="box-body">
          <carousel :items="1.5"
            :autoplay="true"
            :loop="true"
            :margin="10"
            :nav="false"
            :dots="false"
            :responsive="{
              0: {
                items: 1.5
              },
              768: {
                items: 1.5
              }
            }">
              <div class="carousel">
                <p class="carousel-text">Test sas ass asas asas asas</p>
                <div class="carousel-bg"></div>
                <img class="carousel-img-bg" src="/bootstrap/img/jisoo1.jpg" alt>
              </div>
          </carousel>
        </div>
        <div class="box-header">
          <h3 class="box-title">Dashboard</h3>
        </div>
        <div class="box-body">
          <carousel :items="3"
            :autoplay="true"
            :loop="true"
            :margin="10"
            :nav="false"
            :dots="false"
            :responsive="{
              0: {
                items: 2.2
              },
              768: {
                items: 3.2
              }
            }">
              <div class="carousel">
                <p class="carousel-text">Test sas ass asas asas asas</p>
                <div class="carousel-bg"></div>
                <img class="carousel-img" src="/bootstrap/img/jisoo1.jpg" alt>
              </div>
              <div class="carousel">
                <p class="carousel-text">Test sas ass asas asas asas</p>
                <div class="carousel-bg"></div>
                <img class="carousel-img" src="/bootstrap/img/jisoo2.jpg" alt>
              </div>
              <div class="carousel">
                <p class="carousel-text">Test sas ass asas asas asas</p>
                <div class="carousel-bg"></div>
                <img class="carousel-img" src="/bootstrap/img/jisoo3.jpg" alt>
              </div>
              <div class="carousel">
                <p class="carousel-text">Test sas ass asas asas asas</p>
                <div class="carousel-bg"></div>
                <img class="carousel-img" src="/bootstrap/img/jisoo4.jpg" alt>
              </div>
              <div class="carousel">
                <p class="carousel-text">Test sas ass asas asas asas</p>
                <div class="carousel-bg"></div>
                <img class="carousel-img" src="/bootstrap/img/jisoo5.jpg" alt>
              </div>
              <div class="carousel">
                <p class="carousel-text">Test sas ass asas asas asas</p>
                <div class="carousel-bg"></div>
                <img class="carousel-img" src="/bootstrap/img/jisoo6.jpg" alt>
              </div>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import {ACTION_TYPE} from '~/define_constant/action_type'

export default {
  components: {
    carousel
  },
  layout: 'HomeLayout',
  // middleware: 'authenticated',
  created() {
    this.$store.dispatch({
      type: ACTION_TYPE.SET_ACTIVE_SIDEBAR,
      url: '/'
    })
  }
}
</script>
<style scoped>
.carousel {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}
.carousel-text {
  position: absolute;
  bottom: 0;
  margin-left: 20px;
  z-index: 551;
  color: #fff;
}
.carousel-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  background: linear-gradient(transparent, #000);
  opacity: 0.8;
  z-index: 550;
}
.carousel-img-bg {
  width: 300px;
  height: 400px;
}
.carousel-img {
  width: 300px;
  height: 200px;
}
</style>

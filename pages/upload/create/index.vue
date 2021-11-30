<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 v-if="isCreate" class="box-title">Create new data</h3>
          <h3 v-else class="box-title">Edit data</h3>
        </div>
        <div class="box-body">
          <form enctype="multipart/form-data" method="post" accept-charset="utf-8" @submit.prevent>
            <div class="form-group">
							<!-- <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                :data-images="images"
                idUpload="myIdUpload"
                editUpload="myIdEdit"
                ></vue-upload-multiple-image> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from 'vue'
// import VueUploadMultipleImage from 'vue-upload-multiple-image'
// Vue.use(VueUploadMultipleImage)
export default {
  components: {
    // VueUploadMultipleImage
  },
  layout: 'HomeLayout',
  middleware: 'authenticated',
  data () {
    return {
      images: []
    }
  },
  computed: {
  },
  created () {},
  methods: {
  }
}
</script>
<style scoped>
  .title {
    text-align: center;
  }
</style>

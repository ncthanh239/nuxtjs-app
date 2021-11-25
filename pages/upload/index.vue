<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Upload image</h3>
        </div>
        <div class="box-body">
          <form enctype="multipart/form-data" method="post" accept-charset="utf-8" @submit.prevent>
            <div class="form-group">
                <div class="container-image position-relative">
                  <div class="image-preview">
                    <img class="show-image" :src="imageActive">
                  </div>
                </div>
            </div>
            <div class="form-group">
                <div class="container-item">
                  <div v-for="image in getData" :key="image" class="list-image-item position-relative" :class="{highlight: isActive == image || imageActive == image}" @click="activeImage(image)">
                    <div class="preview-item">
                      <img class="show-image-preview" :src="image">
                    </div>
                  </div>
                  <div class="list-image-item position-relative">
                    <div class="preview-item">
                      <button class="btn-image-item" @click="isHidden = !isHidden">+</button>
                    </div>
                  </div>
                </div>
            </div>
            <div v-if="isHidden" class="form-group">
              <form action="" enctype="multipart/form-data" method="post" @submit.prevent>
                <div class="mb-3 row">
                  <div class="col-md-1">
                    <label for="" class="form-label">Images</label>
                  </div>
                  <div class="col-md-7">
                    <input type="file" class="form-control" ref="files" multiple @change="onChange()">
                  </div>
                  <div class="col-md-4">
                    <button class="btn btn-primary mb-3" @click="uploadImage()">Upload</button>
                  </div>
                </div>
              </form>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ACTION_TYPE } from '~/define_constant/action_type'
export default {
  components: {
  },
  layout: 'HomeLayout',
  middleware: 'authenticated',
  data () {
    return {
      files: [],
      isHidden: false,
      isActive: null,
      imageActive: null,
    }
  },
  computed: {
    getData() {
      return this.$store.state.upload.upload.data
    },
  },
  created () {
    this.$store.dispatch({
      type: ACTION_TYPE.SET_ACTIVE_SIDEBAR,
      url: '/upload'
    })
    this.getImages()
  },
  methods: {
    getImages() {
      this.$store.dispatch({
        type: ACTION_TYPE.SET_LOADING,
        loading: true
      })
      try {
        this.$store.dispatch({
          type: ACTION_TYPE.UPLOAD_INFO,
        })
        .then((response) => {
          if (this.getData.length > 0) {
            this.imageActive = this.getData[0]
          }
          this.$store.dispatch({
            type: ACTION_TYPE.SET_LOADING,
            loading: false
          })
        })
      } catch(e) {
        this.$store.dispatch({
          type: ACTION_TYPE.SET_LOADING,
          loading: false
        })
      }
    },
    activeImage(image) {
      this.isActive = image
      this.imageActive = image
    },
    onChange() {
      const files = this.$refs.files.files
      this.files = [...this.files, ...files]
    },
    validate(file) {
      const maxSize = 200000;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
      if (file.size > maxSize) {
        return `Max size: ${maxSize/1000}Kb`
      }
      if (!allowedTypes.includes(file.type)) {
        return 'Not an image'
      }
      return ''
    },
    uploadImage() {
      this.$store.dispatch({
        type: ACTION_TYPE.SET_LOADING,
        loading: true
      })
      const formData = new FormData();
      for( let i = 0; i < this.$refs.files.files.length; i++ ){
        const file = this.$refs.files.files[i];
        formData.append('filename[' + i + ']', file);
      }
      try {
        this.$store.dispatch({
          type: ACTION_TYPE.UPLOAD_INFO_CREATE,
          queries: formData
        })
        .then((response) => {
          this.$store.dispatch({
            type: ACTION_TYPE.SET_LOADING,
            loading: false
          })
        })
      } catch(e) {
        this.$store.dispatch({
          type: ACTION_TYPE.SET_LOADING,
          loading: false
        })
      }
    }
  },
}
</script>
<style>
  .title {
    text-align: center;
  }
  .container-image {
    border: 1px dashed #d6d6d6;
    height: 300px;
  }
  .container-item {
    height: 90px;
    flex-wrap: wrap;
    display: flex;
  }
  .image-preview {
    height: 200px;
    width: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .position-relative {
    position: relative;
  }
  .show-image {
    max-height: 200px;
    max-width: 200px;
    display: block;
    vertical-align: middle;
  }
  .list-image-item {
    margin-right: 5px;
    margin-bottom: 5px;
    border: 1px solid #d6d6d6;
    height: 60px;
    width: 60px;
    border-radius: 4px;
    cursor: pointer;
  }
  .preview-item {
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    top: 50%;
    position: absolute;
    display: block;
    cursor: pointer;
  }
  .show-image-preview {
    max-width: 40px;
    max-height: 40px;
    display: block;
    vertical-align: middle;
  }
  .highlight {
    border: 1px solid #2fa3e7;
  }
  .btn-image-item {
    border: none;
    width: 40px;
    height: 40px;
    display: block;
    vertical-align: middle;
    font-size: 24px;
  }
</style>
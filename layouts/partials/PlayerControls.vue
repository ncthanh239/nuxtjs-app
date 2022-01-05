<template>
<div class="main-footer now-playing-bar">
    <div class="player-controls row">
      <div class="info-audio col-md-3">
        <div class="mediafile">
          <div class="media-left">
            <img class="img-audio" src="/bootstrap/img/jisoo1.jpg" alt="">
          </div>
          <div class="media-right">
            Tháng mấy em nhớ anh
          </div>
        </div>
      </div>
      <div class="duration-bar col-md-5">
        <div class="level-item">
          <div class="control">
            <div class="btn-control is-hover-circle">
              <i class="fa fa-random" aria-hidden="true"></i>
            </div>
            <div class="btn-control is-hover-circle">
              <i class="fa fa-step-backward" aria-hidden="true"></i>
            </div>
            <div class="btn-control" @click="currentAudio.isPlaying ? pause(currentAudio): play(currentAudio)">
              <!-- <i class="fa fa-play" aria-hidden="true"></i>
              <i class="fa fa-pause" aria-hidden="true"></i> -->
              <i :class="currentAudio.isPlaying ? 'fa fa-pause': 'fa fa-play'" aria-hidden="true"></i>
            </div>
            <!-- <div v-else class="btn-control" @click="pauseAudio()">
              <i class="fa fa-pause" aria-hidden="true"></i>
            </div> -->
            <div class="btn-control is-hover-circle">
              <i class="fa fa-step-forward" aria-hidden="true"></i>
            </div>
            <div class="btn-control is-hover-circle">
              <i class="fa fa-repeat" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="level-item mar-b-5">
          <span class="time left">{{current}}</span>
          <!-- <div class="zm-duration-bar" style="display: flex; justify-content: center;">
          </div> -->
          <div class="progress zm-duration-bar" style="display: flex; height: 3px;">
            <div class="progress-bar" role="progressbar" :style="{ width: currentTime }" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <span class="time right">{{duration}}</span>
        </div>
      </div>
      <div class="action-audio col-md-4">
        <!-- <div class="btn-zm btn-previous">
          <i class="fa fa-step-backward" aria-hidden="true"></i>
        </div>
        <div v-if="showPlay" class="btn-zm btn-play" @click="playAudio('/bootstrap/audio/ThangMayEmNhoAnh-HaAnhTuan.mp3')">
          <i class="fa fa-play" aria-hidden="true"></i>
        </div>
        <div v-else class="btn-zm btn-pause" @click="pauseAudio()">
          <i class="fa fa-pause" aria-hidden="true"></i>
        </div>
        <div class="btn-zm btn-next">
          <i class="fa fa-step-forward" aria-hidden="true"></i>
        </div> -->
        Current Time {{currentTime}}
      </div>
    </div>
</div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      currentAudio: {
        id: 1,
        name: 'Tháng Mấy Em Nhớ Anh - Hà Anh Tuấn',
        file: new Audio('/bootstrap/audio/ThangMayEmNhoAnh-HaAnhTuan.mp3'),
        isPlaying: false,
      },
      currentTime:'0%',
      current: this.convertTime(0),
      duration: this.convertTime(0),
      width: '0%'
    }
  },
  computed: {
  },
  watch: {
    currentTime() {
    if (this.currentTime === '100%') {
        // console.log('in')
        // this.currentTime = '0%'
        // audio.isPlaying = false
        // this.current = this.convertTime(0);
        clearInterval(this.intervalid);
      }
    }
  },
  created() {
  },
  methods: {
    play(audio) {
      audio.isPlaying = true;
      audio.file.play();
      this.intervalid = setInterval(function(){
        const current = audio.file.currentTime;
        this.current = this.convertTime(current);
        const bar = (current/audio.file.duration)*100;
        this.currentTime = bar +'%'
        this.duration = this.convertTime(audio.file.duration)
        if (bar === '100%') {
          this.currentTime = '0%'
          audio.isPlaying = false
          this.current = this.convertTime(0);
          clearInterval(this.intervalid);
        }
      }.bind(this), 1000);
    },
    pause(audio) {
      audio.isPlaying = false;
      audio.file.pause();
    },
    convertTime(time) {
      let mins = Math.floor(time / 60);
      if (mins < 10) {
        mins = '0' + String(mins);
      }
      let secs = Math.floor(time % 60);
      if (secs < 10) {
        secs = '0' + String(secs);
      }
      return mins + ':' + secs;
    }
  }
}
</script>

<style scoped>
  .now-playing-bar {
    padding-left: 0 !important;
  }
  .player-controls {
    position: fixed;
    z-index: 2;
    width: 100%;
    max-height: 70px;
    background: linear-gradient(transparent, #000);
    background-color: #5E4E4D;
    bottom: 0;
    padding: 15px 0 15px ;
  }
  .info-audio {
    border: #357CA5;
  }
  .mediafile {
    align-items: center;
    display: flex;
    text-align: left;
    border-radius: 5px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .media-left {
    margin-right: 10px;
    margin-left: 10px;
  }
  .media-right {
    color: #fff;
  }
  .media-left, .media-right {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .img-audio {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: img-audio-spin infinite 10s linear;
  }
  @keyframes img-audio-spin {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }
  .action-audio {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    line-height: 40px;
  }
  .btn-zm {
    margin: 0 20px;
    color: #fff;
  }
  .btn-zm i {
    cursor: pointer;
    font-size: 18px;
  }
  .level-item {
    align-items: center;
    display: flex;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
  }
  .control {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
  }
  .btn-control {
    color: #fff;
    margin: 0 20px;
    line-height: 0;
    font-size: 14px;
    border-radius: 999px;
    border: 0;
    display: inline-block;
    font-weight: 400;
    text-transform: none;
    text-align: center;
    cursor: pointer;
    position: relative;
  }
  .is-hover-circle {
    padding: 3px;
  }
  .mar-b-5 {
    margin-bottom: 5px !important;
  }
  .time.left {
    text-align: right;
    margin-right: 10px;
    opacity: .5;
  }
  .time {
    min-width: 45px;
    font-size: 12px;
    color: #fff;
    font-weight: 500;
  }
  .time.right {
    margin-left: 10px;
  }
  .zm-duration-bar {
    height: 15px;
    width: 100%;
    cursor: pointer;
  }
  .progress {
    margin-bottom: 0 !important;
  }
  @media only screen and (max-width: 997px) {
  .now-playing-bar {
    display: none;
  }
}
</style>

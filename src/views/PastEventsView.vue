<template>
  <Nav :open_button_color="this.showWebView ? 'white' : 'black'" open_button_style="text" />
  <BackButton />

  <!-- web-view -->
  <section class="wrapper full" v-if="this.showWebView">
    <img src="@/assets/images/tedxiitpatna_logo-2B.png" class="logo watermark" v-if="screenWidth > 1300">
    <div class="paintedx"></div>

    <div class="pastevents-wrapper">
      <div class="title"> <span style = "color: #FF2B1D;" >Past </span> <span style = "color: #FFF;" >Events</span></div>
      

      <div class="event-scroller">
        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2023"><img src="@/assets/images/poster-square-2023.png"></router-link>
          </div>
          <div class="year">2023</div>
        </div>
        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2022"><img src="@/assets/images/poster-square-2022.png"></router-link>
          </div>
          <div class="year">2022</div>
        </div>

        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2021"><img src="@/assets/images/poster-square-2021.png"></router-link>
          </div>
          <div class="year">2021</div>
        </div>

        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2019"><img src="@/assets/images/poster-square-2019.png"></router-link>
          </div>
          <div class="year">2019</div>
        </div>

        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2016"><img src="@/assets/images/poster-square-2016.png"></router-link>
          </div>
          <div class="year">2016</div>
        </div>

      </div>
    </div>
  </section>

  <!-- mobile-view -->
  <section class="wrapper mobile full" v-else>
    <img src="@/assets/images/tedxiitpatna_logo-2B.png" class="logo watermark">
    <img src="@/assets/images/Flower-cropped.png" class="flower" style="filter: invert(100%)">

    <div class="pastevents-wrapper">
      <div class="title"><span style = "color: #FF2B1D;" >Past </span> <span style = "color: #FFF;" >Events</span></div>
      <!-- <div class="title-red">Past</div>
      <div class="title-white">White</div> -->

      <div class="event-scroller">
        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2023"><img src="@/assets/images/poster-square-2023.png"></router-link>
          </div>
          <div class="year">2023</div>
        </div>
        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2022"><img src="@/assets/images/poster-square-2022.png"></router-link>
          </div>
          <div class="year">2022</div>
        </div>

        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2021"><img src="@/assets/images/poster-square-2021.png"></router-link>
          </div>
          <div class="year">2021</div>
        </div>

        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2019"><img src="@/assets/images/poster-square-2019.png"></router-link>
          </div>
          <div class="year">2019</div>
        </div>

        <div class="event">
          <div class="thumbnail">
            <router-link to="/pastevents/2016"><img src="@/assets/images/poster-square-2016.png"></router-link>
          </div>
          <div class="year">2016</div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: "PastEventsView",
  components: {
    Nav,
    BackButton,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      showWebView: window.innerWidth >= 830,
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.showWebView = window.innerWidth >= 830
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
@import '@/assets/css/past_events.css';
@import '@/assets/css/past_events.mobile.css';
</style>

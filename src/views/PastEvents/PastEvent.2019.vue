<template>
    <Nav v-if="!this.showWebView" open_button_style="icon" open_button_color="white" />
  
 

 <div class="graphic" >
  <img src="@/assets/images/tedx_iitplogo2023.png" style="height:70px;margin-top:2vh;margin-left:4vh;">
  </div>
 
  <div class="logo-container">
      <!-- <img src="@/assets/images/newlogo.png" class="logo" style="height:70px;margin-left:40px;margin-top:-10vh;"> -->
      <HomeNav v-if="this.showWebView" style="left: 33.5vw;"/>
    </div>
  
  <img src="@/assets/images/tedxiitpatna_logo-2W.png" class="logo watermark"
    v-if="this.screenWidth > 1100 && this.screenWidth > this.screenHeight * 1.3">
  <div :class="['theme-bg', (this.screenWidth > this.screenHeight * 1.51) ? 'web' : 'mobile']">
    <img src="@/assets/past-events/poster-bg/poster-bg-2019.png">
  </div>
  <!-- eyeballed these 1.3 and 1.51 coefficients -->

  <section class="intro-wrapper full">
    <div class="bg"></div>
    <div class="content">
      <div class="title"  style="display: flex;">Metamorphosis <div class="year" style="  align-content: end ;">(2019)</div></div>
     
      <div class="intro">The 2nd Edition of TEDxIITPatna, Metamorphosis, put forth the ideology that permanence is an
        illusion, and everything in this universe is susceptible to change. Change is not always bad- it often brings
        opportunities to transform into something better. While change is inevitable, it is upon us to grow and adapt to
        the evolution of our surroundings. We had experts discuss the effects of rapid and drastic changes on
        technology, entertainment, but most importantly, on people and societal values.
      </div>
    </div>
  </section>

  <section class="speakers-wrapper full">
    <div class="content">
      <div class="title" style="background-image: linear-gradient(90deg, #EE0028 0%, #FFFFFF 57.37%) ; -webkit-background-clip: text; color: transparent;">Speakers</div>
      <div class="speakers">
        <div class="speaker" v-for="speaker in this.speakerDetails" :key="speaker" @click="this.configureSpeakerModal(speaker)">
          <img :src="speaker.imageSrc">
        </div>
      </div>
    </div>
  </section>

  <section class="gallery-wrapper full">
    <div class="content">
      <div class="title" style="background-image: linear-gradient(90deg, #EE0028 0%, #FFFFFF 57.37%) ; -webkit-background-clip: text; color: transparent;left: 13%;">Gallery</div>
      <div class="gallery">
        <div class="gallery-image" v-for="i in 16" @click="this.configureImageModal(i)">
          <img :src="require(`@/assets/past-events/gallery-images/2019/${i}.png`)">
        </div>
      </div>
    </div>
  </section>


  <TransitionGroup tag="div" name="fade">
    <!-- transition group for fade-in and fade-out effects -->

    <ImageModal v-if="this.showImageModal" :showModal="this.showImageModal" :imageSrc="this.imageModalSrc"
      @closeImageModal="this.closeAllModals" />
    
    <SpeakerModal v-if="this.showSpeakerModal" :showModal="this.showSpeakerModal" :imageSrc="this.speakerModalSrc"
      :name="this.speakerName" :title="this.speakerTitle" :content="this.speakerContent"
      :talkLink="this.speakerTalkLink" @closeSpeakerModal="this.closeAllModals" />

  </TransitionGroup>

  <!-- <Footer /> -->
</template>

<script>
import Nav from '@/components/Nav.vue'
// import Footer from '@/components/Footer.vue'
import BackButton from '@/components/BackButton.vue'
import HomeNav from '@/components/Home.Nav.vue'
import ImageModal from '@/components/GalleryImageModal.vue'
import SpeakerModal from '@/components/SpeakerDetailModal.vue'


export default {
  name: "PastEventsView.2019",
  components: {
    Nav,
    // Footer,
    BackButton,
    ImageModal,
    SpeakerModal,
    HomeNav,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showWebView: window.innerWidth >= (1.51 * window.innerHeight),

      showImageModal: false,
      imageModalSrc: null,

      showSpeakerModal: false,
      speakerModalSrc: null,
      speakerName: null,
      speakerTitle: null,
      speakerContent: null,
      speakerTalkLink: null,
      
      speakerDetails: [
        {
          name: "Kaushalendra Kumar",
          title: "Executive Director, Kaushalya Foundation",
          imageSrc: require('@/assets/past-events/speaker-images/2019/Kaushalendra.png'),
          content: "He is a social entrepreneur and founder of Kaushalya Foundation and KNIDS GREEN. His work wasn't only appreciated by society but by nations worldwide. He is an Ashoka Fellow and is included in the 256 future heroes of India, published by India Today.",
          speakerTalkLink: ""
        },
        {
          name: "Anupam Jalote",
          title: "CEO, iCreate",
          imageSrc: require('@/assets/past-events/speaker-images/2019/AnupamJalote.png'),
          content: "He is an innovator, leader and mentors with domain expertise in startup ecosystems, institute buildings, promotion and funding of startups, driving international collaborations, renewable energy, telecom, customer experience and customer value management and strategic consulting. He is currently CEO at iCreate.",
          speakerTalkLink: ""
        },
        {
          name: "Tanvi Bhardwaj",
          title: "CTO and Co-founder, MishiPay",
          imageSrc: require('@/assets/past-events/speaker-images/2019/Tanvi.png'),
          content: "She graduated from the University of Manchester with a First Class Honours degree in Computer Systems Engineering. She is now the co-founder and CTO of multi-award-winning retail technology company MishiPay, based in London and Banglore.",
          speakerTalkLink: ""
        },
        {
          name: "Dr. Prashant Jha",
          title: "Director BMJ innovations",
          imageSrc: require('@/assets/past-events/speaker-images/2019/PrashantJha.png'),
          content: "He graduated with MBBS and studied Family Medicine for his post-graduation. He trained as a Physician in India and then as a GP with RCGP, London. He is a significant influencer and wants to put India as the leader in medical sciences.",
          speakerTalkLink: ""
        },
        {
          name: "Shams Aalam",
          title: "Paralympic Swimmer",
          imageSrc: require('@/assets/past-events/speaker-images/2019/ShamsAalam.png'),
          content: "He is a true exemplification that the strength of their desire measures the size of one's success. He was awarded best emerging leader in disability sports and sports diplomacy by the US Department of State Global Sports Mentoring Program 2018.",
          speakerTalkLink: "https://www.youtube.com/watch?v=LjuAimWKBjs"
        },
      ]
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.showWebView = window.innerWidth >= (1.51 * window.innerHeight)
    },
    configureImageModal(i) {
      this.imageModalSrc = require(`@/assets/past-events/gallery-images/2019/${i}.png`)
      this.showImageModal = true
    },
    configureSpeakerModal(speaker) {
      this.speakerModalSrc = speaker.imageSrc
      this.speakerName = speaker.name
      this.speakerTitle = speaker.title
      this.speakerContent = speaker.content
      this.speakerTalkLink = speaker.speakerTalkLink
      this.showSpeakerModal = true
    },
    closeAllModals() {
      this.showImageModal = false
      this.showSpeakerModal = false
    },
    closeAllModalsOnKeyPress(e) {
      if (e.key === "Escape") {
        this.closeAllModals();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      window.addEventListener('keydown', this.closeAllModalsOnKeyPress)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('keydown', this.closeAllModalsOnKeyPress)
  }
}
</script>

<style scoped>
@import '@/assets/css/past_events.common.css';
@import '@/assets/css/home.css';
.theme-bg{
  background-image: url('/src/assets/images/Frame40.png');
}



.intro-wrapper .title{
  word-break: break-word;
}
.theme-bg.mobile img{
    transform: translate(2%, -50%);
    opacity: 0.6;
}

</style>

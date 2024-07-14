<template>
  
  



 <div class="graphic" >
  <img src="@/assets/images/tedx_iitplogo2023.png" style="height:70px;margin-top:2vh;margin-left:4vh;">
  </div>
 
  <div class="logo-container">
      <!-- <img src="@/assets/images/newlogo.png" class="logo" style="height:70px;margin-left:40px;margin-top:-10vh;"> -->
     <HomeNav/>
    </div>
  
  <div :class="['theme-bg', (this.screenWidth > this.screenHeight * 1.51) ? 'web' : 'mobile']">
    <img src="@/assets/past-events/poster-bg/poster-bg-2022.png">
  </div>
  <!-- eyeballed these 1.3 and 1.51 coefficients -->

  <section class="intro-wrapper full">
    <div class="bg"></div>
    <div class="content">
      <div class="title" style="color: white; display: flex;">INFINITE AFFINITIES <div class="year" style="  align-content:end ;">(2022)</div></div>
      <!-- <div class="catchphrase">The Acoustic of Strength</div> -->
      
      <div class="intro" style="color: white;">We at TEDxIITPatna believe that dreams can become reality when everyone works together. We are an amalgamation of ideas - intertwined by the bonds we share. Through Infinite Affinities, we celebrate unity and the spirit of togetherness. We are human only through the humanity of others. If we are to accomplish anything- it will, in equal measure, be due to the work and achievements of the entire community. We all have a role to play and its vital that our actions inspire others to want to be a part of a better and brighter future.
      </div>
    </div>
  </section>

  <section :class="['speakers-wrapper', this.screenWidth > 1.4 * this.screenHeight ? 'full' : '']">
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
      <div class="title" style="background-image: linear-gradient(90deg, #EE0028 0%, #FFFFFF 57.37%) ; -webkit-background-clip: text; color: transparent;left:15%;">Gallery</div>
      <div class="gallery">
        <div class="gallery-image" v-for="i in 6" @click="this.configureImageModal(i)">
          <img :src="require(`@/assets/past-events/gallery-images/2022/${i}.jpg`)">
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

<script scoped>
import Nav from '@/components/Nav.vue'
// import Footer from '@/components/Footer.vue'
import BackButton from '@/components/BackButton.vue'
import ImageModal from '@/components/GalleryImageModal.vue'
import SpeakerModal from '@/components/SpeakerDetailModal.vue'

import HomeNav from '@/components/Home.Nav.vue'





export default {
  name: "PastEventsView.2021",
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
          name: "ALAKH PANDEY",
          title: "Founder at PhysicsWallah",
          imageSrc: require('@/assets/past-events/speaker-images/2022/alakh.png'),
          content: "Alakh Pandey, also known as PhysicsWallah has a repute among entrance aspirants for his clear and vivid educational content. Starting from humble beginnings and recording lectures from a rented apartment, he set up a youtube channel in 2014, followed by a startup. His startup quickly grew into India’s 101st Unicorn, with tremendous support from his students.",
          speakerTalkLink: "https://youtu.be/TzFS00kIQXs?si=XEmzVUmEVl6YuPfs"
        },
        {
          name: "JAVED KHATRI",
          title: "Founder at Kustard",
          imageSrc: require('@/assets/past-events/speaker-images/2022/javed.jpeg'),
          content: "Javed Khatri is an entrepreneur who founded a mobile developer app Kustard with his two school friends, which eBike Go acquired for $2 million last year. At eBike Go, Javed and his team were building the future of EV tech. Javed, born and brought up in the slums of Mumbai, has a Bachelor’s degree in engineering and computer science from K J Somaiya College of Engineering. In 2022 Javed was featured in the prestigious Forbes 30 under 30 Asia list, an annual list of Asia’s brightest young stars.",
          speakerTalkLink: "https://youtu.be/UGj-KMkxzd0?si=iSiCpYTgoyU0gmtS"
        },
        {
          name: "KLANZ",
          title: "Musician",
          imageSrc: require('@/assets/past-events/speaker-images/2022/klanz.jpg'),
          content: "Kalyan Jyoti Kashyap, popularly known as klanz is one of the trailblazers, who creates electronic music pieces with an Indian classical touch. The 19-year-old musician from Assam is currently pursuing a Bachelor’s in Computer Applications. His extraordinary music showcases elements of traditional musical instruments in modern electronic tracks. Though his beginnings were from humble, independent music, he quickly rose to fame with hits like Baahi and Bohai. Thus, with his unique music, he has established his place in this new generation of Indian musicians.",
          speakerTalkLink: "https://youtu.be/rXAGgVvHWp8?si=IxK-1HsqO3v2UQHX"
        },
        {
          name: "NARAYAN MAHADEVAN",
          title: "Startup Specialist and a Strong Technologist",
          imageSrc: require('@/assets/past-events/speaker-images/2022/Narayan.jpg'),
          content: "Narayan Mahadevan is a startup Specialist and a Strong Technologist with a deep understanding of Mobile and Cloud Space. He is a Hardcore Product Specialist, a mentor for Product Startups and a Cloud specialist with more than a decade of experience in developing Cloud Based Architecture using AWS components. He also has Hands-on Full Stack Development experience in Mobile Apps, Web Apps, Middleware and Server-side Technologies.",
          speakerTalkLink: "https://youtu.be/Lb4IUwxjn_8?si=D8dnbGia4-tms3ZJ"
        },
        {
          name: "PHANI TETALI",
          title: "Professor and former head at IDC School of Design, IIT-B",
          imageSrc: require('@/assets/past-events/speaker-images/2022/phani.jpg'),
          content: "Phani Tetali, Professor and former head at IDC School of Design, IIT Bombay, is an esteemed personality in the Animation and Gaming Industry. A passionate illustrator and cartoonist, he was the Vice President and CTO of Danlaw Technologies India Limited, Hyderabad and DQ Entertainment, Hyderabad. Founder of Animatix Studios, he was responsible for creating the contemporary cartoon animation “Tara Ki Duniya”. He has the distinction of being a jury member at the FICCI Frames Best Animation film Awards in 2008 and 2009.",
          speakerTalkLink: "https://youtu.be/lMZpncCeuoY?si=IMdC8S1qsIcLhjbW"
        },
        {
          name: "SRIDHARAN DEVARAJAN",
          title: "Associate Professor at IISC",
          imageSrc: require('@/assets/past-events/speaker-images/2022/sridharan.jpg'),
          content: "Sridharan Devarajan, an Associate Professor at IISC, is a prominent name in the Cognition, Computation and Behavioural research domain. Besides being an associate faculty at CSA, he has a DBT-Wellcome Trust India Alliance Fellowship. An illustrious personality who explores Indian pre-history and culture, he has published 17 research articles and 4 conference proceedings. He has a resolute aptitude to study brain-behaviour relationships by designing nifty experiments and developing deep learning models. In addition to being proficient in large-scale computer simulations, he is adept in Functional Neuroimaging(fMRI), diffusion imaging(dMRI) and high-density electroencephalography(EEG).",
          speakerTalkLink: "https://youtu.be/j2_rdExSYqg?si=aV1zFiZNH2QWEtCz"
        },
        {
          name: "SRIPARNA SAHA",
          title: "Associate professor at IIT Patna",
          imageSrc: require('@/assets/past-events/speaker-images/2022/sriparna.jpg'),
          content: "Sriparna Saha, one of the eight leading women scientists in the area of AI in India and an Associate Editor of IEEE, is an admiral example of women empowerment. Currently working as an Associate professor at IIT Patna, she has been an author of more than 290 papers. She is the recipient of Google India Women in Engineering Award, 2008. She is currently working on the application of AI to solve various societal problems benefitting the common people of India.",
          speakerTalkLink: "https://youtu.be/BfPw-NfddPI?si=gdggh3V7vX6x26Rc"
        },
      ]
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
    },
    configureImageModal(i) {
      this.imageModalSrc = require(`@/assets/past-events/gallery-images/2021/${i}.png`)
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
.theme-bg{
  background-image: url('/src/assets/images/Frame40.png');
}

.theme-bg.mobile img{
    transform: translate(17%, -50%);
    opacity: 0.6;
}

</style>

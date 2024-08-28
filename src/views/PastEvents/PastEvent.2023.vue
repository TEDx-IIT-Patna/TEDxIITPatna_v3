<template>
    <Nav open_button_color="white" open_button_style="icon" />
  
    <BackButton />
  
    <img src="@/assets/images/tedxiitpatna_logo-2W.png" class="logo watermark"
      v-if="this.screenWidth > 1100 && this.screenWidth > this.screenHeight * 1.3">
    <div :class="['theme-bg', (this.screenWidth > this.screenHeight * 1.51) ? 'web' : 'mobile']">
      <img src="@/assets/past-events/poster-bg/poster-bg-2023.png">
    </div>
    <!-- eyeballed these 1.3 and 1.51 coefficients -->
  
    <section class="intro-wrapper full">
      <div class="bg"></div>
      <div class="content">
        <div class="title">Prisms of Perception</div>
        <div class="year">2023</div>
        <div class="intro">
            "Prisms of Perception" explores how our view of the world is shaped by various factors, much like light through a prism. It highlights that different individuals have unique perspectives, and by changing our viewpoint, we can uncover new solutions and ideas, just as a prism reveals a fresh perspective on light, ultimately fostering innovation and understanding
        </div>
      </div>
    </section>
  
    <section class="speakers-wrapper full">
      <div class="content">
        <div class="title">Speakers.</div>
        <div class="speakers">
          <div class="speaker" v-for="speaker in this.speakerDetails" :key="speaker"
            @click="this.configureSpeakerModal(speaker)">
            <img :src="speaker.imageSrc">
          </div>
        </div>
      </div>
    </section>
  
    <section class="gallery-wrapper full">
      <div class="content">
        <div class="title">Gallery.</div>
        <div class="gallery">
          <div class="gallery-image" v-for="i in 4" @click="this.configureImageModal(i)">
            <img :src="require(`@/assets/past-events/gallery-images/2023/${i}.jpeg`)">
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
  import ImageModal from '@/components/GalleryImageModal.vue'
  import SpeakerModal from '@/components/SpeakerDetailModal.vue'
  
  export default {
    name: "PastEventsView.2023",
    components: {
      Nav,
      // Footer,
      BackButton,
      ImageModal,
      SpeakerModal,
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
            name: "ANISH MALPANI",
            title: "Founder of Ashaya, a start-up that transforms multi-layered plastic waste into high-quality products",
            imageSrc: require('@/assets/past-events/speaker-images/2023/ANISH.png'),
            content: "Anish Malpani is a social entrepreneur and a spoken word artist who is the founder of Ashaya, a start-up that transforms multi-layered plastic waste into high-quality products. He left his lucrative job in the US and returned to India to work with waste pickers for a social cause. He has a BBA degree from the University of Texas and has over 9 years of experience in finance, operations, data and the social impact space across three continents. He launched Ashaya in 2021 and developed a patent-pending technology to extract materials from multi-layered plastic waste, such as chips packets.",
            speakerTalkLink: ""
          },
          {
            name: "SHREYASHI SINGH",
            title: "Indian shooter and politician",
            imageSrc: require('@/assets/past-events/speaker-images/2023/shreyashi.png'),
            content: "Shreyasi Singh is an Indian shooter and politician. She competes in the double trap event. She won a gold medal in the Shooting at the 2018 Commonwealth Games in Gold Coast, Australia - Women's double trap and a silver medal at the 2014 Commonwealth Games in Glasgow, Scotland. In 2020, she joined India's ruling Bharatiya Janata Party and is a Member of Bihar Legislative Assembly from Jamui constituency. Singh was part of the Indian team at the 2013 Trap Shooting World Cup held in Acapulco, Mexico. She won the 15th position there. At the young age of 30, she joined the Bharatiya Janata Party in 2020",
            speakerTalkLink: ""
          },
          {
            name: "SHIKHAR GOEL",
            title: "One of the brilliant minds behind the inception of GeeksforGeeks",
            imageSrc: require('@/assets/past-events/speaker-images/2023/Shikhar.png'),
            content: "Shikhar Goel's outstanding track record in crafting groundbreaking products showcases his unmatched ability to innovate. As one of the brilliant minds behind the inception of GeeksforGeeks, he has consistently exhibited a forward- thinking mindset and an unwavering dedication to achieving excellence. Through his visionary leadership, Shikhar has played a pivotal role in transforming GeeksforGeeks into the ultimate hub for coding enthusiasts across the globe, a testament to his remarkable leadership and passion for the field.",
            speakerTalkLink: ""
          },
          {
            name: "DEEPTI ASTHANA",
            title: "Independent photographer, film-maker, educator and National Geographic Explorer",
            imageSrc: require('@/assets/past-events/speaker-images/2023/Deepti.png'),
            content: "Deepti Asthana is an independent photographer, film-maker, educator and National Geographic Explorer. Her work focuses on gender and environmental issues in traditional societies of India. Her keen interest in slow and long form documentary photography allows her in- depth access into the lives of the people she photographs. In the year 2020, Deepti was awarded by World Press Photo under their Global Talent 6*6 program. Deepti is currently documenting the water crisis in Western Himalayas and how it impacts lives of young women. Her project is supported by The National Geographic Society.",
            speakerTalkLink: ""
          },
          {
            name: "SHRADHA KHAPRA",
            title: "Founder of Apna College ",
            imageSrc: require('@/assets/past-events/speaker-images/2023/shraddha.png'),
            content: "Shradha Khapra is a young and popular educator, content creator, coding teacher, YouTuber, and social media star from Haryana, India. She is known for being one of the best coding educators in the country, who left her job at Microsoft to help Indian students learn to code. She joined Microsoft as a full-time employee in Hyderabad but later quit her job to pursue her passion for teaching coding. She collaborated with Aman Dhattarwal and started giving online coding classes on YouTube and other platforms. She is also an entrepreneur and runs her own company called Apna College, which provides online courses and guidance for engineering students.",
            speakerTalkLink: ""
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
        this.imageModalSrc = require(`@/assets/past-events/gallery-images/2016/${i}.jpg`)
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
  .theme-bg img{
    width:70%;
  }  
  .theme-bg.mobile img {
    transform: translate(-20%, -50%) scale(1.25);
    object-fit :contain;
    /* transform:scale(0.5); */
    /* width:90%;
    height:90%; */
    opacity: 0.6;
  }
  </style>
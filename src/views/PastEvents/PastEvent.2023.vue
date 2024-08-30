<template>
  <NewNav />

  <div
    class="div"
    :style="{ backgroundImage: `url(${require('../../assets/images/1.png')})` }"
  >
    <div style="background-color: transparent">
      <img src="../../assets/images/tedxiitpatna_logo-1W.png" class="graphic" />
    </div>

    <HomeNav class="thisHomeNav" />

    <section class="content-wrapper">
      <div>
        <img
          src="../../assets/images/Prism_Vector-removebg-preview-1.png"
          class="prism-img"
        />
      </div>

      <div class="para">
        <div class="content">
          <div class="Title">PRISMS<span class="X">x</span> OF</div>
          <div class="Title" style="display: block">PERCEPTION</div>

          <div class="Text">
            "Prisms of Perception" explores how our view of the world is shaped
            by various factors, much like light through a prism. It highlights
            that different individuals have unique perspectives, and by changing
            our viewpoint, we can uncover new solutions and ideas, just as a
            prism reveals a fresh perspective on light, ultimately fostering
            innovation and understanding.
          </div>
        </div>
      </div>
    </section>
  </div>

  <div
    class="div"
    :style="{ backgroundImage: `url(${require('../../assets/images/2.png')})` }"
  >
    <section class="content-wrapper">
      <div>
        <img
          src="../../assets/images/Prism_Vector-removebg-preview-1.png"
          class="prism-img"
        />
      </div>

      <div class="para">
        <div class="text-speakers">SPEAKERS</div>

        <div class="speakers">
          <div
            class="speaker"
            v-for="speaker in this.speakerDetails"
            :key="speaker"
            @click="this.configureSpeakerModal(speaker)"
          >
            <img :src="speaker.imageSrc" />
          </div>
        </div>
      </div>
    </section>
  </div>

  <div
    class="div"
    :style="{ backgroundImage: `url(${require('../../assets/images/3.png')})` }"
  >
    <section class="content-wrapper">
      <div>
        <img
          src="../../assets/images/Prism_Vector-removebg-preview-1.png"
          class="prism-img"
        />
      </div>

      <div class="para">
        <div class="text-gallery">GALLERY</div>

        <div class="gallery-grid">
          <div
            class="gallery-image"
            v-for="i in 2"
            :key="i"
            @click="this.configureImageModal(i)"
          >
            <img
              :src="
                require(`@/assets/past-events/gallery-images/2023/Rectangle-15${i}.png`)
              "
            />
          </div>
        </div>

        <div class="gallery-grid">
          <div
            class="gallery-image"
            v-for="i in 2"
            :key="i"
            @click="this.configureImageModal(i)"
          >
            <img
              :src="
                require(`@/assets/past-events/gallery-images/2023/Rectangle-15${
                  i + 2
                }.png`)
              "
            />
          </div>
        </div>
      </div>
    </section>
  </div>

  <TransitionGroup tag="div" name="fade">
    <!-- transition group for fade-in and fade-out effects -->

    <ImageModal
      v-if="this.showImageModal"
      :showModal="this.showImageModal"
      :imageSrc="this.imageModalSrc"
      @closeImageModal="this.closeAllModals"
    />

    <SpeakerModal
      v-if="this.showSpeakerModal"
      :showModal="this.showSpeakerModal"
      :imageSrc="this.speakerModalSrc"
      :name="this.speakerName"
      :title="this.speakerTitle"
      :content="this.speakerContent"
      :talkLink="this.speakerTalkLink"
      @closeSpeakerModal="this.closeAllModals"
    />
  </TransitionGroup>
</template>

<script scoped>
import HomeNav from "@/components/Home.Nav.vue";
import NewNav from "@/components/NewNav.vue";
import SpeakerModal from "@/components/SpeakerDetailModal.vue";
import ImageModal from "@/components/GalleryImageModal.vue";

export default {
  components: {
    NewNav,
    HomeNav,
    SpeakerModal,
    ImageModal,
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
          title: "Founder of Ashaya",
          imageSrc: require("../../assets/images/ANISH.png"),
          content:
            "Anish Malpani is a social entrepreneur and a spoken word artist who is the founder of Ashaya, a start-up that transforms multi-layered plastic waste into high-quality products. He left his lucrative job in the US and returned to India to work with waste pickers for a social cause. He has a BBA degree from the University of Texas and has over 9 years of experience in finance, operations, data and the social impact space across three continents. He launched Ashaya in 2021 and developed a patent-pending technology to extract materials from multi-layered plastic waste, such as chips packets.",
          speakerTalkLink: "https://www.youtube.com/watch?v=pRyNvnZiAcU",
        },
        {
          name: "SHREYASHI SINGH",
          title: "An Indian shooter and politician",
          imageSrc: require("../../assets/images/shreyasi-singh-during-the-medal-ceremony.png"),
          content:
            "Shreyasi Singh is an Indian shooter and politician. She competes in the double trap event. She won a gold medal in the Shooting at the 2018 Commonwealth Games in Gold Coast, Australia - Women's double trap and a silver medal at the 2014 Commonwealth Games in Glasgow, Scotland. In 2020, she joined India's ruling Bharatiya Janata Party and is a Member of Bihar Legislative Assembly from Jamui constituency. Singh was part of the Indian team at the 2013 Trap Shooting World Cup held in Acapulco, Mexico. She won the 15th position there. At the young age of 30, she joined the Bharatiya Janata Party in 2020.",
          speakerTalkLink: "https://www.youtube.com/watch?v=PPvYJWcErBw",
        },
        {
          name: "SHIKHAR GOEL",
          title:
            "One of the brilliant minds behind the inception of GeeksforGeeks",
          imageSrc: require("../../assets/images/Rectangle-147.png"),
          content:
            "Shikhar Goel's outstanding track record in crafting groundbreaking products showcases his unmatched ability to innovate. As one of the brilliant minds behind the inception of GeeksforGeeks, he has consistently exhibited a forward- thinking mindset and an unwavering dedication to achieving excellence. Through his visionary leadership, Shikhar has played a pivotal role in transforming GeeksforGeeks into the ultimate hub for coding enthusiasts across the globe, a testament to his remarkable leadership and passion for the field.",
          speakerTalkLink: "https://www.youtube.com/watch?v=3oInMZIFu-s&t=1s",
        },
        {
          name: "DEEPTI ASTHANA",
          title:
            "Independent photographer, film-maker, educator and National Geographic Explorer",
          imageSrc: require("../../assets/images/dp_sqaure-1.png"),
          content:
            "Deepti Asthana is an independent photographer, film-maker, educator and National Geographic Explorer. Her work focuses on gender and environmental issues in traditional societies of India. Her keen interest in slow and long form documentary photography allows her in- depth access into the lives of the people she photographs. In the year 2020, Deepti was awarded by World Press Photo under their Global Talent 6*6 program. Deepti is currently documenting the water crisis in Western Himalayas and how it impacts lives of young women. Her project is supported by The National Geographic Society.",
          speakerTalkLink: "https://www.youtube.com/watch?v=5fv5V28ZIRY",
        },
        {
          name: "SHRADHA KHAPRA",
          title:
            "Educator, content creator, coding teacher, YouTuber, and social media star",
          imageSrc: require("../../assets/images/Rectangle-149.png"),
          content:
            "Shradha Khapra is a young and popular educator, content creator, coding teacher, YouTuber, and social media star from Haryana, India. She is known for being one of the best coding educators in the country, who left her job at Microsoft to help Indian students learn to code. She joined Microsoft as a full-time employee in Hyderabad but later quit her job to pursue her passion for teaching coding. She collaborated with Aman Dhattarwal and started giving online coding classes on YouTube and other platforms. She is also an entrepreneur and runs her own company called Apna College, which provides online courses and guidance for engineering students.",
          speakerTalkLink: "https://www.youtube.com/watch?v=uJDiBurD_YM",
        },
      ],
    };
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    },
    configureImageModal(i) {
      this.imageModalSrc = require(`@/assets/past-events/gallery-images/2023/Rectangle-15${i}.png`);
      this.showImageModal = true;
    },
    configureSpeakerModal(speaker) {
      this.speakerModalSrc = speaker.imageSrc;
      this.speakerName = speaker.name;
      this.speakerTitle = speaker.title;
      this.speakerContent = speaker.content;
      this.speakerTalkLink = speaker.speakerTalkLink;
      this.showSpeakerModal = true;
    },
    closeAllModals() {
      this.showImageModal = false;
      this.showSpeakerModal = false;
    },
    closeAllModalsOnKeyPress(e) {
      if (e.key === "Escape") {
        this.closeAllModals();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      window.addEventListener("keydown", this.closeAllModalsOnKeyPress);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("keydown", this.closeAllModalsOnKeyPress);
  },
};
</script>

<style scoped>
@import "/src/assets/css/past_events_2023.css";

.thisHomeNav {
  left: 31vw;
  bottom: 71vh;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 548;
}

@media screen and (max-width: 1400px) {
  .thisHomeNav {
    display: none;
  }
}

@media screen and (max-height: 700px) {
  .thisHomeNav {
    bottom: 65vh;
  }
}
</style>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Molend">
  <div class="graphic" style="background-color:#111111">
    <!-- <img src="@/assets/images/newlogo.png" style="height:70px;margin-top:4vh;margin-left:4vh;"> -->
    <Nav :open_button_color="this.showWebView ? 'white' : 'black'" open_button_style="text" />
    <BackButton />
  </div>
  <!-- <Nav :open_button_color="this.showWebView ? 'white' : 'black'" open_button_style="text" />
  <BackButton /> -->
  <!-- web+mobile view of the contents -->
  <section :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']">
    <div class="graphic" id="a">
      <!-- <img src="@/assets/images/newlogo.png" style="height:70px;margin-top:-5vh;margin-left:-00vh;"> -->
      <img src="@/assets/images/shraddha.png">
    </div>
    <div class="content">
      <div class="title">SHRADHA<span class="X" ></span> KHAPRA </div>
      <div class="Text">"Shradha Khapra is a young and popular educator, content creator, coding teacher, YouTuber, 
        and social media star from Haryana, India. She is known for being one of the best coding educators in
         the country, who left her job at Microsoft to help Indian students learn to code. She joined Microsoft
          as a full-time employee in Hyderabad but later quit her job to pursue her passion for teaching coding.
           She collaborated with Aman Dhattarwal and started giving online coding classes on YouTube and other 
           platforms. She is also an entrepreneur and runs her own company called Apna College, which provides
            online courses and guidance for engineering students.
      </div>
      <!-- <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" class="Link"
        rel="noopener noreferrer">  <span style="vertical-align: middle;">Theme Video</span><img src="@/assets/images/Arrow.png" style="vertical-align: middle;"></a> -->
    </div>
  </section>

  <section :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']">
    <div class="graphic" id="a">
      <!-- <img src="@/assets/images/newlogo.png" style="height:70px;margin-top:-5vh;margin-left:-00vh;"> -->
      <img src="@/assets/images/shreyashi.png">
    </div>
    <div class="content">
      <div class="title">SHREYASHI<span class="X" ></span> SINGH </div>
      <div class="Text">"Shreyasi Singh is an Indian shooter and politician. She competes in the double 
        trap event. She won a gold medal in the Shooting at the 2018 Commonwealth Games in Gold Coast, 
        Australia - Women's double trap and a silver medal at the 2014 Commonwealth Games in Glasgow, 
        Scotland. In 2020, she joined India's ruling Bharatiya Janata Party and is a Member of Bihar 
        Legislative Assembly from Jamui constituency. Singh was part of the Indian team at the 2013 Trap 
        Shooting World Cup held in Acapulco, Mexico. She won the 15th position there. At the young age of
         30, she joined the Bharatiya Janata Party in 2020 
      </div>
      <!-- <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" class="Link"
        rel="noopener noreferrer">  <span style="vertical-align: middle;">Theme Video</span><img src="@/assets/images/Arrow.png" style="vertical-align: middle;"></a> -->
    </div>
  </section>
    <section :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']">
    <div class="graphic" id="a">
      <!-- <img src="@/assets/images/newlogo.png" style="height:70px;margin-top:-5vh;margin-left:-00vh;"> -->
      <img src="@/assets/images/Deepti.png">
    </div>
    <div class="content">
      <div class="title">DEEPTI<span class="X" ></span> ASTHANA</div>
      <div class="Text">"Deepti Asthana is
        an independent photographer, film-maker, educator and National Geographic Explorer. Her work focuses on gender 
        and environmental issues in traditional societies of India. Her keen interest in slow and long form documentary 
        photography allows her in- depth access into the lives of the people she photographs. In the year 2020, Deepti was 
        awarded by World Press Photo under their Global Talent 6*6 program. Deepti is currently documenting the water crisis 
        in Western Himalayas and how it impacts lives of young women. Her project is supported by The National Geographic Society.
      </div>
      <!-- <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" class="Link"
        rel="noopener noreferrer">  <span style="vertical-align: middle;">Theme Video</span><img src="@/assets/images/Arrow.png" style="vertical-align: middle;"></a> -->
    </div>
  </section>
    <section :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']">
    <div class="graphic" id="a">
      <!-- <img src="@/assets/images/newlogo.png" style="height:70px;margin-top:-5vh;margin-left:-00vh;"> -->
      <img src="@/assets/images/ANISH.png">
    </div>
    <div class="content">
      <div class="title">ANISH<span class="X" ></span> MALPANI </div>
      <div class="Text">"Anish Malpani is a social entrepreneur and a spoken word artist who is the founder of Ashaya, 
        a start-up that transforms multi-layered plastic waste into high-quality products. He left his lucrative job in the US and returned 
        to India to work with waste pickers for a social cause. He has a BBA degree from the University of Texas and has over 9 years of experience
         in finance, operations, data and the social impact space across three continents. He launched Ashaya in 2021 and developed
        a patent-pending technology to extract materials from multi-layered plastic waste, such as chips packets.
      </div>
      <!-- <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" class="Link"
        rel="noopener noreferrer">  <span style="vertical-align: middle;">Theme Video</span><img src="@/assets/images/Arrow.png" style="vertical-align: middle;"></a> -->
    </div>
  </section>
    <section :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']">
    <div class="graphic" id="a">
      <!-- <img src="@/assets/images/newlogo.png" style="height:70px;margin-top:-5vh;margin-left:-00vh;"> -->
      <img src="@/assets/images/Shikhar.png">
    </div>
    <div class="content">
      <div class="title">SHIKHAR<span class="X" ></span> GOEL </div>
      <div class="Text">"Shikhar Goel's outstanding track record in crafting groundbreaking products showcases his unmatched ability
         to innovate. As one of the brilliant minds behind the inception of GeeksforGeeks, he has consistently exhibited a forward- thinking 
         mindset and an unwavering dedication to achieving excellence. Through his visionary leadership, Shikhar has played a pivotal role 
         in transforming GeeksforGeeks into the ultimate hub for coding enthusiasts across the globe, a testament to his remarkable leadership 
         and passion for the field.
      </div>
      <!-- <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" class="Link"
        rel="noopener noreferrer">  <span style="vertical-align: middle;">Theme Video</span><img src="@/assets/images/Arrow.png" style="vertical-align: middle;"></a> -->
    </div>
  </section>

  <Footer />
</template>

<script scoped>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import HomeNav from '@/components/Home.Nav.vue'
import Footer from '@/components/Footer.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Footer,
    HomeNav,
    BackButton,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showWebView: window.innerWidth >= (1.51 * window.innerHeight),
      
      countdownTarget: new Date("2022-09-03T00:00:00.000+05:30"), // target date for countdown
      displayDays: 0,
      displayHours: 0,
      _days: 60 * 60 * 24,
      _hours: 60 * 60,
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.showWebView = window.innerWidth >= (1.51 * window.innerHeight)
    },
    formatTime(val) {
      return val >= 10 ? String(val) : "0" + String(val)
    },
    countdownLogic(interval) {
      const now = new Date()
      const deltaT = Math.trunc((this.countdownTarget.getTime() - now.getTime()) / 1000) // in seconds

      if (deltaT < 0) {
        // closeInterval(interval)
        return
      }

      const days = Math.trunc(deltaT / this._days)
      const hours = Math.trunc((deltaT - days * this._days) / this._hours)

      this.displayDays = days
      this.displayHours = hours
    }
  },
  created() {
    this.countdownLogic()
    const timer = setInterval(() => this.countdownLogic(timer), 1000)
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

<style>
@import '@/assets/css/home.css';
@import '@/assets/css/home.mobile.css';
</style>

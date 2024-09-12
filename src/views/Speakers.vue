<template style="background-color:black;">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Molend">
  <div class="graphic" style="background-color:black">
    <!-- <img src="@/assets/images/newlogo.png" style="height:70px;margin-top:4vh;margin-left:4vh;"> -->
    <Nav :open_button_color="this.showWebView ? 'white' : 'white'" open_button_style="text" />
    <BackButton />
  </div>

  <!-- <Nav :open_button_color="this.showWebView ? 'white' : 'black'" open_button_style="text" />
  <BackButton /> -->
  <!-- web+mobile view of the contents -->
  <div class="wrap">
    <div :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']"
      v-if="this.screenWidth > 1000">
      <div class=" cont">
        <div class="graphi">
          <img class="img" src="@/assets/images/speaker/nehaag1.png">

        </div>

        <div class="abou">

          <div class="text" style="color: aliceblue; wi">
            Neha Agarwal, founder of the esteemed "Mathematically Inclined," is a passionate mathematics maven. Holding
            degrees from the prestigious
            University of Delhi, Neha's YouTube channel boasts an enviable 1.5 million
            subscribers and 150 million views, showcasing her proficiency in math tutorials, problem-solving,
            and study guidance. With a remarkable average watch time and engagement rate,
            her channel has consistently ranked among India's top educational platforms.
            Her content has also been recognized internationally, earning prestigious awards for innovative education.
            Notably, she has received the coveted "Best ZONAL Teacher Award" from the International Mathematics
            Olympiad.
            Featured among YouTube's "Best Education Channels," Neha's tireless endeavors have ignited a profound
            passion
            for mathematics in countless scholars and enthusiasts.
          </div>
          <div style="width:100% ; display:flex ; justify-content:center">
            <div class="talk_butto">
              <div class="but">
                <a class="linkk"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
                  target="_blank">Book Tickets </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container" v-else>
      <img class="imge" src="@/assets/images/speaker/nehaag1.png">
      <div class="info">
        Neha Agarwal, founder of the esteemed "Mathematically Inclined," is a passionate mathematics maven. Holding
        degrees from the prestigious
        University of Delhi, Neha's YouTube channel boasts an enviable 1.5 million
        subscribers and 150 million views, showcasing her proficiency in math tutorials, problem-solving,
        and study guidance. With a remarkable average watch time and engagement rate,
        her channel has consistently ranked among India's top educational platforms.
        Her content has also been recognized internationally, earning prestigious awards for innovative education.
        Notably, she has received the coveted "Best ZONAL Teacher Award" from the International Mathematics Olympiad.
        Featured among YouTube's "Best Education Channels," Neha's tireless endeavors have ignited a profound passion
        for
        mathematics in countless scholars and enthusiasts.

      </div>
      <div class="talk_butto">
        <div class="but">
          <a class="linkk"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
            target="_blank" style="display: flex ; justify-content: center;">Book Tickets </a>

        </div>
      </div>

    </div>



    <div :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']"
      v-if="this.screenWidth > 1000">
      <div class=" cont">
        <div class="graphi">
          <img class="img" src="@/assets/images/speaker/satyanshu.png" style="margin-bottom: -4rem;">

        </div>

        <div class="abou">

          <div class="text" style="color: aliceblue;">
            Satyanshu is a National Award-winning filmmaker,
            writer and professor of cinema. His debut feature film,
            Chintu Ka Birthday, released in 2020 on ZEE5 to widely

            positive reception by critics and audiences alike.

            He started his professional journey by writing poems for Vikramaditya Motwane's Udaan,
            produced by Anurag Kashyap. Satyanshu has also written lyrics for Amit V. Masurkar's Sulemani Keeda and
            Vinod
            Chopra Films'
            Ferrari Ki Sawaari. His directorial debut was a Kashmiri short film Tamaash, which won several awards at
            different film festivals,
            including a National Award. In addition to writing and directing, Satyanshu has conducted screenwriting
            courses at Anupam Kher's 'Actor Prepares' as well as workshops across India.
            Satyanshu has designed and mentored both seasons of AIB's 'First Draft' screenwriter residency programme.
            During the COVID-19 pandemic, he launched a fundraising initiative by conducting online lectures on cinema.
            Satyanshu has also been a creative consultant with Sony LIV across several projects. He is currently working
            on the recently announced third season of AIB's 'First Draft' programme. Most recently, Satyanshu
            co-directed
            the Sony LIV series Jehanabad - Of Love & War, which was well received by both critics and audiences alike.
            He
            is also developing a series for Vikramaditya Motwane, and is simultaneously developing his original series
            and
            feature ideas.
            He is also consulting on several projects across formats.
          </div>
          <div class="flexbutton">
            <div style="     background-color: #B50000; color: white;width: 130px;
    height: 42px;
    padding: 0% 0px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;">
              <div style="width:170px; padding:5% ; display:flex ;align-items:center;">
                <a class="linkk"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
                  target="_blank">Book Tickets </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container" v-else>
      <img class="imge" src="@/assets/images/speaker/satyanshu.png" style="height: 280px; width:280px ;">
      <div class="info">
        Satyanshu is a National Award-winning filmmaker,
        writer and professor of cinema. His debut feature film,
        Chintu Ka Birthday, released in 2020 on ZEE5 to widely

        positive reception by critics and audiences alike.

        He started his professional journey by writing poems for Vikramaditya Motwane's Udaan,
        produced by Anurag Kashyap. Satyanshu has also written lyrics for Amit V. Masurkar's Sulemani Keeda and Vinod
        Chopra Films'
        Ferrari Ki Sawaari. His directorial debut was a Kashmiri short film Tamaash, which won several awards at
        different
        film festivals,
        including a National Award. In addition to writing and directing, Satyanshu has conducted screenwriting courses
        at
        Anupam Kher's 'Actor Prepares' as well as workshops across India.
        Satyanshu has designed and mentored both seasons of AIB's 'First Draft' screenwriter residency programme. During
        the COVID-19 pandemic, he launched a fundraising initiative by conducting online lectures on cinema. Satyanshu
        has
        also been a creative consultant with Sony LIV across several projects. He is currently working on the recently
        announced third season of AIB's 'First Draft' programme. Most recently, Satyanshu co-directed the Sony LIV
        series
        Jehanabad - Of Love & War, which was well received by both critics and audiences alike. He is also developing a
        series for Vikramaditya Motwane, and is simultaneously developing his original series and feature ideas.
        He is also consulting on several projects across formats.
      </div>
      <div class="talk_butto">
        <div class="but">
          <a class="linkk"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
            target="_blank" style="display: flex ; justify-content: center;">Book Tickets </a>

        </div>
      </div>
    </div>


    <div :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']"
      v-if="this.screenWidth > 1000">
      <div class=" cont">
        <div class="graphi">
          <img class="img" src="@/assets/images/speaker/pankajh.png"
            style="height: 380px; width: 1200px;margin-bottom: -1rem;">

        </div>

        <div class="abou">

          <div class="text" style="color: aliceblue;">
            Pankaj Jha, a versatile artist with a career spanning over two decades,

            has captivated audiences across film, theater, and literature.
            As an alumnus of the National School of Drama, Pankaj's nuanced performances
            in acclaimed films like "Monsoon Wedding," "Black Friday," and "Gulaal" have
            earned him widespread recognition. Beyond acting, his artistic talents extend
            to painting and poetry, showcased in six solo exhibitions and poignant
            literary works. Pankaj's recent portrayal in "Panchayat 2" as Vidhayak Ji has
            further cemented his reputation as a talented and versatile artist.
          </div>
          <div class="flexbutton">
            <div style="     background-color: #B50000; color: white;width: 130px;
    height: 42px;
    padding: 0% 0px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;">
              <div style="width:170px; padding:5% ; display:flex ;align-items:center;">
                <a class="linkk"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
                  target="_blank">Book Tickets </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <img class="imge" src="@/assets/images/speaker/pankajh.png" style="height: 280px; width:390px ;">
      <div class="info">
        Satyanshu is a National Award-winning filmmaker,
        writer and professor of cinema. His debut feature film,
        Chintu Ka Birthday, released in 2020 on ZEE5 to widely

        positive reception by critics and audiences alike.

        He started his professional journey by writing poems for Vikramaditya Motwane's Udaan,
        produced by Anurag Kashyap. Satyanshu has also written lyrics for Amit V. Masurkar's Sulemani Keeda and Vinod
        Chopra Films'
        Ferrari Ki Sawaari. His directorial debut was a Kashmiri short film Tamaash, which won several awards at
        different
        film festivals,
        including a National Award. In addition to writing and directing, Satyanshu has conducted screenwriting courses
        at
        Anupam Kher's 'Actor Prepares' as well as workshops across India.
        Satyanshu has designed and mentored both seasons of AIB's 'First
        Draft' screenwriter residency programme. During the COVID-19 pandemic, he launched a fundraising initiative by
        conducting online lectures on cinema. Satyanshu has also been a creative consultant with Sony LIV across several
        projects. He is currently working on the recently announced third season of AIB's 'First Draft' programme. Most
        recently, Satyanshu co-directed the Sony LIV series Jehanabad - Of Love & War, which was well received by both
        critics and audiences alike. He is also developing a series for Vikramaditya Motwane, and is simultaneously
        developing his original series and feature ideas.
        He is also consulting on several projects across formats.
      </div>
      <div class="talk_butto">
        <div class="but">
          <a class="linkk"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
            target="_blank" style="display: flex ; justify-content: center; flex-direction: row;">Book Tickets</a>
        </div>
      </div>
    </div>



    <div :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']"
      v-if="this.screenWidth > 1000">
      <div class=" cont">
        <div class="graphi">
          <img class="img" src="@/assets/images/speaker/arsh.png" style=" margin-bottom: -3rem; margin-left: 3rem">

        </div>

        <div class="abou">

          <div class="text" style="color: aliceblue;">
            Arsh Goyal is a visionary tech leader and educator.
            Currently a Senior Software Engineer at Samsung India and a former Data
            Scientist at ISRO, Arsh seamlessly blends his technical expertise with a
            deep passion for teaching. Through platforms like CodeChef and Unacademy,
            he continues to share his insights, nurturing the next generation of innovators and problem-solvers.
            With over 100K subscribers on his YouTube channel and a strong social media presence, Arsh inspires and
            empowers learners to unlock their full potential in the tech world
          </div>
          <div class="flexbutton">
            <div style="     background-color: #B50000; color: white;width: 130px;
    height: 42px;
    padding: 0% 0px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;">
              <div style="width:170px; padding:5% ; display:flex ;align-items:center;">
                <a class="linkk"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
                  target="_blank">Book Tickets </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container" v-else>
      <img class="imge" src="@/assets/images/speaker/arsh.png" style="  height: 250px;width: 240px;">
      <div class="info">
        Arsh Goyal is a visionary tech leader and educator. Currently a Senior Software Engineer at Samsung India and a
        former Data Scientist at ISRO, Arsh seamlessly blends his technical expertise with a deep passion for teaching.
        Through platforms like CodeChef and Unacademy, he continues to share his insights, nurturing the next generation
        of innovators and problem-solvers. With over 100K subscribers on his YouTube channel and a strong social media
        presence, Arsh inspires and empowers learners to unlock their full potential in the tech world
      </div>
      <div class="talk_butto">
        <div class="but">
          <a class="linkk"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
            target="_blank" style="display: flex ; justify-content: center;">Book Tickets </a>

        </div>
      </div>

    </div>


    <div :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']"
      v-if="this.screenWidth > 1000">
      <div class=" cont">
        <div class="graphi">
          <img class="img" src="@/assets/images/speaker/prinyanka.png" style=" margin-bottom: -4rem; margin-left: 3rem">

        </div>

        <div class="abou">

          <div class="text" style="color: aliceblue;">
            Priyanka Tripathi is an Associate Professor of English and former HOD of Humanities and Social Sciences at
            IIT
            Patna.She is also the Co-Executive Editor of the Journal of International Women’s Studies (published by
            Bridgewater State University). She has been awarded the prestigious Charles Wallace India Trust Visiting
            Fellowship (2024-25) at the School of History, University of Leeds. She was also awarded the IPD Visiting
            Research Fellowship (2022-23) at IASH, University of Edinburgh. She has published extensively and works in
            the
            areas of Gender Studies, South Asian Fiction, GeoHumanities, and Graphic Novels.
          </div>
          <div class="flexbutton">
            <div style="     background-color: #B50000; color: white;width: 130px;
    height: 42px;
    padding: 0% 0px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;">
              <div style="width:170px; padding:5% ; display:flex ;align-items:center;">
                <a class="linkk"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
                  target="_blank">Book Tickets </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container" v-else style="">
      <img class="imge" src="@/assets/images/speaker/prinyanka.png" style=" height: 250px;width: 260px;">
      <div class="info">
        Priyanka Tripathi is an Associate Professor of English and former HOD of Humanities and Social Sciences at IIT
        Patna.She is also the Co-Executive Editor of the Journal of International Women’s Studies (published by
        Bridgewater State University). She has been awarded the prestigious Charles Wallace India Trust Visiting
        Fellowship (2024-25) at the School of History,
        University of Leeds. She was also awarded the IPD Visiting Research Fellowship (2022-23) at IASH, University
        of
        Edinburgh. She has published extensively and works in the areas of Gender Studies, South Asian Fiction,
        GeoHumanities, and Graphic Novels. </div>
      <div class="talk_butto">
        <div class="but">
          <a class="linkk"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
            target="_blank" style="display: flex ; justify-content: center;">Book Tickets </a>

        </div>
      </div>

    </div>






    <div :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']"
      v-if="this.screenWidth > 1000">
      <div class=" cont">
        <div class="graphi">
          <img class="img" src="@/assets/images/speaker/swat.png">

        </div>

        <div class="abou">

          <div class="text" style="color: aliceblue;">
            Swastika Rajput is a storyteller who turned her passion for writing and the arts into a powerful journey
            of
            self-discovery. Trained as a nurse, she found a new path through photography, capturing authentic emotions
            and
            building an inclusive community of nearly 470k Instagram followers and 350k YouTube subscribers where her
            voice echoes. She has embraced her journey of coming out as a queer despite her average circumstances. She
            faced setbacks but stayed true to her heart, ultimately earning a standing ovation from 600 people,
            proving
            that perseverance and passion lead to success.
          </div>
          <div class="flexbutton">
            <div style="     background-color: #B50000; color: white;width: 130px;
    height: 42px;
    padding: 0% 0px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;">
              <div style="width:170px; padding:5% ; display:flex ;align-items:center;">
                <a class="linkk"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
                  target="_blank">Book Tickets </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container" v-else>
      <img class="imge" src="@/assets/images/speaker/swat.png" style=" width: 280px;">
      <div class="info">
        Swastika Rajput is a storyteller who turned her passion for writing and the arts into a powerful journey of
        self-discovery. Trained as a nurse, she found a new path through photography, capturing authentic emotions and
        building an inclusive community of nearly 470k Instagram followers and 350k YouTube subscribers where her
        voice
        echoes. She has embraced her journey of coming out as a queer despite her average circumstances. She faced
        setbacks but stayed true to her heart, ultimately earning a standing ovation from 600 people, proving that
        perseverance and passion lead to success.
      </div>
      <div class="talk_butto">
        <div class="but">
          <a class="linkk"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
            target="_blank" style="display: flex ; justify-content: center;">Book Tickets </a>

        </div>
      </div>

    </div>


    <div :class="['content-wrapper', 'full', this.screenWidth > 1000 ? 'web' : 'mobile']"
      v-if="this.screenWidth > 1000">
      <div class=" cont">
        <div class="graphi">
          <img class="img" src="@/assets/images/speaker/manu.png" style="width: 680px;">

        </div>

        <div class="abou">

          <div class="text" style="color: aliceblue;">
            Manushi Ashok Jain is an Architect and Urban Designer, known for her out of the box designs promoting
            sustainability throughout the world. She is the Co-founder and Director of Sponge Collaborative, an
            interdisciplinary strategic planning and design firm that is looking to find a perfect balance between
            modernism and regionalism. She has worked on projects throughout the world and has received many
            international
            awards, including the Creatives Theme Design Medal Award by A+D magazine. She also made it to the Forbes
            30
            under 30 young leaders' list in 2022. She continues to strive harder in her field and is all set to bring
            her
            unique perspective on the table.
          </div>
          <div class="flexbutton">
            <div style="     background-color: #B50000; color: white;width: 130px;
    height: 42px;
    padding: 0% 0px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;">
              <div style="width:170px; padding:5% ; display:flex ;align-items:center;">
                <a class="linkk"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
                  target="_blank">Book Tickets </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container" v-else>
      <img class="imge" src="@/assets/images/speaker/manu.png" style="width: 250px;">
      <div class="info">
        Manushi Ashok Jain is an Architect and Urban Designer, known for her out of the box designs promoting
        sustainability throughout the world. She is the Co-founder and Director of Sponge Collaborative, an
        interdisciplinary strategic planning and design firm that is looking to find a perfect balance between
        modernism
        and regionalism. She has worked on projects throughout the world and has received many international awards,
        including the Creatives Theme Design Medal Award by A+D magazine. She also made it to the Forbes 30 under 30
        young
        leaders' list in 2022. She continues to strive harder in her field and is all set to bring her unique
        perspective
        on the table. </div>
      <div class="talk_butto">
        <div class="but">
          <a class="linkk"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8tmLufQOrw5wfktCwsWA9A-jz-Kw4SwP4lGgv44-g2QClvw/viewform"
            target="_blank" style="display: flex ; justify-content: center;">Book Tickets </a>

        </div>
      </div>

    </div>
  </div>


  <Footer />
</template>

<script scoped>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import HomeNav from '@/components/Home.Nav.vue'
import Footer from '@/components/Footer.vue'
import BackButton from '@/components/BackButton.vue'
import Speakersectio from '@/components/Speakersectio.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Footer,
    HomeNav,
    BackButton,
    Speakersectio,
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

<style scoped>
@import '@/assets/css/speaker.css';

.content-wrapper {
  background-image: url("../assets/images/spekerbg.jpg");
  background-size: contain;
  /* or 'cover' depending on your needs */
  background-repeat: no-repeat;
  /* background-position: center center; */

  /* height:100%; */

  /* padding: 0; */
  /* height: vh; */
  /* width: 40vw; */
  height: 100vh;
  width: 100vw;


  background-position: center center;


}
</style>

<template>
  <!-- <Nav :open_button_color="this.showWebView ? 'white' : 'white'" open_button_style="icon" /> -->
  <!-- <BackButton /> -->

  <div :class="['ticketbooking-wrapper', !this.showWebView ? 'mobile' : 'web']">
    <div class="banner web" v-if="this.screenWidth > 460"></div>
    <div class="banner mobile" v-if="this.screenWidth <= 460"></div>
    <div class="book-tickets">Book <br/>Tickets</div>
    <div :class="['tickets', !this.showWebView ? 'mobile' : 'web']">
      <div class="event" v-for="(session,index) in sessions" :key="index" @click="this.configureBookingModal(session)">
        <div class="hash">#</div><div class="number">{{ session.Session }}</div>
        <div class="session">session</div>
      </div>
    </div>
  </div>

  <TicketModal v-if="this.showBookingModal" :showModal="this.showBookingModal" :sessionDetails="this.selectedSession" @closeBookingModal="this.closeAllModals" />
</template>

<script>
// import Nav from '@/components/Nav.vue'
// import BackButton from '@/components/BackButton.vue'
import TicketModal from '@/components/TicketBookingModal.vue'
export default {
  name: "TicketBookingView",
  components:{
    // Nav,
    // BackButton,
    TicketModal
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showWebView: window.innerWidth >= 900,
      selectedSession: null,
      showBookingModal: false,
      sessions:[
        {
          Session:"1",
          Date: "Sept 3, 2022",
          Speakers: [
            {
              Name: "Javed Khatri",
              Time: "12:00PM - 12:30PM",
              Path: require('@/assets/current-event/speaker-images/javed.jpeg')
            },
            {
              Name: "Phani Tetali",
              Time: "12:45PM - 1:15PM",
              Path: require('@/assets/current-event/speaker-images/phani.jpg')
            },
            {
              Name: "Narayan Mahadevan",
              Time: "1:30 PM - 2:00 PM",
              Path: require('@/assets/current-event/speaker-images/Narayan.jpg')
            }
          ],
          Link:"https://forms.gle/3M1MB8yPq7pRMxxC7",
          Closed: false,
        },
        {
          Session:"2",
          Date: "Sept 4, 2022",
          Speakers: [
            {
              Name: "Sriparna Saha",
              Time: "11:00 AM - 11:30 AM",
              Path: require('@/assets/current-event/speaker-images/sriparna.jpg')
            },
            {
              Name: "Alakh Pandey",
              Time: "11:45 AM - 12:15 PM",
              Path: require('@/assets/current-event/speaker-images/alakh.png')
            },
          ],
          Link:"https://forms.gle/4VMLrdTFWeh3kfwb8",
          Closed: true,
        },
        {
          Session:"3",
          Date: "Sept 4, 2022",
          Speakers: [
            {
              Name: "Klanz",
              Time: "3:00 PM - 3:30 PM",
              Path: require('@/assets/current-event/speaker-images/klanz.jpg')
            },
            {
              Name: "Sridharan Devrajan",
              Time: "3:45 PM - 4:15 PM",
              Path: require('@/assets/current-event/speaker-images/sridharan.jpg')
            }
          ],
          Link:"https://forms.gle/c3rcop1Gab4isww68",
          Closed: false,
        }
      ]
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.showWebView = window.innerWidth >= 900
    },
    configureBookingModal(session) {
      this.selectedSession = session
      this.showBookingModal = true
    },
    closeAllModals() {
      this.showBookingModal = false
    },
    closeAllModalsOnKeyPress(e) {
      if (e.key === "Escape") {
        this.closeAllModals()
      }
    }
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
@import '@/assets/css/ticket_booking.css';
@import '@/assets/css/ticket_booking.mobile.css';
</style>

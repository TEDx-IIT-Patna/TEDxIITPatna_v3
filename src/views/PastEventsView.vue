<template>
  <NewNav />

  <div class="img">
    <img
      class="graphic"
      src="../assets/images/tedxiitpatna_logo-1W.png"
      style="height: 70px; margin-top: 20px; margin-left: 20px"
    />
  </div>

  <HomeNav class="thisHomeNav" />

  <section class="wrapper">
    <div class="pastevents-wrapper">
      <div class="text">Past Events</div>
      <div class="event-div-1">
        <div class="event">
          <div class="thumbnail">
            <a href="/pastevents/2023">
              <img src="../assets/images/Rectangle-15.png"
            /></a>
          </div>
          <div class="year">2023</div>
        </div>
        <div class="event">
          <div class="thumbnail">
            <a href="/pastevents/2022"
              ><img src="../assets/images/Rectangle-12.png"
            /></a>
          </div>
          <div class="year">2022</div>
        </div>
      </div>

      <div class="event-div-2">
        <div class="event">
          <div class="thumbnail">
            <a href="/pastevents/2021"
              ><img src="../assets/images/Rectangle-9.png"
            /></a>
          </div>
          <div class="year">2021</div>
        </div>
        <div class="event">
          <div class="thumbnail">
            <a href="/pastevents/2019"
              ><img src="../assets/images/Rectangle-10.png"
            /></a>
          </div>
          <div class="year">2019</div>
        </div>
        <div class="event">
          <div class="thumbnail">
            <a href="/pastevents/2016"
              ><img src="../assets/images/Rectangle-11.png"
            /></a>
          </div>
          <div class="year">2016</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewNav from "@/components/NewNav.vue";
import HomeNav from "@/components/Home.Nav.vue";

export default {
  components: {
    HomeNav,
    NewNav,
  },
};
</script>

<style scoped>
@import "../assets/css/past_events_new.css";

.thisNav {
  display: none;
}

.thisHomeNav {
  left: 31vw;
  bottom: 63vh;
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

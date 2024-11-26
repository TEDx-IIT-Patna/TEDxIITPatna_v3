<template>
  <span
    class="show-panel"
    style="
      color: white;
      background-color: transparent;
      transform: translate(-50%, 0px);
      opacity: 1;
    "
  >
    <i class="gg-menu-left-alt" @click="navOpen = true"></i>
  </span>

  <nav class="nav" :class="{ hidden: !navOpen, show: navOpen }">
    <div class="close" @click="navOpen = false">Close</div>
    <div class="links">
      <NavLinks />
      <router-link to="/merch" class="buy">Buy</router-link>
    </div>
    <img
      src="../assets/images/Flower-cropped.png"
      class="flower"
      style="opacity: 0.7"
    />
  </nav>
</template>

<script>
import NavLinks from "./NavLinks.vue";

export default {
  components: {
    NavLinks,
  },

  data() {
    return {
      navOpen: false,
    };
  },
};
</script>

<style scoped>
@import "../assets/css/newNav.css";

.links .buy {
  color: #eb0028;
}
</style>

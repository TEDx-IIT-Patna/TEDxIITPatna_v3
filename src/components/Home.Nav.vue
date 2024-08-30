<!--
    Special nav element for web view of homepage.
    The vertical navbar in homepage.
-->
<!--
    Usage:
    <template>
        ...
        <HomeNav />
        ...
    </template>
    <script scoped>
        ...
        import HomeNav from '@/components/Home.Nav.vue'
        ...
        export default {
            ...
            components: {
                ...
                HomeNav,
                ...
            }
        }
    </script>
-->

<template>
  <nav class="navbar-web">
    <NavLinks />
    <div>
      <router-link to="/merch"><Button>Buy</Button></router-link>
    </div>
  </nav>
</template>

<script>
import NavLinks from "@/components/NavLinks.vue";

export default {
  name: "Home.Nav",
  components: {
    NavLinks,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import "@/assets/css/home.nav.css";
</style>

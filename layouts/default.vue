<template>
  <div>
    <the-header @sidenavToggle="displaySideNav = !displaySideNav"></the-header>
    <the-sidenav :show="displaySideNav"></the-sidenav>
    <Nuxt />
  </div>
</template>
<script>
import TheHeader from "@/components/navigation/TheHeader";
import TheSidenav from "@/components/navigation/TheSidenav";
export default {
  components: {
    TheSidenav,
    TheHeader,
  },
  data() {
    return {
      displaySideNav: false,
    };
  },
};
</script>
<style>
html {
  font-family: "Langar", cursive;
}
body {
  margin: 0;
}
</style>

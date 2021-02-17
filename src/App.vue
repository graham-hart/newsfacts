<template>
  <v-app>
    <v-main>
      <NavBar appname="Newsfacts" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",

  components: {
    NavBar,
  },

  // data() {
  //   return {};
  // },
};
</script>
<style>
@font-face {
  font-family: NotoSans-Black;
  src: url("./assets/fonts/NotoSansSC-Black.otf");
}
h1 {
  font-family: NotoSans-Black !important;
}
</style>

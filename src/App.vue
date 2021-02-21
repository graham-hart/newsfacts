<template>
  <v-app>
    <v-main>
      <NavBar appname="Newsfacts" />
      <router-view id="page" />
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
  created() {
    this.$store.commit("refreshData");
  },
};
</script>
<style>
@font-face {
  font-family: NotoSans-Black;
  src: url("./assets/fonts/NotoSansSC-Black.otf");
}
@font-face {
  font-family: cascadia-code;
  src: url("./assets/fonts/CascadiaCode.ttf");
}
h1 {
  font-family: NotoSans-Black !important;
}
.page-title {
  text-align: center;
}
#page {
  background: linear-gradient(160deg, #f4f4f4 40%, #fafafa 40%);
  height: 100%;
}
</style>

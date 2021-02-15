<template>
  <v-app>
    <v-main>
      <NavBar appname="test" />
      <Home v-if="display_components.includes('Home')" />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    Home,
    NavBar,
  },

  data() {
    return {
      display_components: ["Home"],
    };
  },
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

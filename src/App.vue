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
import api from "./scripts/data.js";
export default {
  name: "App",

  components: {
    NavBar,
  },
  mounted() {
    api.refresh_data();
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
@font-face {
  font-family: cascadia-code;
  src: url("./assets/fonts/CascadiaCode.ttf");
}
h1 {
  font-family: NotoSans-Black !important;
}
div#site {
  background-color: #ff0000;
  width: 40%;
  margin: 100px auto;
}
#site p {
  font-family: Cascadia-code;
}
.sitepagelink {
  cursor: pointer;
}
.searchbar {
  padding: 10px;
  border: 1px solid black;
  margin-top: 20px;
  width: 25%;
}
.page-title {
  text-align: center;
}
</style>

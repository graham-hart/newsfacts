<template>
  <v-app>
    <v-main>
      <div id="container">
        <NavBar appname="Newsfacts" id="navbar" />
        <router-view id="page" />
      </div>
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
body,
html {
  overflow: overlay;
  cursor: auto;
  width: 100%;
}
#container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column;
}
@font-face {
  font-family: NotoSans-Black;
  src: url("./assets/fonts/NotoSansSC-Black.otf");
}
.page-title {
  text-align: center;
  margin-top: 20px;
  font-family: NotoSans-Black;
}
#navbar {
  flex: 0 1 auto;
}
#page {
  background: linear-gradient(160deg, #f1f1f1 40%, #fafafa 40%);
  flex: 1 1 auto;
}
::-webkit-scrollbar {
  background-color: #fafafa11;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #a1a1a1aa;
}
</style>

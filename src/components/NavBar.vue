<template>
  <div id="app">
    <v-toolbar id="navbar" app color="#330066" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title id="appname">{{ appname }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span :key="item.link" v-for="item in items" class="nav-elt">
        <router-link
          flat
          active-class="nav-elt-active"
          :to="item.link"
          tag="span"
          exact
        >
          {{ item.title }}
        </router-link>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    appname: String,
  },
  data() {
    return {
      items: [
        { title: "Home", link: "/" },
        { title: "Search", link: "/search" },
      ],
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: NotoSans-Black;
  src: url("../assets/fonts/NotoSansSC-Black.otf");
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none !important;
}
#appname {
  font-size: 30px !important;
  font-family: NotoSans-Black;
}
.nav-elt {
  padding: 15px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 25px;
  margin: 0px 10px;
  color: #c1c1c1;
  font-weight: bold;
}
.nav-elt-active {
  color: #f1f1f1;
}
button {
  font-family: cascadia-code !important;
}
</style>

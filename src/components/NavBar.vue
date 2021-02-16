<template>
  <div id="app">
    <v-toolbar id="navbar" app color="#330066" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{ appname }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span :key="item.name" v-for="item in items">
        <v-btn flat :to="item.link">{{ item.title }}</v-btn>
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
      drawer: false,
      items: [
        { title: "Home", link: "home" },
        // { title: "Login", link: "login" },
        { title: "Search", link: "search" },
        // { title: "Support", link: "support" },
      ],
    };
  },
};
</script>

<style>
@font-face {
  font-family: cascadia-code;
  src: url("../assets/fonts/CascadiaCode.ttf");
}
#app {
  font-family: cascadia-code, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none !important;
}
</style>

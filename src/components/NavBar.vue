<template>
  <div id="app">
    <v-toolbar id="navbar" app color="#330066" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{ appname }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span :key="item.link" v-for="item in items">
        <v-btn flat :to="{ name: item.title }">{{ item.title }}</v-btn>
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
        { title: "Home", link: "" },
        { title: "Search", link: "search" },
      ],
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: cascadia-code;
  src: url("../assets/fonts/CascadiaCode.ttf");
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}
button {
  font-family: cascadia-code !important;
}
</style>

<template>
  <div id="app">
    <v-toolbar app color="#550099" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-bind:key="item.name" v-for="item in items">
        <v-btn flat>{{ item.title }}</v-btn>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      appTitle: "Newsfacts",
      drawer: false,
      items: [
        { title: "Home" },
        { title: "Login" },
        { title: "Search" },
        { title: "Support" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

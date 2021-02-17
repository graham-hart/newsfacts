<template>
  <div id="app">
    <v-toolbar id="navbar" app color="#330066" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title id="appname">{{ appname }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <router-link
          :key="item.link"
          v-for="item in items"
          class="nav-elt"
          active-class=""
          tag="span"
          :to="item.link"
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
  padding: 5px 10px;
  font-family: Roboto;
  font-size: 25px;
  color: #e1e1e1;
  cursor: pointer;
  margin: 0px 5px;
  font-weight: bold;
}
button {
  font-family: cascadia-code !important;
}
</style>

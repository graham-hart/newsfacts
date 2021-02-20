<template>
  <div id="bar">
    <v-toolbar id="navbar" app color="#330066" dark>
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
          {{ item.title.toUpperCase() }}
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
        { title: "Sites", link: "/sites" },
      ],
    };
  },
};
</script>

<style scoped>
#appname {
  font-size: 30px !important;
  font-family: NotoSans-Black;
}
.nav-elt {
  padding: 5px 10px;
  font-family: cascadia-code;
  font-size: 25px;
  color: #e1e1e1;
  cursor: pointer;
  margin: 0px 5px;
  font-weight: bold;
}
</style>

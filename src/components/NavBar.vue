<template>
  <div id="bar">
    <v-toolbar id="navbar" app color="#5327a8" dark>
      <router-link to="/" id="appname">{{ appname }}</router-link>
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
        { title: "Login", link: "/login" },
      ],
    };
  },
};
</script>

<style scoped>
#appname {
  font-size: 30px !important;
  font-family: NotoSans-Black;
  text-decoration: none;
  color: #fafafa;
}
.nav-elt {
  padding: 5px 10px;
  font-family: NotoSans-Black;
  font-size: 25px;
  color: #e1e1e1;
  cursor: pointer;
  margin: 0px 5px;
  font-weight: bold;
}
</style>

<template>
  <div id="bar">
    <v-toolbar id="navbar" color="#5327a8" dark>
      <router-link to="/" id="appname">{{ appname }}</router-link>
      <v-spacer></v-spacer>
      <span :key="item.title" v-for="item in items">
        <router-link
          v-if="typeof item.action == 'string'"
          class="nav-elt"
          active-class=""
          tag="span"
          :to="item.action"
        >
          {{ item.title.toUpperCase() }}
        </router-link>
        <span v-else class="nav-elt" @click="item.action()">
          {{ item.title.toUpperCase() }}
        </span>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    appname: String,
    items: Array,
  },
};
</script>

<style scoped>
#appname {
  font-size: 2rem !important;
  font-family: "Noto Sans SC";
  text-transform: lowercase;
  text-decoration: none;
  color: #fafafa;
}
.nav-elt {
  padding: 5px 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  font-size: 1.5rem;
  color: #e1e1e1;
  cursor: pointer;
  margin: 0px 5px;
}
</style>

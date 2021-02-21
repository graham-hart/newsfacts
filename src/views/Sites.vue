<template>
  <div id="app">
    <h1 class="page-title">Sites</h1>
    <refresh id="refresh" />
    <router-link
      tag="div"
      class="site"
      :key="site.name"
      v-for="site in sites"
      :to="`/sites/${site.route}`"
      ><h1>{{ site.name }}</h1></router-link
    >
  </div>
</template>

<script>
import Refresh from "../components/Refresh";
export default {
  name: "Sites",
  components: {
    Refresh,
  },
  computed: {
    sites() {
      return this.$store.state.newssite;
    },
    votes() {
      return this.$store.state.vote;
    },
    dimensions() {
      return this.$store.state.dimension;
    },
    people() {
      return this.$store.state.person;
    },
  },
};
</script>

<style scoped>
* {
  --site-width: 20%;
  --site-height: auto;
  --expand-change: 1.5%;
}
.site {
  width: var(--site-width);
  height: var(--site-height);
  background-color: #83bbfd;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.35);
}
.site:hover {
  width: calc(var(--site-width) + var(--expand-change));
  background-color: #8dabec;
  box-shadow: 0px 5px 12px -5px rgba(0, 0, 0, 0.76);
  cursor: pointer;
}
</style>

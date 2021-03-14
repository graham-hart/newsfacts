<template>
  <div id="app">
    <h1 class="page-title">Sites</h1>
    <input
      type="text"
      v-model="searchVal"
      id="searchInput"
      @change="search()"
    />
    <div id="sites" class="flex-column">
      <span v-for="site in sites" :key="site.name">
        <router-link
          tag="div"
          class="site"
          v-if="site.name.toLowerCase().includes(searchVal.toLowerCase())"
          :to="`/sites/${site.route}`"
          ><h1>{{ site.name }}</h1></router-link
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Sites",
  components: {},
  data() {
    return { searchVal: "", shownSites: this.sites };
  },
  computed: {
    sites() {
      return this.$store.state.newssite;
    },
    votes() {
      return this.$store.state.vote;
    },
    categories() {
      return this.$store.state.category;
    },
    people() {
      return this.$store.state.person;
    },
  },
};
</script>

<style scoped>
* {
  --site-width: 45%;
  --site-height: auto;
  --site-expand-change: 40px;
}
.site {
  width: var(--site-width);
  height: var(--site-height);
  background-color: #83bbfd;
  padding: 20px;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  margin: 20px auto;
  transition: width 0.15s ease, box-shadow 0.4s ease, background-color 0.2s ease;
}
.site:hover {
  width: calc(var(--site-width) + var(--site-expand-change));
  background-color: #8dabecaa;
  box-shadow: 0px 5px 12px -5px rgba(0, 0, 0, 0.76);
}
#sites {
  display: flex;
}
#searchInput {
  border: 2px solid grey;
  color: grey;
  padding: 20px;
  font-size: 2.5rem;
  width: 50%;
  height: 80px;
  margin: 50px auto;
  display: block;
  border-radius: 5px;
}
#searchInput:focus {
  outline: none;
}
</style>

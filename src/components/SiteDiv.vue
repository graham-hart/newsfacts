<template>
  <div id="app">
    <div id="site">
      <router-link
        class="sitepagelink"
        tag="h1"
        :to="`sites/${site.name.toLowerCase().replace(' ', '')}`"
        >{{ site != null ? site.name : "Loading..." }}</router-link
      >
      <p>Bias: {{ votes }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SiteDiv",
  components: {},
  props: {
    site: Object,
  },
  data() {
    return {
      votes: null,
      db_url: "http://localhost:3000",
    };
  },
  async mounted() {
    await this.getSiteData();
  },
  methods: {
    async getSiteData() {
      axios
        .get(`${this.db_url}/vote?newssite_id=eq.${this.site.newssite_id}`)
        .then((r) => {
          this.votes = r.data;
        });
    },
  },
};
</script>

<style scoped>
</style>

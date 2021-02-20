<template>
  <div id="app">
    <SiteDiv v-for="site in sites" :key="site.newssite_id" :newssite="site" />
  </div>
</template>

<script>
import SiteDiv from "../components/SiteDiv.vue";
import api from "../scripts/data.js";
export default {
  name: "Sites",
  components: {
    SiteDiv,
  },
  data() {
    return {
      sites: api.get_data("newssite"),
    };
  },
};
</script>

<style scoped>
</style>

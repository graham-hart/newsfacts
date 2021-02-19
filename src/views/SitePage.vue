<template>
  <div id="app">
    <!-- <h1 class="page-title">
      {{ site != null ? site.name : "Loading" }}
    </h1> -->
  </div>
</template>

<script>
import api from "../scripts/data.js";
export default {
  name: "SitePage",
  data() {
    return {
      votes: null,
      site: null,
    };
  },
  mounted() {
    this.votes = api.get_data("vote");
    this.site = api.get_data(
      "newssite",
      (s) => s.route == this.$route.params.site
    );
    setTimeout(console.log, 3000, [this.site]);
  },
};
</script>

<style scoped>
p.rating {
  background-color: #ff0000;
}
</style>

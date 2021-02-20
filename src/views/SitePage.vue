<template>
  <div id="app">
    <h1 class="page-title">
      {{ site != null ? site.name : "Loading" }}
    </h1>
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
    this.site = api.get_data(
      "newssite",
      (s) => s.route == this.$route.params.sitename
    )[0];
    this.votes = api.get_data(
      "vote",
      (v) => v.newssite_id == this.site.newssite_id
    );
    console.log(this.votes);
  },
};
</script>

<style scoped>
p.rating {
  background-color: #ff0000;
}
</style>

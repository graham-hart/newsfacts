<template>
  <div id="app">
    <h1 class="page-title" :key="site.name">
      {{ site != null ? site.name : "ERROR: SITE NOT FOUND" }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "SitePage",
  computed: {
    site() {
      return this.$store.state.newssite.filter(
        (r) => r.route == this.$route.params.site
      )[0];
    },
  },
};
</script>

<style scoped>
p.rating {
  background-color: #ff0000;
}
</style>

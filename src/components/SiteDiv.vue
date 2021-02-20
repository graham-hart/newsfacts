<template>
  <div id="site">
    <h1>{{ newssite.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "SiteDiv",
  props: {
    newssite: Object,
  },
};
</script>

<style scoped>
#site {
  background-color: red;
  width: 75%;
  margin: 20px auto;
  padding: 20px;
}
</style>

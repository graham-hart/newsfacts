<template>
  <div id="app">
    <h1 class="page-title">
      {{ site != null ? site.name : "Loading" }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "SitePage",
};
</script>

<style scoped>
p.rating {
  background-color: #ff0000;
}
</style>

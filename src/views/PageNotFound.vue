<template>
  <div id="app">
    <div class="text">
      <h1>ERROR 404: Page Not Found</h1>
      <p>Sorry, we can't find the page you were looking for.</p>
      <p>
        If you believe this to be an error,
        <router-link to="/contact">contact us</router-link>.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>
<style scoped>
.text {
  text-align: center;
  margin-top: 45vh;
}
</style>
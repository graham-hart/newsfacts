<template>
  <div id="app">
    <h2>{{ dimension.name }}</h2>
    <input type="range" id="vote" />
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return { vote: 0 };
  },
  props: {
    dimension: Object,
    site: Object,
  },
};
</script>
<style scoped>
#app {
  width: auto;
  margin: 5% 1%;
  background-color: white;
  flex-grow: 1;
  padding: 20px;
}
#vote {
  --margin-h: 1%;
  --margin-v: 1%;
  width: calc(100% - calc(var(--margin-h) * 2));
  margin: var(--margin-v) var(--margin-h);
}
h2 {
  font-weight: 800;
}
</style>
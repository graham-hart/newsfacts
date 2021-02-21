<template>
  <div id="app">
    <p @click="refreshData()">
      {{ sites }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Sites",
  components: {},
  methods: {},
  computed: {
    sites() {
      return this.$store.state.newssite;
    },
    votes() {
      return this.$store.state.vote;
    },
    dimensions() {
      return this.$store.state.dimension;
    },
    people() {
      return this.$store.state.person;
    },
  },
};
</script>

<style scoped>
</style>

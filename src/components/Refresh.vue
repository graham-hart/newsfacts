<template>
  <v-btn id="refresh" @click="refreshData">Refresh </v-btn>
</template>
<script>
export default {
  name: "Refresh",
  methods: {
    refreshData() {
      this.$store.commit("refreshData");
    },
  },
};
</script>
<style scoped>
#refresh {
  position: absolute;
  right: 20px;
  top: 80px;
  color: var(--button-text-col);
  background-color: var(--button-col);
  font-weight: bold;
  font-family: monospace;
}
</style>
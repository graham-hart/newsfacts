<template>
  <v-btn id="refresh" color="#330055" @click="refreshData">Refresh </v-btn>
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
  color: #fafafa;
  font-family: monospace;
}
</style>
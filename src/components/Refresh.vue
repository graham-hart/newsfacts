<template>
  <v-btn flat id="refresh" color="#330055" @click="refreshData">Refresh </v-btn>
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
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: #fafafa;
  font-family: cascadia-code;
}
</style>
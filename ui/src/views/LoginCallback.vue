<template>
  <div id="app"></div>
</template>
<script>
import api from "@/scripts/api.js";
export default {
  name: "",
  mounted() {
    (async () => {
      while (this.$auth.loading) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      this.$router.push({
        name: "Home",
      });
      console.log(this.$auth);
      if (
        !this.$store.state.person.filter(
          (p) => p.email == this.$auth.user.email
        ).length
      ) {
        api.post(this.$store, "person", {
          email: this.$auth.user.email,
          name: this.$auth.user.name,
        });
      }
    })();
  },
};
</script>
<style scoped>
</style>
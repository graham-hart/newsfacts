<template>
  <v-app>
    <v-main id="app">
      <NavBar :appname="`Newsfacts`" :items="navBarLinks" id="navbar" />
      <router-view id="page" fill-height />
      <refresh v-if="canRefresh" />
    </v-main>
  </v-app>
</template>

<script>
import Refresh from "@/components/Refresh.vue";
import NavBar from "@/components/NavBar";
export default {
  name: "App",

  components: {
    NavBar,
    Refresh,
  },
  created() {
    this.$store.commit("refreshData");
  },
  computed: {
    canRefresh() {
      for (let url of ["Sites", "Site"]) {
        if (this.$route.name.includes(url)) {
          return true;
        }
      }
      return false;
    },
    user() {
      return this.$auth.user || { name: "LOGGED OUT" };
    },
    navBarLinks() {
      let links = [
        { title: "Home", link: "/" },
        { title: "Sites", link: "/sites" },
      ];
      if (!this.$auth.isAuthenticated && !this.$auth.loading) {
        links.push({ title: "Login", link: "/login" });
      } else {
        links.push({ title: "Logout", link: "/login" });
      }
      return links;
    },
  },
};
</script>
<style>
body,
html {
  position: relative;
  overflow: overlay;
  cursor: auto;
  width: 100%;
  background: linear-gradient(160deg, #f1f1f1 40%, #fafafa 40%);
  background-attachment: fixed;
}
#app {
  background-color: transparent;
}
.page-title {
  text-align: center;
  margin-top: 20px;
  font-family: "Noto Sans SC";
  font-weight: 700;
}
#page {
  background: transparent;
}
::-webkit-scrollbar {
  background-color: #fafafa11;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #a1a1a1aa;
}
</style>

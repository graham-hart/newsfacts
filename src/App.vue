<template>
  <v-app>
    <v-main id="app" style="flex-grow: 1">
      <NavBar
        :appname="`Newsfacts`"
        :items="navBarLinks"
        id="navbar"
        class="noselect"
      />
      <router-view id="page" />
      <refresh v-if="canRefresh" />
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Refresh from "@/components/Refresh";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "App",

  components: {
    NavBar,
    Refresh,
    Footer,
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
/* 
==========
FOR THIS PAGE
==========
*/
body,
html {
  position: relative;
  overflow: overlay;
  cursor: auto;
  width: 100%;
  background: linear-gradient(160deg, #f1f1f1 40%, #fafafa 40%);
  background-attachment: fixed;
}
#page {
  background: transparent;
  min-height: 100vh;
}
#app {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
/* 
==========
GLOBAL STYLING
==========
*/
.page-title {
  text-align: center;
  /* margin-top: 20px; */
  font-family: "Noto Sans SC";
  font-weight: 700;
}
::-webkit-scrollbar {
  background-color: #fafafa11;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #a1a1a1aa;
}
.noselect,
br {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
</style>

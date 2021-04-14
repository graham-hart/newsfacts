<template>
  <v-app>
    <v-main id="app" style="flex-grow: 1">
      <NavBar :appname="`Newsfacts`" :items="navBarButtons" />
      <router-view id="page" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",

  components: {
    NavBar,
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
      return (
        this.$store.state.person.filter(
          (p) => p.email == this.$auth.user.email
        )[0] || { name: "ANONYMOUS" }
      );
    },
    navBarButtons() {
      let buttons = [
        { title: "Home", action: "/" },
        { title: "About", action: "/about" },
      ];
      if (
        (!this.$auth.isAuthenticated && !this.$auth.loading) ||
        this.user.name == "ANONYMOUS"
      ) {
        buttons.push({
          title: "Login",
          action: this.$auth.loginWithRedirect,
        });
      } else if (!this.$auth.loading) {
        buttons.push({ title: "Logout", action: this.$auth.logout });
      }
      return buttons;
    },
  },
};
</script>
<style>
/* 
==========
GLOBAL CSS VARS
==========
*/
:root {
  --main-1: rgb(122, 64, 214); /* MAIN1 */
  --main-2: rgb(89, 44, 194); /* MAIN2 */
  --light-main-1: rgb(95, 169, 212); /* LIGHT MAIN (Button click etc)*/
  --second-1: rgb(131, 184, 253); /* SECONDARY1 */
  --second-2: rgb(178, 222, 243); /* SECONDARY2 */
  --link-col: rgb(25, 182, 210); /* LINK COLOR */
  --bg-1: rgb(27, 27, 27);
  --bg-2: linear-gradient(160deg, rgb(37, 37, 37) 60vh, rgb(21, 21, 21) 60vh);
  --text-big-col: rgb(235, 235, 235);
  --text-sm-col: rgb(214, 214, 214);
  --button-col: rgb(69, 23, 155);
  --button-col-hover: rgb(170, 161, 248);
  --button-text-col: rgb(204, 201, 247);
  --light-text-col: rgb(225, 225, 225);
  --dark-text-col: rgb(26, 26, 26);
  --border-col: rgba(177, 177, 177, 0);
}
/* 
==========
FOR THIS PAGE
==========
*/
body,
html {
  position: relative;
  /* overflow: overlay; */
  cursor: auto;
  width: 100%;
  background: var(--bg-2);
  height: auto;
  min-height: 100vh;
}
#page {
  background: transparent;
  min-height: 100vh;
  overflow-y: auto;
  padding-bottom: 50px;
  height: auto;
}
#app {
  display: flex;
  flex-direction: column;
  background: transparent;
}
/* 
==========
GLOBAL STYLING
==========
*/
.page-title {
  text-align: center;
  font-family: "Noto Sans SC";
  font-weight: 700;
  text-transform: capitalize;
  color: var(--text-big-col);
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
.center {
  text-align: center;
}
</style>

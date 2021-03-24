<template>
  <div id="app">
    <v-app-bar id="navbar" absolute color="#5327a8" dark>
      <router-link to="/" id="appname">{{ appname }}</router-link>
      <v-spacer></v-spacer>
      <v-menu v-if="$vuetify.breakpoint.smAndDown">
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon id="menu-button" v-bind="attrs" v-on="on" />
        </template>
        <v-list>
          <v-list-item :key="item.title" v-for="item in items">
            <router-link
              v-if="typeof item.action == 'string'"
              class="nav-elt noselect"
              active-class="nav-active"
              tag="button"
              :to="item.action"
            >
              {{ item.title.toUpperCase() }}
            </router-link>
            <button v-else class="nav-elt" @click="item.action()">
              {{ item.title.toUpperCase() }}
            </button>
          </v-list-item>
        </v-list>
      </v-menu>
      <span v-else id="nav-elts">
        <v-spacer />
        <span :key="item.title" v-for="item in items">
          <router-link
            v-if="typeof item.action == 'string'"
            class="nav-elt noselect"
            active-class="nav-active"
            tag="button"
            :to="item.action"
          >
            {{ item.title.toUpperCase() }}
          </router-link>
          <button v-else class="nav-elt" @click="item.action()">
            {{ item.title.toUpperCase() }}
          </button>
        </span>
      </span>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    appname: String,
    items: Array,
  },
};
</script>

<style scoped>
#appname {
  font-size: 2rem;
  font-family: "Noto Sans SC";
  text-transform: lowercase;
  text-decoration: none;
  color: #fafafa;
  margin-bottom: 5px;
}
#nav-elts {
  flex-grow: 1;
  display: flex;
}
#navbar {
  height: 64px;
}
.nav-elt {
  padding: 5px 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  font-size: 1.5rem;
  color: #e1e1e1;
  cursor: pointer;
  margin: 0px 5px;
  text-underline-offset: 5px;
}
.nav-elt:focus {
  text-decoration: underline;
  outline: none;
}
/* nav-active::before */
</style>

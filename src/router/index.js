import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    }
  ]
});


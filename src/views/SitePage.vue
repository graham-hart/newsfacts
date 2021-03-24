<template>
  <div id="app">
    <span v-if="site">
      <div id="head">
        <h1 class="site-title" :key="site.name">
          {{ site != null ? site.name : "ERROR: SITE NOT FOUND" }}
        </h1>
        <a :href="site.url" target="_blank" id="site-url"
          >Go To {{ site.name }}
        </a>
      </div>
      <div id="body">
        <div id="ratings" class="flex-column">
          <h2 class="center">Ratings</h2>
          <div id="ratingContainer" v-if="!$vuetify.breakpoint.xs">
            <selector
              @changeSelection="changeRateSelection($event)"
              :values="categoryNames"
            />
            <span v-for="category in categories" :key="category.name">
              <rating
                :category="category"
                :site="site"
                v-if="category.name == categoryNames[rateSelection]"
                :key="rateSelection"
              />
            </span>
            <router-link id="criteria-link" to="/criteria"
              >Criteria for Voting</router-link
            >
          </div>
          <span id="ratingContainer" v-else>
            <rating
              v-for="category in categories"
              :key="category.name"
              :category="category"
              :site="site"
            />
            <router-link id="criteria-link" to="/criteria"
              >Criteria for Voting</router-link
            >
          </span>
        </div>
      </div>
    </span>
    <page-not-found v-else />
  </div>
</template>

<script>
import Rating from "../components/Rating.vue";
import Selector from "@/components/Selector.vue";
import PageNotFound from "@/views/PageNotFound.vue";
export default {
  components: { Rating, Selector, PageNotFound },
  name: "SitePage",
  title() {
    return `Sites | ${this.site.name}`;
  },
  data() {
    return {
      rateSelection: 0,
    };
  },
  methods: {
    changeRateSelection(sel) {
      this.rateSelection = sel;
    },
  },
  computed: {
    site() {
      return this.$store.state.newssite.filter(
        (r) => r.route == this.$route.params.site
      )[0];
    },
    categories() {
      return this.$store.state.category;
    },
    categoryNames() {
      console.log();
      return this.categories.map((v) => v.name);
    },
  },
};
</script>

<style scoped>
h2 {
  color: var(--text-big-col);
}
#site-url {
  color: var(--link-col);
}
.rate {
  width: 100%;
  margin-top: 20px;
}
#ratings {
  display: flex;
  justify-content: space-between;
  min-height: 90%;
  flex-grow: 1;
  max-width: 100%;
}
#body {
  margin-top: 50px;
  justify-content: flex-start;
}
#head {
  padding-top: 20px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  color: var(--text-sm-col);
}
.ratelabel {
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
}
a {
  font-size: 1.5rem;
  font-weight: 450 !important;
}
#ratingContainer {
  border: 5px solid var(--border-col);
  width: 60%;
  min-width: 200px;
  margin: auto;
  background-color: var(--bg-1);
}
#criteria-link {
  all: unset;
  float: right;
  margin: 20px;
  cursor: pointer;
  color: var(--link-col);
}
#criteria-link:hover,
#criteria-link :focus {
  text-decoration: underline;
}
</style>

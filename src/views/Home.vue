<template>
  <div id="app">
    <div id="topbar">
      <input
        type="text"
        v-model="searchVal"
        @click="$router.push({ name: 'Home' })"
        id="search-input"
        autocomplete="off"
        placeholder="Search..."
      />
    </div>
    <div id="wrapper">
      <div id="filter-container" v-if="!$vuetify.breakpoint.xs">
        <div id="filters">
          <!-- <div v-for="category in categories" :key="category.name"></div> -->
        </div>
      </div>
      <div class="sites-section">
        <div class="sites-wrapper" v-if="searchedSites.length">
          <router-link
            v-for="site in searchedSites"
            :key="site.name"
            tag="button"
            :to="`/sites/${site.route}`"
            class="site"
            ><h1>
              {{ site.name }}
            </h1></router-link
          >
        </div>
        <div id="no-sites" class="sites-wrapper" v-else>
          NO SITES MATCHED YOUR SEARCH
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sites",
  title: "Home",
  components: {},
  data() {
    return { searchVal: "", shownSites: this.sites };
  },
  computed: {
    searchedSites() {
      return this.sites.filter(
        (s) =>
          s.name.toLowerCase().includes(this.searchVal.toLowerCase()) ||
          s.route.toLowerCase().includes(this.searchVal.toLowerCase())
      );
    },
    sites() {
      return this.$store.state.newssite;
    },
    votes() {
      return this.$store.state.vote;
    },
    categories() {
      return this.$store.state.category;
    },
    people() {
      return this.$store.state.person;
    },
  },
};
</script>

<style scoped>
* {
  overflow-y: visible;
}
@media only screen and (max-width: 768px) {
  * {
    --column-padding: 20px;
  }
}
@media only screen and (min-width: 769px) {
  * {
    --column-padding: 50px;
  }
}
/* Vuetify xs breakpoint */
@media only screen and (max-width: 599px) {
  .site {
    height: 100px;
    background-color: purple;
    width: 100%;
    margin: 20px 0px;
  }
  .sites-wrapper {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: 80%;
    margin: 30px auto;
    text-align: center;
  }
}
@media only screen and (min-width: 600px) {
  .site::before {
    content: "";
    display: block;
    padding-top: 100%;
    float: left;
  }
  .site {
    background-color: var(--main-1);
    color: var(--light-text-col);
    font-size: 0.78rem;
    text-align: center;
    width: 100%;
    padding: 5px;
    /* min-height: 200px; */
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-grow: 2;
    hyphens: auto;
    transition: background-color 0.2s ease-in-out, color 0.1s ease-in-out,
      transform 0.3s ease-in-out;
  }
  .site:hover,
  :focus {
    background-color: rgba(222, 222, 222, 1);
    border: 1px solid rgba(0, 0, 0, 0.8);
    color: var(--text-big-col);
    transform: scale(1.04);
    outline: none;
  }
  .sites-wrapper {
    --width: 100%;
    --column-size: calc(
      calc(var(--width) - calc(var(--column-padding) * 2)) / 3
    );
    display: grid;
    grid-gap: var(--column-padding);
    grid-template-columns: var(--column-size) var(--column-size) var(
        --column-size
      );
    padding: var(--column-padding);
  }
  #wrapper {
    display: grid;
    margin: 50px auto 0px;
    width: 80%;
    max-width: 1200px;
    grid-template-columns: 30% 80%;
  }
}
#topbar {
  background-color: rgba(57, 29, 161, 0.2);
  justify-content: center;
  grid-template-columns: 25% 25%;
  display: flex;
  align-items: center;
  height: 70px;
}
#topbar h1 {
  color: white;
}
#search-input {
  background-color: white;
  width: 250px;
  height: 40px;
  text-align: center;
  font-family: Roboto;
  font-size: 1.2rem;
}
::placeholder {
  font-style: italic;
  opacity: 1;
}
::-ms-input-placeholder {
  font-style: italic;
}
#filter-container {
  padding: 30px;
  height: 700px;
  border-right: 3px solid #1f1f1f;
}
#filters {
  width: 100%;
  padding: var(--column-padding);
  background-color: var(--button-col-hover);
  height: 80%;
  margin-top: 50px;
}
#no-sites {
  color: black;
  display: flex !important;
}
</style>

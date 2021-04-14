<template>
  <div id="app">
    <div id="topbar">
      <input
        type="text"
        v-model="searchVal"
        id="search-input"
        autocomplete="off"
        placeholder="Search..."
      />
    </div>
    <div id="wrapper">
      <div id="filters-container" v-if="!$vuetify.breakpoint.smAndDown">
        <div id="filters">
          <h1>Filters</h1>
          <sitefilter
            class="noselect"
            v-for="category in categories"
            :key="category.name"
            :category="category"
            @change="updateFilters"
          />
          <router-link id="criteria-link" to="/criteria"
            >What do these mean?</router-link
          >
        </div>
      </div>
      <div class="sites-section">
        <div class="sites-wrapper" v-if="searchedSites.length">
          <router-link
            v-for="site in searchedSites"
            :key="site.name"
            tag="button"
            :to="`/sites/${site.route}`"
            class="site noselect"
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
import sitefilter from "@/components/Filter";
export default {
  name: "Sites",
  title: "Home",
  components: { sitefilter },
  data() {
    return {
      searchVal: "",
      credibilityFilter: {},
      biasFilter: {},
    };
  },
  methods: {
    updateFilters(filter) {
      this[filter.name.toLowerCase() + "Filter"] = {
        min: filter.min,
        max: filter.max,
      };
    },
    avgVotesForSite(s, cat) {
      let votes = this.votes.filter(
        (v) =>
          v.newssite_id == s.newssite_id && v.category_id == cat.category_id
      );
      let count = votes.length;
      if (count > 0) {
        let sum = votes.reduce((acc, v) => acc + parseInt(v.score), 0);
        return sum / count;
      } else return null;
    },
  },
  computed: {
    // Does not update when filters update
    searchedSites() {
      const searched = this.sites.filter((s) => {
        for (let cat of this.categories) {
          if (this[cat.name.toLowerCase() + "Filter"]) {
            let avg = this.avgVotesForSite(s, cat);
            if (avg != null) {
              if (
                avg < this[cat.name.toLowerCase() + "Filter"].min ||
                avg > this[cat.name.toLowerCase() + "Filter"].max
              ) {
                return false;
              }
            }
          }
        }
        return (
          s.name.toLowerCase().includes(this.searchVal.toLowerCase()) ||
          s.route.toLowerCase().includes(this.searchVal.toLowerCase())
        );
      });
      return searched;
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
/*=============
  Mobile View
=============*/
@media only screen and (max-width: 959px) {
  .site {
    height: 100px;
    background-color: var(--main-1);
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
/*=============
  Large View
=============*/
@media only screen and (min-width: 960px) {
  /*=============
    Filters
  =============*/
  #filters-container {
    padding: 20px;
    height: 700px;
    border-right: 3px solid #cecece;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #filters {
    width: 100%;
    padding: 15px;
    background-color: var(--button-col-hover);
    min-height: 80%;
  }
  #filters > h1 {
    color: #f1f1f1;
  }
  #criteria-link {
    all: unset;
    float: right;
    margin: 20px;
    cursor: pointer;
    color: var(--main-1);
  }
  #criteria-link:hover,
  #criteria-link :focus {
    text-decoration: underline;
  }
  .site::before {
    content: "";
    display: block;
    padding-top: 100%;
    float: left;
  }
  .site {
    background-color: var(--main-1);
    color: var(--light-text-col);
    font-size: 0.7rem;
    text-align: center;
    width: 100%;
    padding: 0px 5px;
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
    background-color: var(--button-col-hover);
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
    width: 90%;
    /* max-width: 00px; */
    grid-template-columns: 25% 75%;
  }
}
#no-sites {
  color: black;
  display: flex !important;
}
/*=============
  Search Bar
=============*/
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
/*=============
  Tweaks for padding
=============*/
@media only screen and (max-width: 1294px) {
  * {
    --column-padding: 40px;
  }
}
@media only screen and (min-width: 1295px) {
  * {
    --column-padding: 90px;
  }
}
</style>
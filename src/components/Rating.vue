<template>
  <div id="app">
    <h2>{{ dimension.name }}</h2>
    <span :key="setUserVote()">
      <input
        type="range"
        id="vote"
        v-model="vote"
        step="1"
        :min="dimension.range_min"
        :max="dimension.range_max"
        @change="voteChanged()"
      />
      <h2 id="votedisplay">{{ vote }}</h2>
      <button @click="submitVote()" id="voteSubmit">Vote</button>
    </span>
  </div>
</template>
<script>
import api from "@/scripts/api.js";
export default {
  name: "Rating",
  data() {
    return { vote: null, voteSet: false, changed: false };
  },
  mounted() {
    this.setUserVote();
  },
  props: {
    dimension: Object,
    site: Object,
  },
  methods: {
    voteChanged() {
      this.voteSet = true;
    },
    setUserVote() {
      if (!this.voteSet) {
        let v = this.getUserVote;
        if (v != null) {
          this.voteSet = true;
          this.vote = v;
        } else if (this.vote == null) {
          // this.voteSet = true;
          this.vote = 0;
        }
        return this.vote;
      }
    },
    submitVote() {
      let v = this.$store.state.vote.filter(
        (v) =>
          v.newssite_id == this.site.newssite_id &&
          v.dimension_id == this.dimension.dimension_id &&
          v.person_id == this.user.person_id
      )[0];
      try {
        api.patch(`vote?vote_id=eq.${v.vote_id}`, { score: this.vote });
        console.log(`PATCH Vote ${this.vote} ${this.dimension.name}`);
      } catch (e) {
        console.log(e);
        try {
          api.post(`vote`, {
            score: this.vote,
            newssite_id: this.site.newssite_id,
            dimension_id: this.dimension.dimension_id,
            person_id: this.user.person_id,
          });
          console.log(`POST Vote ${this.vote} ${this.dimension.name}`);
        } catch (e) {
          console.log(e);
        }
      }
      this.$store.commit("refreshData");
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    getUserVote() {
      let v = this.$store.state.vote.filter(
        (v) =>
          v.dimension_id == this.dimension.dimension_id &&
          v.newssite_id == this.site.newssite_id &&
          v.person_id == this.user.person_id
      )[0];
      if (!v) {
        v = null;
      } else {
        v = v.score;
      }
      return v;
    },
  },
};
</script>
<style scoped>
#app {
  margin: 20px 1%;
  background-color: white;
  flex-grow: 1;
  padding: 20px;
  border-radius: 10px;
  border: 8px solid #e1e1e1;
}
#vote {
  --margin-h: 20px;
  --margin-v: 1%;
  width: calc(100% - calc(var(--margin-h) * 2));
  margin: var(--margin-v) var(--margin-h);
}
#votedisplay {
  text-align: center;
}
h2 {
  font-weight: 800;
  text-align: center;
}
#voteSubmit {
  margin: auto !important;
  display: block;
  padding: 5px;
  color: white;
  background-color: #5327a8;
  box-shadow: 1px 3px 2px #000000aa;
}
</style>
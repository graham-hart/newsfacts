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
      />
      <h2 id="votedisplay">{{ vote }}</h2>
    </span>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return { vote: 0, voteSet: false };
  },
  mounted() {
    this.setUserVote();
  },
  props: {
    dimension: Object,
    site: Object,
  },
  methods: {
    setUserVote() {
      let v = this.getUserVote;
      if (v != null) {
        this.voteSet = true;
        this.vote = v;
      } else {
        this.vote = 0;
      }
      return this.vote;
    },
  },
  computed: {
    getUserVote() {
      let v = this.$store.state.vote.filter(
        (v) =>
          v.dimension_id == this.dimension.dimension_id &&
          v.newssite_id == this.site.newssite_id &&
          v.person_id == this.$store.state.user.person_id
      )[0];
      if (!v) {
        v = null;
      } else {
        v = v.score;
      }
      console.log(v);
      return v;
    },
  },
};
</script>
<style scoped>
#app {
  width: auto;
  margin: 20px 1%;
  background-color: white;
  flex-grow: 1;
  padding: 20px;
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
}
</style>
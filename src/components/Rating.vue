<template>
  <div id="app">
    <h2>{{ category.name }}</h2>
    <div v-if="votes.length > 0" id="avgVotes">
      <p class="catText text">
        <br />
        <b>{{ avgVotes }}</b>
        out of <b>{{ votes.length }}</b> votes
      </p>
    </div>
    <div v-else id="avgVotes">
      <p class="catText text">
        <br />
        This category doesn't have any votes. <br />Be the first person to vote!
      </p>
    </div>

    <span :key="setUserVote()">
      <input
        type="range"
        id="vote"
        v-model="vote"
        step="1"
        :min="category.range_min"
        :max="category.range_max"
        @change="voteChanged()"
        :disabled="!isUser"
      />
      <h2 id="votedisplay" v-if="isUser">{{ vote }}</h2>
      <span v-else class="text"><p>Please log in to vote!</p></span>
      <button v-if="isUser" @click="submitVote()" id="voteSubmit">Vote</button>
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
    category: Object,
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
      let v = this.votes.filter(
        (v) =>
          v.newssite_id == this.site.newssite_id &&
          v.category_id == this.category.category_id &&
          v.person_id == this.user.person_id
      )[0];
      try {
        api.patch(this.$store, `vote?vote_id=eq.${v.vote_id}`, {
          score: this.vote,
        });
      } catch (e) {
        api.post(this.$store, `vote`, {
          score: this.vote,
          newssite_id: this.site.newssite_id,
          category_id: this.category.category_id,
          person_id: this.user.person_id,
        });
      }
      this.$store.commit("refreshData");
    },
  },
  computed: {
    isUser() {
      return this.user.person_id != 1;
    },
    votes() {
      return this.$store.state.vote.filter(
        (v) =>
          v.newssite_id == this.site.newssite_id &&
          v.category_id == this.category.category_id
      );
    },
    user() {
      return this.$store.state.user;
    },
    getUserVote() {
      let v = this.votes.filter(
        (v) =>
          v.category_id == this.category.category_id &&
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
    avgVotes() {
      let sum = 0;
      let num = 0;
      for (let v of this.votes) {
        sum++;
        num += v.score;
      }
      return num / sum;
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
.catText {
  font-weight: 400;
}
.text {
  font-size: 20px;
  text-align: center;
}
</style>
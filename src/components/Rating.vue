<template>
  <div id="rating">
    <h2>{{ category.name }}</h2>
    <div v-if="votes.length > 0" id="avgVotes">
      <p class="text">
        <br />
        Average: <b>{{ avgVotes }}</b> <br />Total: <b>{{ votes.length }}</b>
      </p>
    </div>
    <div v-else id="avgVotes">
      <p class="text">
        <br />
        This category doesn't have any votes. <br />Be the first person to vote!
      </p>
    </div>

    <span :key="setUserVote()">
      <v-slider
        id="vote"
        v-model="vote"
        step="1"
        :min="category.range_min"
        :max="category.range_max"
        @change="voteChanged()"
        color="blue"
        :disabled="!isAuthenticated"
      />
      <h2 id="votedisplay" v-if="isAuthenticated">{{ vote }}</h2>
      <span v-else class="text"><p>Please log in to vote!</p></span>
      <button
        v-if="isAuthenticated"
        @click="submitVote()"
        id="vote-submit"
        class="noselect"
      >
        Vote
      </button>
    </span>
    <BarChart
      id="chart"
      v-if="!$vuetify.breakpoint.xs"
      :key="this.category.name"
      :category="this.category"
      :chartData="chartData"
    />
  </div>
</template>
<script>
import api from "@/scripts/api.js";
import BarChart from "@/components/BarChart.vue";
export default {
  name: "Rating",
  components: { BarChart },
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
          this.vote = 5;
        }
        return this.vote;
      }
    },
    submitVote() {
      let vote = this.votes.filter(
        (v) =>
          v.newssite_id == this.site.newssite_id &&
          v.category_id == this.category.category_id &&
          v.person_id == this.user.person_id
      )[0];
      if (
        this.vote <= this.category.range_max &&
        this.vote >= this.category.range_min
      ) {
        try {
          api.patch(this.$store, `vote?vote_id=eq.${vote.vote_id}`, {
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
        this.$forceUpdate();
      } else {
        console.error("INVALID VOTE");
      }
    },
  },
  computed: {
    isAuthenticated() {
      return this.user.name != "ANONYMOUS";
    },
    votes() {
      return this.$store.state.vote.filter(
        (v) =>
          v.newssite_id == this.site.newssite_id &&
          v.category_id == this.category.category_id
      );
    },
    user() {
      if (!this.$auth.isAuthenticated) {
        return { name: "ANONYMOUS" };
      } else {
        return (
          this.$store.state.person.filter(
            (p) => p.email == this.$auth.user.email
          )[0] || { name: "ANONYMOUS" }
        );
      }
    },
    getUserVote() {
      let v;
      try {
        v = this.votes.filter(
          (v) =>
            (v.category_id == this.category.category_id &&
              v.newssite_id == this.site.newssite_id &&
              v.person_id == this.user.person_id) ||
            ""
        )[0];
      } catch {
        v = null;
      }
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
      return Math.round((num / sum) * 100) / 100;
    },
    votesByScore() {
      let scFr = {};
      this.votes.forEach((v) => {
        scFr[v.score] = 0;
      });
      this.votes.forEach((v) => {
        scFr[v.score] += 1;
      });
      for (let k of this.labels) {
        if (!Object.keys(scFr).includes(k.toString())) {
          scFr[k] = 0;
        }
      }
      const keysArr = Object.keys(scFr).sort(
        (a, b) => parseInt(a) - parseInt(b)
      );
      let vals = [];
      keysArr.forEach((k) => {
        vals.push(scFr[k]);
      });
      return vals;
    },
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: "Number of votes",
            data: this.votesByScore,
            backgroundColor: "#5332a8bb",
            hoverBackgroundColor: "#5332a8",
          },
        ],
      };
    },
    labels() {
      let l = [];
      for (let i = this.category.range_min; i <= this.category.range_max; i++) {
        l.push(i);
      }
      return l;
    },
  },
};
</script>
<style scoped>
/* 
==========
FOR THIS COMPONENT
==========
*/
#rating {
  margin: 0px auto;
  flex-grow: 1;
  padding: 20px;
  background-color: var(--bg-col-1);
}
#chart {
  width: 80%;
  margin-top: 50px;
}
h2 {
  font-weight: 800;
  text-align: center;
  color: var(--text-big-col);
}
.text {
  font-size: 1.2rem;
  text-align: center;
  color: var(--text-sm-col);
}
/* 
==========
VOTING
==========
*/
#vote-submit {
  margin: auto !important;
  display: block;
  padding: 5px;
  color: var(--button-text-col);
  background-color: var(--button-col);
  box-shadow: 1px 3px 5px #000000aa;
  min-width: 100px;
  max-width: 250px;
  width: 40%;
  border-radius: 1000px;
}
#vote-submit:hover {
  box-shadow: 1px 3px 2px #000000aa;
  background-color: var(--button-col-hover);
}
#vote-submit:focus {
  outline: none;
  background-color: var(--button-col-hover);
}
#votedisplay {
  text-align: center;
}
#vote {
  --margin-h: auto;
  --margin-v: 1%;
  display: block;
  width: calc(100% - 50px);
  margin: var(--margin-v) var(--margin-h);
}
</style>
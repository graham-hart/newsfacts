<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "BarChart",
  props: { vote_data: Array, category: Object },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  computed: {
    labels() {
      let l = [];
      for (let i = this.category.range_min; i <= this.category.range_max; i++) {
        l.push(i);
      }
      return l;
    },
    votesByScore() {
      let scFr = {};
      this.vote_data.forEach((v) => {
        scFr[v.score] = 1;
      });
      this.vote_data.forEach((v) => {
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
    options() {
      return {
        legend: { display: false },
        title: {
          display: true,
          text: `Vote distribution for ${this.category.name}`,
        },
      };
    },
    chartdata() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: "Number of votes",
            data: this.votesByScore,
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
</style>
<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  name: "BarChart",
  props: { chartData: Object, category: Object },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  computed: {
    options() {
      return {
        legend: { display: false },
        title: {
          display: true,
          text: `Vote distribution for ${this.category.name}`,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
          ],
        },
        maintainAspectRatio: false,
      };
    },
  },
  watch: {
    chartData() {
      this.$data._chart.update();
    },
  },
};
</script>

<style scoped>
* {
  margin: auto;
}
canvas {
  background-color: white;
}
</style>
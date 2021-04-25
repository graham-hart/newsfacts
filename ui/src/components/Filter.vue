<template>
  <div id="filter">
    <fieldset>
      <legend>{{ category.name }}</legend>
      <Slider
        v-model="value"
        :min="category.range_min"
        :max="category.range_max"
        @change="changed()"
        color="blue"
        id="filter"
      />
    </fieldset>
  </div>
</template>
<script>
import Slider from "@vueform/slider/dist/slider.vue2";
import "@/components/slidertheme.css";
export default {
  name: "sitefilter",
  components: { Slider },
  props: {
    category: Object,
  },
  data() {
    return {
      value: [this.category.range_min, this.category.range_max],
    };
  },
  methods: {
    changed() {
      this.$emit("change", {
        name: this.category.name,
        min: this.value[0],
        max: this.value[1],
      });
    },
  },
  mounted() {
    this.$emit("change", {
      name: this.category.name,
      min: this.min,
      max: this.max,
    });
  },
};
</script>
<style scoped>
legend {
  all: unset;
}
#filter {
  margin: 20px 0px;
  width: 100%;
}
legend {
  padding: 0px 5px;
  color: white;
  font-size: 1.5rem;
  text-underline-offset: 2px;
}
fieldset {
  border: 3px solid white;
  padding: 20px;
  height: 150px;
}
</style>
<template>
  <div id="selector">
    <span
      v-for="item in values"
      :key="item"
      class="item noselect"
      :class="{ current: item == values[selected] }"
      @click="select(item)"
    >
      {{ item }}
    </span>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    values: Array,
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    select(item) {
      this.selected = this.values.indexOf(item);
      this.$emit("changeSelection", this.selected);
    },
  },
};
</script>
<style scoped>
#selector {
  --sel-height: 50px !important;
  background-color: var(--purple-2);
  height: var(--sel-height);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.item {
  height: var(--sel-height);
  line-height: var(--sel-height);
  text-align: center;
  padding: 0px 20px;
  text-transform: uppercase;
  color: var(--light-text-col);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.item.current,
.item:hover {
  border-bottom: 3px solid var(--light-text-col);
}
.item.current {
  background-color: var(--purple-1);
}
</style>
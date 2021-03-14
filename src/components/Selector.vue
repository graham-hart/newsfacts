<template>
  <div id="app">
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
#app {
  --sel-height: 50px;
  background-color: rgb(124, 15, 219);
  height: var(--sel-height);
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.item {
  height: var(--sel-height);
  line-height: var(--sel-height);
  text-align: center;
  padding: 0px 20px;
  text-transform: uppercase;
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: rgb(107, 14, 189);
}
.item.current,
.item:hover {
  border-bottom: 3px solid white;
}
.item.current {
  background-color: rgb(94, 12, 165);
}
</style>
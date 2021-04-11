<template>
  <div id="app">
    <div id="body">
      <h1>Bias</h1>
      <hr />
      <p>
        Bias is ranked on a scale of -5 - 5, where 0 is completely unbiased and
        5 is incredibly biased. Negative numbers means Progressive bias, and
        positive means Conservative bias.
      </p>
      <h1>Credibility</h1>
      <hr />
      <p>
        Credibility is ranked 0 - 5, where 0 is completely untrustworthy and 5
        is incredibly trustworthy.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  title: "Criteria",
};
</script>

<style scoped>
#body {
  width: 72ch;
  margin: 50px auto;
}
h1 {
  text-align: center;
}
hr {
  margin: 20px auto;
  border: 2px solid #ddd;
}
p {
  font-size: 1.2rem;
  margin: 0px auto 100px;
  font-family: "Roboto", "Times";
}
</style>
<template>
  <div id="app">
    <div id="body">
      <h1>Bias</h1>
      <hr />
      <p>
        Bias is ranked on a scale of -5 - 5, where 0 is completely unbiased and
        5 is incredibly biased. Negative numbers means Progressive bias, and
        Positive means Conservative bias.
      </p>
      <h1>Credibility</h1>
      <hr />
      <p>
        Credibility is ranked 0 - 5, where 0 is completely untrustworthy and 5
        is incredibly untrustworthy.
      </p>
    </div>
  </div>
</template>
<style scoped>
#body {
  width: 90%;
  margin: 50px auto;
}
hr {
  margin: 20px auto;
  border: 2px solid #ddd;
}
p {
  font-size: 1.2rem;
  line-height: 5rem;
  font-family: "Roboto", "Times";
}
</style>
<template>
  <div id="app">
    <h1 class="page-title">About</h1>
    <p class="main">
      Newsfacts is a site dedicated to increasing media literacy and critical
      thinking about where we get our news. We do this by allowing users to rate
      news sources based off of their political bias, as well as their
      credibility. For more about these criteria, click
      <router-link id="contact-link" to="/criteria">here</router-link>.
      <br />
    </p>
    <p class="main">
      In today's world, conversations about current events are difficult to have
      between people with opposing political views. This is because we can't
      even agree on the basic facts of the discussion. Before we have
      conversations about what we should do to combat climate change, we are
      required to have a conversation about whether climate change is even real,
      and this is a big problem. We made this site to combat fake news and
      restore a basic standard of fact to American politics.
    </p>
  </div>
</template>
<script>
export default {
  name: "About",
  title: "About",
};
</script>
<style scoped>
.main {
  color: var(--light-text-col);
  width: 72ch;
  margin: 30px auto;
  text-indent: 3ch;
}
</style>
<template>
  <div id="footer">
    <router-link
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      tag="span"
      class="footer-link"
      >{{ link.name }}<br
    /></router-link>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Sites", path: "/sites" },
      ],
    };
  },
};
</script>
<style scoped>
#footer {
  align-self: flex-end;
  margin-bottom: auto;
  padding: 20px 40px 20px 40px;
  background-color: rgb(99, 32, 185);
  column-count: 3;
  column-gap: 40px;
  line-height: 1.2rem;
}
.footer-link {
  color: rgb(255, 255, 255);
  font-weight: 300;
  cursor: pointer;
}
.footer-link:hover {
  text-decoration: underline;
}
.footer-link:focus {
  outline: none;
}
</style>
<template>
  <div id="app">
    <h1 class="page-title">Contact</h1>
    <div class="email">
      <input type="text" v-model="subject" name="subject" />
      <textarea v-model="body" name="body" />
      <a class="submit" target="_blank" :href="mailto"> Send Email </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  title: "Contact",
  data() {
    return {
      body: "",
      subject: "",
    };
  },
  computed: {
    mailto() {
      return `mailto:newsfacts.app@gmail.com?${
        this.subject != ""
          ? "subject=" + this.subject.replaceAll(" ", "%20")
          : ""
      }${
        this.body != ""
          ? (this.subject && this.body ? "&" : "") +
            "body=" +
            this.body.replaceAll(" ", "%20")
          : ""
      }`;
    },
  },
};
</script>
<style scoped>
* {
  display: flex;
  flex-direction: column;
}
.email {
  margin-top: 200px;
  flex-direction: column;
  align-self: center;
  width: 50%;
  max-width: 700px;
  padding: 20px;
}
input,
textarea {
  padding: 10px;
  background-color: white;
}
input {
  width: 100px;
  width: 80%;
  border-bottom: 1px solid black;
}
textarea {
  width: 100%;
}
</style>
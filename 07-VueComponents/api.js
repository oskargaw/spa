Vue.component("api-content", {
  template: "#api-content-template",
  data() {
    return {
      randomDog: undefined,
    };
  },
  mounted() {
    axios
      .get("https://random.dog/woof.json")
      .then((response) => (this.randomDog = response.data.url));
  },
});

new Vue({
  el: "#app",
});

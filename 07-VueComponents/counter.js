Vue.component("counter-button", {
  template: "#counter-button-template",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    subtract: function () {
      return this.counter--;
    },
    add: function () {
      return this.counter++;
    },
  },
});

new Vue({
  el: "#app",
});

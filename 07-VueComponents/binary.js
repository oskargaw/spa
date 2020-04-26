Vue.component("binary-numbers-list", {
  template: "#binary-numbers-list-template",
  props: ["decimal"],
  computed: {
    binaryNumber: function () {
      return new Number(this.decimal).toString(2);
    },
  },
});

new Vue({
  el: "#app",
  data: {
    numbers: [8, 170, 204, 3855],
  },
});

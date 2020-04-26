Vue.component("architecture-list", {
  template: "#architecture-list-template",
  data() {
    return {
      items: [
        "Memory",
        "Control Unit",
        "Arithmetic Logic Unit",
        "Input/output accessories",
      ],
    };
  },
});

new Vue({
  el: "#app",
});

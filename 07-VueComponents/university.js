Vue.component("university-item", {
  template: "#university-item-template",
  data() {
    return {
      name: "Cracow University of Economics",
      address: "31-510 Kraków, Rakowicka 27, POLAND",
    };
  },
});

new Vue({
  el: "#app",
});

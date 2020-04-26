Vue.component("film-item", {
  template: "#film-item-template",
  props: ["title", "year", "director"],
});

new Vue({
  el: "#app",
  data: {
    films: [
      {
        title: "Avatar",
        year: 2009,
        director: "James Cameron",
      },
      {
        title: "Pitch Black",
        year: 2000,
        director: "David Twohy",
      },
      {
        title: "War and Peace",
        year: 1956,
        director: "King Vidor",
      },
    ],
  },
});

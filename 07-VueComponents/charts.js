Vue.component("chart-prices", {
  template: "#chart-prices-template",
  props: ["chartlabels", "chartdata", "chartlabel"],
  data() {
    return {
      dataset: {
        type: "bar",
        data: {
          labels: [],
          datasets: [
            {
              label: "",
              data: [],
              backgroundColor: "orange",
              borderWidth: 6,
              hoverBorderColor: "yellow",
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Food prices",
            fontSize: 30,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      },
    };
  },
  methods: {
    initChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const pricesChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
    setChartData() {
      this.dataset.data.labels = this.chartlabels;
      this.dataset.data.datasets[0].data = this.chartdata;
      this.dataset.data.datasets[0].label = this.chartlabel;
    },
  },
  mounted() {
    this.setChartData();
    this.initChart("pricesChart", this.dataset);
  },
});

new Vue({
  el: "#app",
  data: {
    labels: ["Meat", "Sweets", "Rice", "Milk", "Bread"],
    data: [33.46, 19.23, 7.11, 6.52, 5.41],
    label: "food price",
  },
});

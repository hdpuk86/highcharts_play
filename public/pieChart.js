var PieChart = function(container, title, series){
  var chart = new Highcharts.Chart({
    chart: {
      type: "pie",
      renderTo: container,
      margin: [0, 0, 0, 0],
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0
    },
    title: {
      text: title
    },
    series: series,
    plotOptions: {
        pie: {
            size:'80%',
            dataLabels: {
                enabled: false
            }
        }
    }
    });
};

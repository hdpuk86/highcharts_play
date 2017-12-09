var BarChart = function(container, titleText, categoriesArray, seriesArray){
  // var container = document.querySelector('#bar-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container
    },
    title: {
      text: titleText
    },
    xAxis: {
      categories: categoriesArray
    },
    series: seriesArray
  });
};

// window.addEventListener('load', function(){
//   new BarChart();
// });

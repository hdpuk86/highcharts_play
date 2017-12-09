var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);

  //pie chart
  var pieContainer = document.querySelector('#countries-pie');
  var title = "World's Populations by Country";
  var data = getData(countries);
  var series = [{
    name: "Countries",
    data: data
  }];
  var pieChart = new PieChart(pieContainer, title, series);

  //bar chart
  // var barContainer = document.querySelector('#countries-bar');
  // var xAxis = getCountryNames(countries);
  // var series = {name: "Earth", data: getPopulations(countries)};
  // var barChart = new BarChart(barContainer, "Country Populations", xAxis, series);
};

var getCountryNames = function(countries){
  var names = [];
  for(var country of countries){
    names.push(country.name);
  }
  return names;
};

var getPopulations = function(countries){
  var populations = [];
  for(var country of countries){
    populations.push(country.population);
  }
  return populations;
};

var getData = function(countries){
  data = [];
  for(var country of countries){
    var object = {name: country.name, y: country.population};
    data.push(object);
  }
  return data;
};

var app = function(){
  var url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);
};

window.addEventListener('load', app);

// var sciContainer = document.getElementById('sci-chart');
// var sciFiTitle = "CodeClan's Favourite SciFi Franchises";
// var sciFiCategories = ["Star Wars", "Star Trek", "BSG", "I Hate Nerds"];
// var sciFiSeries = [
//   {name: "G3", data: [8, 2, 3, 3], color: "red"},
//   {name: "G4", data: [3, 3, 3, 5], color: "black"}
// ];
//
// var fruitContainer = document.getElementById('fruit-chart');
// var fruitTitle = "CodeClan's Favourite Fruit";
// var fruitCategories = ["Apple", "Banana", "Strawberries", "Plum", "Grapes", "Pineapple"];
// var fruitSeries = [
//   {name: "G3", data: [1, 6, 3, 2, 2, 0], color: "red"},
//   {name: "G4", data: [3, 3, 3, 0, 4, 4], color: "black"}
// ];
//
// var pieContainer = document.getElementById('pie-chart');
// var pieTitle = "G3's favourite programming language";
// var pieSeries = [{
//   name: "Programming Languages",
//   data: [
//     {name: "Ruby", y: 1, color: "red"},
//     {name: "Java", y: 9, color: "saddleBrown"},
//     {name: "Javascript", y: 6, color: "gold", sliced: true},
//     {name: "I hate programming", y: 2, color: "black"}
//   ]
// }];
//
// var sciFiChart = new BarChart(sciContainer, sciFiTitle, sciFiCategories, sciFiSeries);
// var fruitChart = new BarChart(fruitContainer, fruitTitle, fruitCategories, fruitSeries);
// var pie = new PieChart(pieContainer, pieTitle, pieSeries);

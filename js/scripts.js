// var vancouver =new City{name: "bongo1", continent:"North America", season:"Any", climate:"Mild", transportation:"Rental", activity:"Outdoors"};
// var newyork = {name: "bongo2", continent:"North America", season:"Any", climate:"Mild", transportation:"Public", activity:"Indoors"};
// var jacksonhole = {name: "bongo3", continent:"North America", season:"Any", climate:"Ranges", transportation:"Public", activity:"Outdoors"};
// var breckenridge = {name: "bongo4", continent:"North America", season:"Any", climate:"Ranges", transportation:"Rental", activity:"Outdoors"};
// var yosemite = {name: "bongo5", continent:"North America", season:"Summer", climate:"Ranges", transportation:"Rental", activity:"Outdoors"};
// var honolulu = {name: "bongo6", continent:"North America", season:"Summer", climate:"Hot", transportation:"Rental", activity:"Outdoors"};
// var bali = {name: "bongo20", continent:"Asia", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
// var manila = {name: "bongo7", continent:"Asia", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
// var phuket = {name: "bongo8", continent:"Asia", season:"Winter", climate:"Hot", transportation:"Public", activity:"Outdoors"};
// var sansebastian = {name: "bongo9", continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
// var barcelona = {name: "bongo10", continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
// var porto = {name: "bongo11", continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
// var santorini = {name: "bongo12", continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Getaway"};
// var prague = {name: "bongo13", continent:"Europe", season:"Summer", climate:"Mild", transportation:"Public", activity:"Outdoors"};
// var paris = {name: "bongo14", continent:"Europe", season:"Summer", climate:"Mild", transportation:"Public", activity:"Indoors"};
// var london = {name: "bongo15", continent:"Europe", season:"Any", climate:"Mild", transportation:"Public", activity:"Indoors"};
// var florence = {name: "bongo16", continent:"Europe", season:"Any", climate:"Mild", transportation:"Public", activity:"Outdoors"};
// var dubai = {name: "bongo17", continent:"Surprise Me", season:"Any", climate:"Hot", transportation:"Rental", activity:"Outdoors"};
// var stlucia = {name: "bongo18", continent:"Surprise Me", season:"Any", climate:"Hot", transportation:"Public", activity:"Getaway"};
// var sydney = {name: "bongo19", continent:"Surprise Me", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
// var search = [vancouver, newyork, jacksonhole, breckenridge, yosemite, honolulu, bali, manila, phuket, sansebastian, barcelona, porto, santorini, prague, paris, paris, london, florence, dubai, stlucia, sydney];
//
// function searchCity(cityName)
// for (var i = 0; i < cities.length; i++){
//   if(cityName === cities[i].name){
//     return cities[i];
//     console.log(cities[i]);
//   }
// }
var newCity;
//BACKEND
function City (name, continent, season, climate, transportation, activity){
  this.continent= continent;
  this.season= season;
  this.climate= climate;
  this.transportation= transportation;
  this.activity= activity;
  this.name= name;
}

var cities =[
  new City("vancouver", "North America", "Any", "Mild", "Rental", "Outdoors"),
  new City("newyork", "North America", "Any", "Mild", "Public", "Outdoors"),
  new City("jacksonhole", "North America", "Any", "Ranges", "Public", "Outdoors"),
  new City("breckenridge", "North America", "Any", "Ranges", "Rental", "Outdoors"),
  new City("yosemite", "North America", "Summer", "Ranges", "Rental", "Outdoors"),
  new City("honolulu", "North America", "Summer", "Hot", "Rental", "Outdoors"),
  new City("bali", "Asia", "Summer", "Hot", "Public", "Outdoors"),
  new City("manila", "Asia", "Summer", "Hot", "Public", "Outdoors"),
  new City("phuket", "Asia", "Winter", "Hot", "Public", "Outdoors"),
  new City("sansebastian", "Europe", "Summer", "Hot", "Public", "Outdoors"),
  new City("barcelona", "Europe", "Summer", "Hot", "Public", "Outdoors"),
  new City("porto", "Europe", "Summer", "Hot", "Public", "Outdoors"),
  new City("santorini", "Europe", "Summer", "Hot", "Public", "Getaway"),
  new City("prague", "Europe", "Summer", "Mild", "Public", "Outdoors"),
  new City("paris", "Europe", "Summer", "Mild", "Public", "Indoors"),
  new City("london", "Europe", "Any", "Mild", "Public", "Indoors"),
  new City("florence", "Europe", "Any", "Mild", "Public", "Outdoors"),
  new City("dubai", "Surprise Me", "Any", "Hot", "Rental", "Outdoor"),
  new City("stlucia", "Surprise Me", "Any", "Hot", "Public", "Getaway"),
  new City("sydney", "Surprise Me", "Summer", "Hot", "Public", "Outdoors")
];

  function assertObjectsEqual (obj1, obj2) {
    var isEqual = true;
    for (var prop in obj1) {
      if ((obj1[prop] !== obj2[prop]) && prop !== "name") {
        return false;
      }
    }
    return isEqual;
  }

  City.prototype.isEqual = function() {
    for (var i = 0; i < cities.length; i++) {
      if (assertObjectsEqual(cities[i], newCity)) {
        return true;
      } else {
        booleanTrue= false;
      }
    }
    return booleanTrue;
  }

  City.prototype.findEqual = function() {
    for (var i = 0; i < cities.length; i++) {
      if (assertObjectsEqual(cities[i], newCity)) {
        console.log(cities[i].name);
        return;
      }
    }

    window.location = "http://bfy.tw/JcJA";
  }


//FRONTEND
$(document).ready(function(){

$("form#surveyQuestions").submit(function(event){
  event.preventDefault();
  var continent = $("input:radio[name=continent]:checked").val();
  var season = $("input:radio[name=season]:checked").val();
  var climate = $("input:radio[name=climate]:checked").val();
  var transportation = $("input:radio[name=transportation]:checked").val();
  var activity = $("input:radio[name=activity]:checked").val();
  newCity = new City("", continent, season, climate, transportation, activity);
  newCity.findEqual();
});
});

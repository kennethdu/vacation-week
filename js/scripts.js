var newCity;
//BACKEND
function City (name, continent, season, climate, transportation, activity, link){
  this.continent= continent;
  this.season= season;
  this.climate= climate;
  this.transportation= transportation;
  this.activity= activity;
  this.name= name;
  this.link = link;
}

var cities =[
  new City("vancouver", "North America", "Any", "Mild", "Rental", "Outdoors", "cities/vancouver.html"),
  new City("newyork", "North America", "Any", "Mild", "Public", "Outdoors", "cites/newyork.html"),
  new City("jacksonhole", "North America", "Any", "Ranges", "Public", "Outdoors", "cities/jacksonhole.html"),
  new City("breckenridge", "North America", "Any", "Ranges", "Rental", "Outdoors", "cities/breckenridge.html"),
  new City("yosemite", "North America", "Summer", "Ranges", "Rental", "Outdoors", "cities/yosemite.html"),
  new City("honolulu", "North America", "Summer", "Hot", "Rental", "Outdoors", "cities/honolulu.html"),
  new City("bali", "Asia", "Summer", "Hot", "Public", "Outdoors", "cities/bali.html"),
  new City("manila", "Asia", "Summer", "Hot", "Public", "Outdoors", "cities/manila.html"),
  new City("phuket", "Asia", "Winter", "Hot", "Public", "Outdoors", "cities/phuket.html"),
  new City("sansebastian", "Europe", "Summer", "Hot", "Public", "Outdoors", "cities/sansebastian.html"),
  new City("barcelona", "Europe", "Summer", "Hot", "Public", "Outdoors", "cities/barcelona.html"),
  new City("porto", "Europe", "Summer", "Hot", "Public", "Outdoors", "cities/porto.html"),
  new City("santorini", "Europe", "Summer", "Hot", "Public", "Getaway", "cities/santorini.html"),
  new City("prague", "Europe", "Summer", "Mild", "Public", "Outdoors", "cities/prague.html"),
  new City("paris", "Europe", "Summer", "Mild", "Public", "Indoors", "cities/paris.html"),
  new City("london", "Europe", "Any", "Mild", "Public", "Indoors", "cities/london.html"),
  new City("florence", "Europe", "Any", "Mild", "Public", "Outdoors", "cities/florence.html"),
  new City("dubai", "Surprise Me", "Any", "Hot", "Rental", "Outdoor", "cities/dubai.html"),
  new City("stlucia", "Surprise Me", "Any", "Hot", "Public", "Getaway", "cities/stlucia.html"),
  new City("sydney", "Surprise Me", "Summer", "Hot", "Public", "Outdoors", "cities/sydney.html")
];

  function assertObjectsEqual (obj1, obj2) {
    var isEqual = true;
    for (var prop in obj1) {
      if ((obj1[prop] !== obj2[prop]) && prop !== "name" && prop !== "link") {
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
var resultArray = [];
  City.prototype.findEqual = function() {

    for (var i = 0; i < cities.length; i++) {
      if (assertObjectsEqual(cities[i], newCity)) {
        resultArray.push(cities[i].name);
        $("#answer").append("<a href ='" + cities[i].link + "'>Your City </a>");
        break
      } else {
        $("#answer").append("<a href ='http://bfy.tw/JcJA'>Surprise Me!</a>");
      }
    }
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
  newCity = new City("", continent, season, climate, transportation, activity, "");
  newCity.findEqual();
});
});

<<<<<<< HEAD
//BACKEND
function City (continent, season, climate, transportation, activity){
  this.continent= continent;
  this.season= season;
  this.climate= climate;
  this.transportation= transportation;
  this.activity= activity;
}
<<<<<<< HEAD
=======
function outPut(){
  if (userInput === City){
  display.show("#hideCities")
}else{
  if (userInput === !City){
    display.show("#hideCities")
  }
}
}

// var cities =[
//   new City("vancover", "North America", "Any", "Mild", "Rental", "Outdoors"),
//   new City("newyork", "North America", "Any", "Mild", "Public", "Outdoors"),
//   new City("jacksonhole", "North America", "Any", "Ranges", "Public", "Outdoors"),
//   new City("breckenridge", "North America", "Any", "Ranges", "Rental", "Outdoors"),
//   new City("yosemite", "North America", "Summer", "Ranges", "Rental", "Outdoors"),
//   new City("honolulu", "North America", "Summer", "Hot", "Rental", "Outdoors"),
//   new City("bali", "Asia", "Summer", "Hot", "Public", "Outdoors"),
//   new City("manila", "Asia", "Summer", "Hot", "Public", "Outdoors"),
//   new City("phuket", "Asia", "Winter", "Hot", "Public", "Outdoors"),
//   new City("sansebastian", "Europe", "Summer", "Hot", "Public", "Outdoors"),
//   new City("barcelona", "Europe", "Summer", "Hot", "Public", "Outdoors"),
//   new City("porto", "Europe", "Summer", "Hot", "Public", "Outdoors"),
//   new City("santorini", "Europe", "Summer", "Hot", "Public", "Getaway"),
//   new City("prague", "Europe", "Summer", "Mild", "Public", "Outdoors"),
//   new City("paris", "Europe", "Summer", "Mild", "Public", "Indoors"),
//   new City("london", "Europe", "Any", "Mild", "Public", "Indoors"),
//   new City("florence", "Europe", "Any", "Mild", "Public", "Outdoors"),
//   new City("dubai", "Surprise Me", "Any", "Hot", "Rental", "Outdoor"),
//   new City("stlucia", "Surprise Me", "Any", "Hot", "Public", "Getaway"),
//   new City("sydney", "Surprise Me", "Summer", "Hot", "Public", "Outdoors")
// // ]
// function searchCity(cityName)
// for (var i = 0; i < cities.length; i++){
//   if(cityName === cities[i].name){
//     return cities[i];
//     console.log(cities[i]);
//   }
// }


>>>>>>> c18801b7d18b55ef575c86a75191f737816e9f44
var search = [vancouver, newyork, jacksonhole, breckenridge, yosemite, honolulu, bali, manila, phuket, sansebastian, barcelona, porto, santorini, prague, paris, paris, london, florence, dubai, stlucia, sydney];
var vancouver = {continent:"North America", season:"Any", climate:"Mild", transportation:"Rental", activity:"Outdoors"};
var newyork = {continent:"North America", season:"Any", climate:"Mild", transportation:"Public", activity:"Indoors"};
var jacksonhole = {continent:"North America", season:"Any", climate:"Ranges", transportation:"Public", activity:"Outdoors"};
var breckenridge = {continent:"North America", season:"Any", climate:"Ranges", transportation:"Rental", activity:"Outdoors"};
var yosemite = {continent:"North America", season:"Summer", climate:"Ranges", transportation:"Rental", activity:"Outdoors"};
var honolulu = {continent:"North America", season:"Summer", climate:"Hot", transportation:"Rental", activity:"Outdoors"};
var bali = {continent:"Asia", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var manila = {continent:"Asia", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var phuket = {continent:"Asia", season:"Winter", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var sansebastian = {continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var barcelona = {continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var porto = {continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var santorini = {continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Getaway"};
var prague = {continent:"Europe", season:"Summer", climate:"Mild", transportation:"Public", activity:"Outdoors"};
var paris = {continent:"Europe", season:"Summer", climate:"Mild", transportation:"Public", activity:"Indoors"};
var london = {continent:"Europe", season:"Any", climate:"Mild", transportation:"Public", activity:"Indoors"};
var florence = {continent:"Europe", season:"Any", climate:"Mild", transportation:"Public", activity:"Outdoors"};
var dubai = {continent:"Surprise Me", season:"Any", climate:"Hot", transportation:"Rental", activity:"Outdoors"};
var stlucia = {continent:"Surprise Me", season:"Any", climate:"Hot", transportation:"Public", activity:"Getaway"};
var sydney = {continent:"Surprise Me", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};


//FRONTEND
$(document).ready(function(){

$("form#surveyQuestions").submit(function(event){
  event.preventDefault();
  var continent = $("input:radio[name=continent]:checked").val();
  var season = $("input:radio[name=season]:checked").val();
  var climate = $("input:radio[name=climate]:checked").val();
  var transportation = $("input:radio[name=transportation]:checked").val();
  var activity = $("input:radio[name=activity]:checked").val();
  var userInput = (continent + season + climate + transportation + activity);
console. log(userInput);
});
=======
$(document).ready(function() {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
};

//
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
};

>>>>>>> b2a553ddbb9b210afead4738b9f2a57f797e1312
});
// user-interface

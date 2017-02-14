'use strict';

//An array for use when creating the sales projections per hour
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//This is where all of the stores are stored as objects
var firstAndPike = {
  name: 'firstAndPike',
  minCustomers:23,
  maxCustomers:65,
  avgCookies:6.3,
  randomCustomers: function(){
    return Math.floor(Math.random() * (65 - 23)) + 23;
  },
  cookiesPerHour: []
};
var seatacAirport = {
  name: 'seatacAirport',
  minCustomers:3,
  maxCustomers:24,
  avgCookies:1.2,
  randomCustomers: function(){
    return Math.floor(Math.random() * (24 - 3)) + 3;
  },
  cookiesPerHour: []
};
var seattleCenter = {
  name: 'seattleCenter',
  minCustomers:11,
  maxCustomers:38,
  avgCookies:3.7,
  randomCustomers: function(){
    return Math.floor(Math.random() * (38 - 11)) + 11;
  },
  cookiesPerHour: []
};
var capitolHill = {
  name: 'capitolHill',
  minCustomers:20,
  maxCustomers:38,
  avgCookies:2.3,
  randomCustomers: function(){
    return Math.floor(Math.random() * (38 - 20)) + 20;
  },
  cookiesPerHour: []
};
var alki = {
  name: 'alki',
  minCustomers:2,
  maxCustomers:16,
  avgCookies:4.6,
  randomCustomers: function(){
    return Math.floor(Math.random() * (16 - 2)) + 2;
  },
  cookiesPerHour: []
};

//This is a function that can be called for each store/object.
var getCookiesPerHour = function(objectName){
  for(var i = 0; i < 15; i++){
    objectName.cookiesPerHour.push(Math.floor(objectName.randomCustomers() * objectName.avgCookies));
  }
};

//Call a function for each city to populate the arrays in each object.
getCookiesPerHour(firstAndPike);
getCookiesPerHour(seatacAirport);
getCookiesPerHour(seattleCenter);
getCookiesPerHour(capitolHill);
getCookiesPerHour(alki);

//Create function to create an ul and insert the array into it.
function putSalesProjections(location){
  console.log(location.name + '-projections');
  var ulElement = document.getElementById(location.name + '-projections');

  for(var ii = 0; ii < 15; ii++){
    var liElement = document.createElement('li');
    liElement.setAttribute('class', 'avgCookiesPerHour');
    liElement.innerHTML = storeHours[ii] + ': ' + location.cookiesPerHour[ii] + ' cookies';
    ulElement.appendChild(liElement);
  }
}

//call the functions to make the lists
putSalesProjections(firstAndPike);
putSalesProjections(seatacAirport);
putSalesProjections(seattleCenter);
putSalesProjections(capitolHill);
putSalesProjections(alki);

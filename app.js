'use strict';

//This is where all of the stores are stored as objects
var firstAndPike = {
  minCustomers:23,
  maxCustomers:65,
  avgCookies:6.3,
  randomCustomers: function(){
    return Math.floor(Math.random() * (65 - 23)) + 23;
  },
  cookiesPerHour: []
};
var seatacAirport = {
  minCustomers:3,
  maxCustomers:24,
  avgCookies:1.2,
  randomCustomers: function(){
    return Math.floor(Math.random() * (24 - 3)) + 3;
  },
  cookiesPerHour: []
};
var seattleCenter = {
  minCustomers:11,
  maxCustomers:38,
  avgCookies:3.7,
  randomCustomers: function(){
    return Math.floor(Math.random() * (38 - 11)) + 11;
  },
  cookiesPerHour: []
};
var capitolHill = {
  minCustomers:20,
  maxCustomers:38,
  avgCookies:2.3,
  randomCustomers: function(){
    return Math.floor(Math.random() * (38 - 20)) + 20;
  },
  cookiesPerHour: []
};
var alki = {
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
  for(var i = 0; i < 14; i++){
    objectName.cookiesPerHour.push(Math.floor(objectName.randomCustomers() * objectName.avgCookies));
  }
};

//Call a fucntion for each city to populate the arrays in each object.
getCookiesPerHour(firstAndPike);
getCookiesPerHour(seatacAirport);
getCookiesPerHour(seattleCenter);
getCookiesPerHour(capitolHill);
getCookiesPerHour(alki);

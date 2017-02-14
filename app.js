'use strict';

//An array for use when creating the sales projections per hour
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CookieStore(nameProper, minCustomers, maxCustomers, avgCookies){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.cookiesPerHour = [];
  this.range = maxCustomers - minCustomers;
}

var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3);
var seatacAirport = new CookieStore('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

CookieStore.prototype.randomCustomers = function(){
  return Math.floor(Math.random() * (this.range + 1) + this.minCustomers);
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
// function putSalesProjections(location){
//   console.log(location.name + '-projections');
//   var ulElement = document.getElementById(location.name + '-projections');
//
//   for(var ii = 0; ii < 15; ii++){
//     var liElement = document.createElement('li');
//     liElement.setAttribute('class', 'avgCookiesPerHour');
//     liElement.innerHTML = storeHours[ii] + ': ' + location.cookiesPerHour[ii] + ' cookies';
//     ulElement.appendChild(liElement);
//   }
// }
//
// //call the functions to make the lists
// putSalesProjections(firstAndPike);
// putSalesProjections(seatacAirport);
// putSalesProjections(seattleCenter);
// putSalesProjections(capitolHill);
// putSalesProjections(alki);

var stores = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];
var tableEl = document.createElement('table');

for(var ii = 0; ii < stores.length; ii++){
  var currentStore = stores[ii];

  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);

  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);

  var minCustEl = document.createElement('td');
  minCustEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td');
  maxCustEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustEl);

  var avgCookiesEl = document.createElement('td');
  avgCookiesEl.textContent = currentStore.avgCookies;
  rowEl.appendChild(avgCookiesEl);
}

document.body.appendChild(tableEl);

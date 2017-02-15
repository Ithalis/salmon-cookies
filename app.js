'use strict';

//An array for use when creating the sales projections per hour
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CookieStore(name, minCustomers, maxCustomers, avgCookies){
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

CookieStore.prototype.makeTheTable = function(tableToDrawInto){
  var hourlySalesRowEl = document.createElement('tr');
  console.log(hourlySalesRowEl);
  var storeNameEl = document.createElement('th');
  console.log(storeNameEl);
  storeNameEl.textContent = this.name;
  hourlySalesRowEl.appendChild(storeNameEl);

  for(var hours = 0; hours < this.cookiesPerHour.length; hours++){
    var hourlyCookieSales = document.createElement('td');
    console.log(hourlyCookieSales);
    hourlyCookieSales.textContent = this.cookiesPerHour[hours];
    console.log(hourlyCookieSales);
    hourlySalesRowEl.appendChild(hourlyCookieSales);
  }
  tableToDrawInto.appendChild(hourlySalesRowEl);
};

//Call a function for each city to populate the arrays in each object.
getCookiesPerHour(firstAndPike);
getCookiesPerHour(seatacAirport);
getCookiesPerHour(seattleCenter);
getCookiesPerHour(capitolHill);
getCookiesPerHour(alki);

var tableEl = document.createElement('table');
console.log(tableEl);
var sectionEl = document.getElementById('cookieSalesTable');
sectionEl.appendChild(tableEl);

var hoursRowEl = document.createElement('tr');
var hoursHeaderEl = document.createElement('th');
hoursRowEl.appendChild(hoursHeaderEl);
for(var tableHours = 0; tableHours < storeHours.length; tableHours++){
  var hoursDataEl = document.createElement('td');
  hoursDataEl.textContent = storeHours[tableHours];
  hoursRowEl.appendChild(hoursDataEl);
}
tableEl.appendChild(hoursRowEl);

firstAndPike.makeTheTable(tableEl);
seatacAirport.makeTheTable(tableEl);
seattleCenter.makeTheTable(tableEl);
capitolHill.makeTheTable(tableEl);
alki.makeTheTable(tableEl);

var stores = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];
function makeTotalRow(){
  var totalRowEl = document.createElement('tr');
  tableEl.appendChild(totalRowEl);
  var totalHeaderEl = document.createElement('th');
  totalHeaderEl.textContent = 'Totals';
  totalRowEl.appendChild(totalHeaderEl);
  var totalCookies = 0;
  for(var i = 0; i < 15; i++){
    for(var ii = 0; ii < 5; ii++){
      totalCookies = totalCookies += stores[ii].cookiesPerHour[i];
    }
    var totalDataEl = document.createElement('td');
    totalDataEl.textContent = totalCookies;
    totalRowEl.appendChild(totalDataEl);
    var totalCookies = 0;
  }
}

makeTotalRow();

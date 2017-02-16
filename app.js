'use strict';

//An array for use when creating the sales projections per hour
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  for(var i = 0; i < storeHours.length; i++){
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

var stores = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];

console.log('==============EVENT LISTENERS===============');

var newUserStores = [];
var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();

  var name = event.target.newStoreName.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var avgCookies = event.target.avgCookies.value;

  console.log(name);
  console.log(minCustomers);
  console.log(maxCustomers);
  console.log(avgCookies);

  var newStore = new CookieStore(name, minCustomers, maxCustomers, avgCookies);
  stores.push(newStore);
  getCookiesPerHour(newStore);
  tableEl.deleteRow(-1);
  newStore.makeTheTable(tableEl);
  makeTotalRow();
}

for(var storeNumber = 0; storeNumber < stores.length; storeNumber++){
  getCookiesPerHour(stores[storeNumber]);
  stores[storeNumber].makeTheTable(tableEl);
}

function makeTotalRow(){
  var totalRowEl = document.createElement('tr');
  tableEl.appendChild(totalRowEl);
  var totalHeaderEl = document.createElement('th');
  totalHeaderEl.textContent = 'Totals';
  totalRowEl.appendChild(totalHeaderEl);
  var totalCookies = 0;
  for(var i = 0; i < storeHours.length; i++){
    for(var ii = 0; ii < stores.length; ii++){
      totalCookies = totalCookies += stores[ii].cookiesPerHour[i];
    }
    var totalDataEl = document.createElement('td');
    totalDataEl.textContent = totalCookies;
    totalRowEl.appendChild(totalDataEl);
    var totalCookies = 0;
  }
}

makeTotalRow();

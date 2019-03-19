

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(storeName, minCustomers, maxCustomers, avgCookies) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookies = 0;
}
Store.prototype.calcHourlyCustomers = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
  }
};
Store.prototype.calcCookiesEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesEachHour.push(this.customersEachHour[i] * Math.ceil(this.avgCookies));
  }
};
Store.prototype.calcTotalCookies = function() {
  for (var i = 0; i < hours.length; i++) {
    this.totalCookies += this.cookiesEachHour[i];
  }
};
Store.prototype.render = function() {
  this.calcHourlyCustomers();
  this.calcCookiesEachHour();
  this.calcTotalCookies();
  // create table row
  var tableRow = document.createElement('tr');
  // create first table cell (store name)
  var storeCell = document.createElement('td');
  storeCell.textContent = this.storeName;
  tableRow.appendChild(storeCell);
  // loop over array and create other td's
  for (var i = 0; i < hours.length; i++) {
    var tableCell = document.createElement('td');
    tableCell.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableCell);
  }
  // create total column
  var totalCell = document.createElement('td');
  totalCell.textContent = this.totalCookies;
  tableRow.appendChild(totalCell);
  // append
  document.getElementById('table').appendChild(tableRow);
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

pike.render();
seaTac.render();
seattle.render();
capitol.render();
alki.render();
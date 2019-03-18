
//Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// location 1 ------------------------------------

var pike = {
  storeName: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customers: 0,
  calculateHourlyCustomers: function() {
    this.customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  cookies: 0,
  calculateCookiesPurchased: function() {
    this.cookies = this.customers * this.avgCookies;
  },
  render: function() {
    var header = document.createElement('h2');
    header.textContent = this.storeName;
    document.body.appendChild(header);
  }
};

pike.render();

// // log results for location 1 --------------------
// console.log('1st and Pike');
// for (var i = 0; i < hours.length; i++) {
//   pike.calculateHourlyCustomers();
//   pike.calculateCookiesPurchased();
//   console.log(hours[i] + ': ' + Math.round(pike.cookies));
// }

// // location 2 -------------------------------------

// var seaTac = {
//   storeName: 'SeaTac Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 1.2,
//   customers: 0,
//   calculateHourlyCustomers: function() {
//     this.customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookies: 0,
//   calculateCookiesPurchased: function() {
//     this.cookies = this.customers * this.avgCookies;
//   }
// };

// // log results for location 2 ----------------------
// console.log('SeaTac Airport');
// i = 0;
// for (i = 0; i < hours.length; i++) {
//   seaTac.calculateHourlyCustomers();
//   seaTac.calculateCookiesPurchased();
//   console.log(hours[i] + ': ' + Math.round(seaTac.cookies));
// }

// // location 3 --------------------------------------

// var seattle = {
//   storeName: 'Seattle Center',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   customers: 0,
//   calculateHourlyCustomers: function() {
//     this.customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookies: 0,
//   calculateCookiesPurchased: function() {
//     this.cookies = this.customers * this.avgCookies;
//   }
// };

// // log results for location 3 ----------------------
// console.log('Seattle Center');
// i = 0;
// for (i = 0; i < hours.length; i++) {
//   seattle.calculateHourlyCustomers();
//   seattle.calculateCookiesPurchased();
//   console.log(hours[i] + ': ' + Math.round(seattle.cookies));
// }

// // location 4 --------------------------------------

// var capitol = {
//   storeName: 'Capitol Hill',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookies: 2.3,
//   customers: 0,
//   calculateHourlyCustomers: function() {
//     this.customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookies: 0,
//   calculateCookiesPurchased: function() {
//     this.cookies = this.customers * this.avgCookies;
//   }
// };

// // log results for location 4 ----------------------
// console.log('Capitol Hill');
// i = 0;
// for (i = 0; i < hours.length; i++) {
//   seattle.calculateHourlyCustomers();
//   seattle.calculateCookiesPurchased();
//   console.log(hours[i] + ': ' + Math.round(seattle.cookies));
// }

// // location 5 --------------------------------------

// var alki = {
//   storeName: 'Alki',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   customers: 0,
//   calculateHourlyCustomers: function() {
//     this.customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookies: 0,
//   calculateCookiesPurchased: function() {
//     this.cookies = this.customers * this.avgCookies;
//   }
// };

// // log results for location 5 ----------------------
// console.log('Alki');
// i = 0;
// for (i = 0; i < hours.length; i++) {
//   seattle.calculateHourlyCustomers();
//   seattle.calculateCookiesPurchased();
//   console.log(hours[i] + ': ' + Math.round(seattle.cookies));
// }

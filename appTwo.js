console.log('==============EVENT LISTENERS===============');

var storeFormEl = document.getElementById('new-store-form');
storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation;

  var name = event.target.cookieStoreName.value;
  var minCustomers = parseInt(event.target.minCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  // console.log(newStoreName);
  // console.log(minCustomers);
  // console.log(maxCustomers);
  // console.log(avgCookies);

  var new CookieStore{
    name,
    minCustomers,
    maxCustomers,
    avgCookies
  };

  console.log('User Pressed Submit Button on Form!');
}

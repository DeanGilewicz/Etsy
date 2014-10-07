$(document).ready(function () {

  var currencyUSD = etsy.filter(function(x) {
      return x.currency_code === "USD";
  });

  var itemPrice = currencyUSD.map(function(y) {
    return y.title + " $" + y.price;
  });

  console.log(itemPrice);





});

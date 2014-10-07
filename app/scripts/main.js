$(document).ready(function () {

  var container = $('#drinks');
  var itemTitle;
  var itemPrice;
  var itemSN;
  var itemImage;

  items.results.forEach ( function(x) {
    itemTitle = x.title;
    console.log(itemTitle);
  });


  items.results.forEach ( function(x) {
    itemPrice = x.price + " " + x.currency_code;
    console.log(itemPrice);
  });


  items.results.forEach ( function(x) {
    itemSN = x.Shop.shop_name;
    console.log(itemSN);
  });


  items.results.forEach ( function(x) {
    x.Images.forEach (function(y) {
    itemImage = y.url_170x135;
    console.log(itemImage);
    })
  });





});

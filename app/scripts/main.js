// $(document).ready(function () {
//
//   var container = $('#drinks'),
//       itemTitle,
//       itemPrice,
//       itemSN,
//       itemImage;
//
//
//     items.results.forEach ( function(x) {
//       itemTitle = x.title;
//       console.log(itemTitle);
//     });
//
//     items.results.forEach ( function(x) {
//       itemPrice = x.price + " " + x.currency_code;
//       console.log(itemPrice);
//     });
//
//
//     items.results.forEach ( function(x) {
//       itemSN = x.Shop.shop_name;
//       console.log(itemSN);
//     });
//
//
//     items.results.forEach ( function(x) {
//       x.Images.forEach (function(y) {
//       itemImage = y.url_170x135;
//       console.log(itemImage);
//       })
//     });
//
// });

// $(document).ready(function () {
//
//   var container = $('#drinks'),
//       itemTitle,
//       itemPrice,
//       itemSN,
//       itemImage,
//       display;
//
//   items.results.forEach( function(x) {
//
//       itemTitle = x.title;
//       console.log(itemTitle);
//
//       itemPrice = x.price + " " + x.currency_code;
//       console.log(itemPrice);
//
//       itemSN = x.Shop.shop_name;
//       console.log(itemSN);
//
//       x.Images.forEach (function(y) {
//       itemImage = y.url_170x135;
//       console.log(itemImage);
//       })
//
//   });
//
//   display = itemTitle + itemPrice + itemSN + itemImage;
//
//   container.append(display);
//
//
// });

$(document).ready(function () {

  var container = $('#drinks'),
      itemTitle,
      itemPrice,
      itemSN,
      itemImage,
      display;

  items.results.forEach( function(x) {

      itemTitle = "<p>" + x.title + "</p>";
      // console.log(itemTitle);

      itemPrice = "<p class='price'>" + x.price + " " + x.currency_code + "</p>";
      // console.log(itemPrice);

      itemSN = "<p class='store'>" + x.Shop.shop_name + "<p>";
      // console.log(itemSN);

      x.Images.forEach (function(y) {
      itemImage = "<img class='pics' src= '" + y.url_170x135 + "'/>'";
      // console.log(itemImage);
      });

      display = "<li>" + itemImage + itemTitle + itemSN + itemPrice + "</li>";

      container.append(display);

  });

    $('img').hover(function() {
      $(this).addClass("hover");
      }, function() {
      $(this).removeClass("hover");
    });

});

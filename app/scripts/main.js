$(document).ready(function () {

  var container = $('#drinks'),
      itemTitle,
      itemPrice,
      itemSN,
      itemImage,
      display,
      icons;

  items.results.forEach( function(x) {

      icons = "<img class='icon1' src='" + 'https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png' + "'/>" + "<img class='icon2' src='" + 'https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png' + "'/>";

      itemTitle = "<p class='it'>" + x.title + "</p>";
      // console.log(itemTitle);

      itemPrice = "<p class='ip'>" + x.price + " " + x.currency_code + "</p>";
      // console.log(itemPrice);

      itemSN = "<p class='isn'>" + x.Shop.shop_name + "<p>";
      // console.log(itemSN);

      itemImage = "<img src= '" + x.Images[0].url_170x135 + "'/>'";
      // console.log(itemImage);

      display = "<li>" + icons + itemImage + itemTitle + itemSN + itemPrice + "</li>";

      container.append(display);

  });

  $('li').hover (function () {
    $(this).toggleClass('iconReveal');
  }

  );

});

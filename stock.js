window.onload = function(){

  var stock = ['4', '7', '3', '13', '5'];

    let lowprice = Math.min.apply(null, stock);

    let highprice = Math.max.apply(null, stock);

    stock.forEach(price => console.log(price));
    console.log(lowprice, highprice);
}

window.onload = function(){
  //Load the Visualization API and the corechart package
  google.charts.load('current',{packages:['corechart']});
  //Set a callback function to call when the API is loaded
  google.charts.setOnLoadCallback(drawChart);
  var stock = ['4', '7', '3', '13', '5'];


    let lowprice = Math.min.apply(null, stock);

    let highprice = Math.max.apply(null, stock);

    stock.forEach(price => console.log(price))
    console.log(lowprice, highprice);
    /*
    var lowindex = stock.indexOf('3');
    console.log(lowindex);
    var highindex = stock.indexOf('13');
    console.log(highindex);
    */
    function drawChart() {
    // Set Data
    var data = google.visualization.arrayToDataTable([
      ['Month', 'Price'],
      [8,4],[9,7],[10,3],[11,13],[12,5]
      ]);
    // Set Options
    var options = {
      title: 'Performance do ativo',
      hAxis: {title: 'Mês'},
      vAxis: {title: 'Preço'},
      legend: 'none'
    };
    // Draw Chart
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

    document.getElementById("demo").innerHTML = `O período de tempo com o melhor resultado é entre ${lowprice} até ${highprice}.`;
  }

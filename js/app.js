
window.onload = load;


function load() {
  // CREANDO VARIABLES GLOBALES, INCLUYEN LOS ARRAYS POR SEDE
  // Lima
  var lim20162 = document.getElementById('lim-2016-2');
  var lim20171 = document.getElementById('lim-2017-1');
  var lim20172 = document.getElementById('lim-2017-2');
  var arrayAlumn20162L = data.LIM['2016-2']['students'];
  var arrayAlumn20171L = data.LIM['2017-1']['students'];
  var arrayAlumn20172L = data.LIM['2017-2']['students'];

  // Arequipa
  var aqp20162 = document.getElementById('aqp-2016-2');
  var aqp20171 = document.getElementById('aqp-2017-1');
  var arrayAlumn20162A = data.AQP['2016-2']['students'];
  var arrayAlumn20171A = data.AQP['2017-1']['students'];
  // Santiago
  var scl20162 = document.getElementById('scl-2016-2');
  var scl20171 = document.getElementById('scl-2017-1');
  var scl20172 = document.getElementById('scl-2017-2');
  var arrayAlumn20162S = data.SCL['2016-2']['students'];
  var arrayAlumn20171S = data.SCL['2017-1']['students'];
  var arrayAlumn20172S = data.SCL['2017-2']['students'];
  // Mexico df
  var cdmx20162 = document.getElementById('cdmx-2017-1');
  var cdmx20171 = document.getElementById('cdmx-2017-2');
  var arrayAlumn20171M = data.CDMX['2017-1']['students'];
  var arrayAlumn20172M = data.CDMX['2017-2']['students'];

  // VARIABLES USADAS PARA EL TOTAL
  var lima = document.getElementById('lima');
  var Arequipa = document.getElementById('Arequipa');
  var Santiago = document.getElementById('Santiago');
  var MexicoDf = document.getElementById('MexicoDf');

  // MOSTRANDO EL TOTAL DE ALUMNAS INSCRITAS Y DESERTADAS


  // UTILIZAMOS GOOGLE CHARTS PARA GENERAR GRAFICO INTERACTIVO
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChartTotalAlu);
  function drawChartTotalAlu() {
    var totalAlumn = 0;
    var activeStudents = 0;
    var desertStudents = 0;
    for (i = 0; i < arrayAlumn20162L.length; i++) {
      if (arrayAlumn20162L[i]['active'] === true) {
        activeStudents++;
      } if (arrayAlumn20162L[i]['active'] === false) {
        desertStudents++;
      } totalAlumn = activeStudents + desertStudents;
    } 

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Activas', activeStudents],
      ['Desertoras', desertStudents],
    ]);
    var options = {
      'title': 'Total de Alumnas :' + totalAlumn,
      'width': 400,
      'height': 300
    };
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  
}

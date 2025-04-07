//data
let categoriiDetineri = [
  ['Bursa', 29.4],
  ["Depozite", 37.7],
  ["Economii", 5.3],
  ["Titluri", 15.1],
  ["ETF", 12.6]
];

let detineriETF = [
  ['VUAA', 50],
  ["IS3N", 5],
  ["VWCG", 40],
  ["AAKI", 5],
];

let detineriBVB = [
    ['MCAB', 0.3],
    ["TEL", 4.7],
    ["SNG", 14.7],
    ["H2O", 24.7],
    ["TLV", 11.7],
    ["BRD", 5.4],
    ["DIGI", 7.1],
    ["SNP", 31.1],
];

let detineriPiete = [
    ['Europe', 20],
    ["Romania", 50],
    ["SUA", 20],
    ["ASIA", 10],
];

let detineriSector = [
    ['Energie', 20],
    ["Financiar", 50],
    ["Comunicare", 20],
    ["Altele", 10],
];

let profitInvestitii = [
    {tip:'Bursa', profitPotential: 1200, profitMarcat: 380.34, investitie: 21443, profitAnuala: 4.5},
    {tip:'ETF', profitPotential: 200, profitMarcat: 180.34, investitie: 7255, profitAnuala: 1.5},
    {tip:'Economii', profitPotential: 358, profitMarcat: 2380.34, investitie: 10000, profitAnuala: 14.7,},
    {tip:'Titluri', profitPotential: 1210, profitMarcat: 80.34, investitie: 11443, profitAnuala: 2.5,},
    {tip:'Depozite', profitPotential: 100, profitMarcat: 580.34, investitie: 71443, profitAnuala: 3.6,},
];

let variatieProfit = [
  [new Date(2025,1,1), 1250],   [new Date(2025,1,2), 1336],  [new Date(2025,1,3), 1122],  [new Date(2025,1,4), 1700],  [new Date(2025,1,6), 1825],  [new Date(2025,1,7), 1444],
  [new Date(2025,1,8), 1350],   [new Date(2025,1,9), 1436],  [new Date(2025,1,10), 1322],  [new Date(2025,1,11), 1500],  [new Date(2025,1,12), 1625],  [new Date(2025,1,13), 1454],
];

let variatieInvestitie = [
  [new Date(2025,2,1), 1250],   [new Date(2025,2,2), 1336],  [new Date(2025,3,3), 1122],  [new Date(2025,4,4), 1700],  [new Date(2025,5,6), 1825],  [new Date(2025,6,7), 1444]
];


let treeMapData = [
  ['Actiune', 'Tip', 'Market Value', 'Value increase/decrease'],
  ['Global',    null,                 0,                               0],
  ['BVB -2%',   'Global',            0,                             0],
  ['ETF -1%',    'Global',             0,                              0],
  ['SNP 2.48%',    'BVB -2%',           29.23,                              2.48],
  ['SNN -0.21%',       'BVB -2%',            7,                              -0.21],
  ['H2O 0.27%',    'BVB -2%',            23.24,                              0.27],
  ['MCAB -5%',    'BVB -2%',            0.28,                              -5],
  ['BRD 6.65%',    'BVB -2%',            5.07,                              6.65],
  ['DIGI 5.71%',    'BVB -2%',            6.57,                              5.71],
  ['TLV 9.57%',    'BVB -2%',            11.23,                              9.57],
  ['SNG 16.84%',    'BVB -2%',            14.18,                              16.84],
  ['TEL 8.08%',    'BVB -2%',            4.18,                              8.08],
  ['America 10%',    'ETF -1%',             41.42,                              10],
  ['Europe -2%',   'ETF -1%',             13.53,                              -2],
  ['Asia -10%',    'ETF -1%',             36.88,                              -10],
  ['AI&ROB 4%',     'ETF -1%',             8.17,                              4]
];


let variatieActivBVB = [
  ["Actiune", "Variatie pe activ", { role: "style" } ],
  ["SNP", -8.94, "#b87333"],
  ["SNN", 10.49, "silver"],
  ["H2O", -19.30, "gold"],
  ["SSS", 21.45, "green"],
  ["UTF", 11.5, "red"],
  ["RED", -10.45, "blue"],
  ["RRS", 1.45, "grey"],
];


let variatieActivETF = [
  ["Actiune", "Variatie pe activ", { role: "style" } ],
  ["VUAA", -5.94, "#b87333"],
  ["IS3N", 5.49, "silver"],
  ["VWCG", -9.30, "gold"],
  ["AAKI", 1.45, "green"]
];


let variatiePiete = [
  ["Actiune", "Variatie pe activ", { role: "style" } ],
  ["SUA", -41.94, "#b87333"],
  ["ROM", 15.49, "silver"],
  ["ASIA", -5.30, "gold"],
  ["EUROPE", 11.45, "green"]
];


let variatieSectorBVB = [
  ["Actiune", "Variatie pe activ", { role: "style" } ],
  ["Energie", -4.94, "#b87333"],
  ["Financiar", 10.49, "silver"],
  ["Comunicare", -2.30, "gold"],
  ["Altele", 1.45, "green"]
];

let detineriVsTintaValoare = [
  ['Tip','Detinere',{ role: 'annotation' }, 'Diferenta', { role: 'annotation' }, 'Tinta', { role: 'annotation' }, ],
  ['Bursa', 87.5, '35000', 12.5 , '5000', 100, '40000'],
  ['Etf', 84.5, '12000',  15.5, '2000', 100, '14200',],
  ['Titluri', 100, '10000', 5, '-500', 95, '9500',],
  ['Economii', 100, '6000', 10, '-600', 90, '5400'],
  ['Depozite', 85, '4000', 15, '700', 100, '4700']
];


let detineriVsTintaProcent = [
  ['Tip','Detinere',{ role: 'annotation' }, 'Diferenta', { role: 'annotation' }, 'Tinta', { role: 'annotation' } ],
  ['Bursa', 87.5, '35', 12.5, '5', 100, '40'],
  ['Etf', 84.5, '18',15.5, '2', 100, '20'],
  ['Titluri', 100, '10', 5, '-1', 95, '9'],
  ['Economii', 100, '10', 10, '-2', 90, '5'],
  ['Depozite', 85, '15', 15, '10', 100, '10']
];

// Charts options 
var pieChartOptions = { title: '',
  chartArea: { width:"100%" },
  width: "100%",
  height: 450,
  legend: { position:'bottom' },
  is3D: true,
  titleTextStyle: { fontSize: 20, color: 'red' },
  sliceVisibilityThreshold: 0.05
};

let lineChartOptions = {
  hAxis: { title: 'Data',format: 'YY-MM-dd '},
  vAxis: { title: 'Valoare' },
  height: 450,
  chartArea: { width:"90%" },
  titleTextStyle: { fontSize:20,color:'red' }
};


let columnChartOptions = {
    chartArea: {width:"100%"},
    title: "Variatie pe activ",
    titleTextStyle: {fontSize:20,color:'red'},
    width: "100%",
    height: 500,
    bar: {groupWidth: "90%"},
    legend: { position: "none"},
};

let stackedBarChartOptions = {
  legend: { position: 'none', maxLines: 3 },
  bar: { groupWidth: '85%' },
  isStacked: 'percent'
};


function handlePieChartCategoryChange() {
  const selectedCategory = document.getElementById('pie-chart-select').value;
  let piechartData = '';
  let pieChartTitle = '';
  switch (selectedCategory) {
    case "etf":
      piechartData = detineriETF
      pieChartTitle = "Procentaj detineri ETF"
      break;
    case "piete":
      piechartData = detineriPiete
      pieChartTitle = "Procentaj detineri pe piete"
      break;
    case "sector":
      piechartData = detineriSector
      pieChartTitle = "Procentaj detineri pe sector BVB"
      break;
    default:
    piechartData = detineriBVB
    pieChartTitle = "Procentaj detineri pe BVB"
  }
  google.charts.setOnLoadCallback(function () {drawPieChart(piechartData, pieChartOptions, 'chart-detineri', pieChartTitle)});
}


function handleColumnChartCategoryChange() {
  const selectedCategory = document.getElementById('column-chart-select').value;
  let columnChartData = '';
  let columnChartTitle = '';
  switch (selectedCategory) {
    case "etf":
      columnChartData = variatieActivETF
      columnChartTitle = "Variatie activ ETF"
      break;
    case "piete":
      columnChartData = variatiePiete
      columnChartTitle = "Variatie piete"
      break;
    case "sector":
      columnChartData = variatieSectorBVB
      columnChartTitle = "Variatie sector BVB"
      break;
    default:
      columnChartData = variatieActivBVB
      columnChartTitle = "Variatie piete"
  }
  google.charts.setOnLoadCallback(function () {drawColumnChart(columnChartData,columnChartOptions, 'variatie-activ',columnChartTitle)});
}

// Load Charts and the corechart package.
google.charts.load('current', {'packages':['corechart', 'treemap']});
// Draw the pie chart when Charts is loaded.
//google.charts.setOnLoadCallback(function () {drawPieChart(categoriiDetineri, pieChartOptions, 'detineri-categorii', 'Procentaj pe tip de investitie')});
google.charts.setOnLoadCallback(drawTreeChart);
google.charts.setOnLoadCallback(function () {drawStackedBarChart (detineriVsTintaProcent, stackedBarChartOptions, 'stacked-chart-dif-procent', 'Detineri vb Tinta (Procent)')});
google.charts.setOnLoadCallback(function () {drawStackedBarChart (detineriVsTintaValoare, stackedBarChartOptions, 'stacked-chart-dif-valoare', 'Detineri vb Tinta (Valoare)')});
google.charts.setOnLoadCallback(function () {drawLineChart(variatieProfit, lineChartOptions, 'variatie-profit', 'Variatie profit')});
google.charts.setOnLoadCallback(function () {drawLineChart(variatieInvestitie, lineChartOptions, 'variatie-investitie', 'Variatie investitie')});
google.charts.setOnLoadCallback(function () {drawColumnChart(variatieActivBVB,columnChartOptions, 'variatie-activ','Variatie Activ BVB')});
google.charts.setOnLoadCallback(function () {drawPieChart(detineriBVB, pieChartOptions, 'chart-detineri', 'Procentaj detineri pe BVB')});

function drawPieChart (pieChartData, pieChartOptions, divName, pieChartName) {
  // Create the data table
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Actiune');
  data.addColumn('number', 'Slices');
  data.addRows(pieChartData);
  // Set the name
  pieChartOptions.title = pieChartName;
  // Instantiate and draw the chart
  var chart = new google.visualization.PieChart(document.getElementById(divName));
  chart.draw(data, pieChartOptions);
}

function drawLineChart(lineChartRows, lineChartOptions, divName, lineChartTitle) {

  var data = new google.visualization.DataTable();
  data.addColumn('date', 'X');
  data.addColumn('number', 'Y');
  data.addRows(lineChartRows);
  lineChartOptions.title = lineChartTitle;
  var chart = new google.visualization.LineChart(document.getElementById(divName));
  chart.draw(data, lineChartOptions);
}

function drawColumnChart(columnChartData,columnChartOptions, divName,chartTitle) {
  var data = google.visualization.arrayToDataTable(columnChartData);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                  { calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation" },
                  2]);
  columnChartOptions.title = chartTitle
  var chart = new google.visualization.ColumnChart(document.getElementById(divName));
  chart.draw(view, columnChartOptions);
}


function drawTreeChart() {
  var data = google.visualization.arrayToDataTable(treeMapData);
  tree = new google.visualization.TreeMap(document.getElementById('treemap-detineri'));

  tree.draw(data, {
    maxDepth:2,
    minColor: '#f00',
    maxColor: '#0d0',
    minColorValue: -30,
    maxColorValue: 30,
    headerHeight: 25,
    fontColor: 'black',
    height:350,
    generateTooltip: showFullTooltip,
    eventsConfig: {
        rollup: ['dblclick'],
        drilldown: ['click']
    }
  });
  
  function showFullTooltip(row, size, value) {
    return '<div style="background:#fd9; padding:10px; border-style:solid">' +
     '<span style="font-family:Courier"><b>' + data.getValue(row, 0) +
     '</b>, ' + data.getValue(row, 2) +
     ', ' + data.getValue(row, 3) + '</span><br>'
  }
}


function drawStackedBarChart(stackedBarChartData, stackedBarChartOptions, divName, stackedBarChartTitle) {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable(stackedBarChartData);
  stackedBarChartOptions.title = stackedBarChartTitle
  var chart = new google.visualization.BarChart(document.getElementById(divName));
  chart.draw(data, stackedBarChartOptions);

}
//click functions
$(document).ready(function() {
    $('.ntf, .overall').on('click', function() {
      $('.updates_hide').toggleClass('active')
      $('.overall').toggleClass('active')
    })
  })
  // last child jquery code
  $(document).ready(function(){
    $('.box_cont >a').on('click', function(){
    $(this).parent().parent().toggleClass('active');
    $(this).parents().parent().siblings().removeClass('active')
    //$(this).parents().children().find('.last_days_hide').removeClass('active')
    //$(this).siblings('.last_days_hide').toggleClass('active');

   })
  })

// sparklines
var options2 = {
  series: [{
  data: [12, 14, 2, 45, 42, 15, 30, 50, 65, 19, 14, 42, 15, 30, ]
  }],
  chart: {
    type: 'line',
    width: 240,
    height: 50,
    sparkline: {
      enabled: true
    }
  },
  colors: ['#206bc4'],
      stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,      
    },
  tooltip: {
    fixed: {
      enabled: false
    },
  
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function(seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var chart1 = new ApexCharts(document.querySelector("#chart-spark1"), options2);
chart1.render();
// second chart

var options = {
    series: [{
      data: [12, 14, 2, 45, 42, 15, 30, 50, 65, 19, 14]
  }],
    chart: {
    type: 'area',
    height: 40,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight',
    show: true,
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,   
  },
  fill: {
    opacity: 0.3,
  },
  yaxis: {
    min: 0
  },
  colors: ['#206bc4'],
 
  
  };
 var chart = new ApexCharts(document.querySelector("#chart-1"), options);
  chart.render();
//    third chart
   var options5 = {
    series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54,41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
    chart: {
    type: 'bar',
    width: 240,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,14,15,16,17,18,19,20],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };

  var chart5 = new ApexCharts(document.querySelector("#chart-5"), options5);
  chart5.render();
  
// fourth
  var options = {
    series: [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43, 21, 49,55, 41, 67, 22, 43, 21, 49,55, 41, 67, 22, 43, 21, 49]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27, 33, 12, 23, 20, 8, 13, 27, 33, 12, 23, 20, 8, 13, 27, 33, 12]
  },
  {
    name: 'PRODUCT C',
    data: [13, 23, 20, 8, 13, 27, 33, 12, 23, 20, 8, 13, 27, 33, 12, 23, 20, 8, 13, 27, 33, 12]
  },
],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    // stackType: '100%'
  },
  
    
  responsive: [{
    breakpoint: 50,
    options: {
        legend: {
       position: 'bottom',
        offsetX: -10,
        offsetY: 50
      }
    }
  }],

  fill: {
    opacity: 1
  },
  title: {
      text: 'Traffic summary',
  },

  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
// last chart activity
var optionsSpark3 = {
    series: [{
    data: [12, 14, 2, 45, 42, 15, 30, 50, 65, 19, 14,40, 90, 45, 42, 15, 30, 50, 65, 19, 14]
  }],
    chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight',
    show: true,
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,  
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  title: {

    style: {
      fontSize: '24px',
    }
  },
  subtitle: {
    offsetX: 0,
    style: {
      fontSize: '14px',
    }
  }
  };

  var chartSpark3 = new ApexCharts(document.querySelector("#chart-spark3"), optionsSpark3);
  chartSpark3.render();

//   map locations

var countries = '';

      function getCountryData(){
        $.ajax({
          url:'countries.json',
          type:'get',
          success:function(res){
            countries = JSON.parse(res);
          }
        });
      }

      getCountryData();

      $(document).ready(function(){
        $("#vmap").vectorMap({
          map: 'world_en',
          backgroundColor:'#fff',
          borderColor:'#ccc',
          color:'rgb(185,190,200)',
          hoverOpacity:0.7,
          selectedColor:'#206bc4',
          enableZoom:true,
          enableDrag:true,
          showTooltip:true,
          normalizeFunction:'polynomial',

          onLabelShow:function(event,label,code){
            code = code.toUpperCase();
            country_name = countries[code];
            label.html('<strong>'+country_name+'</strong>');
          }
        });
      });

      // data tables
      $(document).ready(function () 
      {
          $('#example').DataTable();
          $('input', this.footer()).on('keyup change clear', function () {
            if (that.search() !== this.value) {
                that.search(this.value).draw();
            }
        });
      });
      
window.onload = function () {

    var chart = new CanvasJS.Chart("barchart2", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2",
        axisY: {
            title: "Amount consumed"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendText: "Beverages",
            dataPoints: [      
                { y: 1 },
                { y: 2},
                { y: 4},
                { y: 7},
                { y: 8},
                { y: 3},
                { y: 10},
                { y: 2}
            ]
            ,fill: false
        }]
    });

    options: {

        plugins: {
    
          colorschemes: {
    
            scheme: 'brewer.SetOne6'
    
          }
    
        }
    
      }



    chart.render();
    
    }

    
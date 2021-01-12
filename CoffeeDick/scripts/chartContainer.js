window.onload = function () {

    var chart1 = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Coffee consumed this week by team"
        },
        data: [{
            color: "#ffc300",        
            type: "line",
            lineColor: "#ffc300",
              indexLabelFontSize: 16,
            dataPoints: [
    
              
                {x: new Date(2021, 00, 11), y: 5 },
                {x: new Date(2021, 00, 12), y: 10 },
                {x: new Date(2021, 00, 13), y: 12 },
                {x: new Date(2021, 00, 14), y: 7 },
                {x: new Date(2021, 00, 15), y: 30 },
            
    
    
    
    
                
            ]
        }]
    });




    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2",
        axisY: {
            title: "Amount consumed"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            color: "#ffc300",
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

    chart1.render();
    chart2.render();
    
    }
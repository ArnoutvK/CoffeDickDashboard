window.onload = function () {
 
    var chart1 = new CanvasJS.Chart("chartcontainer1", {
        animationEnabled: true,
        theme: "light2",
      
        axisX:{      
            valueFormatString: "DDDD MMM YYYY" ,
        }, 
        data: [{
            color: "#ffc300",        
            type: "line",
            lineColor: "#ffc300",
              indexLabelFontSize: 16,
            dataPoints: [     
                {x: new Date(2021, 00, 11), y: 38 },
                {x: new Date(2021, 00, 12), y: 29 },
                {x: new Date(2021, 00, 13), y: 32 },
                {x: new Date(2021, 00, 14), y: 37 },
                {x: new Date(2021, 00, 15), y: 27 },   
            ]
        }]
    });




    var chart2 = new CanvasJS.Chart("chartcontainer2", {
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
                { x: 1,y: 25},
                { x: 2, y: 20},
                { x: 3,y: 35},
                { x: 4, y: 47},
                { x: 5,y: 40},
                { x: 6,y: 13},
                { x: 7,y: 42},
                { x: 8,y: 38}
            ]
            ,fill: false
        }]
    });

    chart1.render();
    chart2.render();
    }
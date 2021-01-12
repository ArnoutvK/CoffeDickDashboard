  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {            
      title:{
        text: "Fruits sold in First & Second Quarter"              
      },

      data: [  //array of dataSeries     
      { //dataSeries - first quarter
   /*** Change type "column" to "bar", "area", "line" or "pie"***/        
       type: "column",
       name: "First Quarter",
       dataPoints: [
       { label: "banana", y: 58 },
       { label: "orange", y: 69 },
       { label: "apple", y: 80 },                                    
       { label: "mango", y: 74 },
       { label: "grape", y: 64 }
       ]
     },
     { //dataSeries - second quarter

      type: "column",
      name: "Second Quarter",                
      dataPoints: [
      { label: "banana", y: 63 },
      { label: "orange", y: 73 },
      { label: "apple", y: 88 },                                    
      { label: "mango", y: 77 },
      { label: "grape", y: 60 }
      ]
    }
    ]
  });

    chart.render();
  }
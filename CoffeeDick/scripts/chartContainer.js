window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Coffee consumed this week by team"
	},
	data: [{        
		type: "line",
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
chart.render();

}
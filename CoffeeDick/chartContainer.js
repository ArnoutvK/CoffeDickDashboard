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

          
            { y: 5 },
			{ y: 10 },
			{ y: 12 },
			{ y: 7 },
			{ y: 30 },
			{ y: 25 },
			{ y: 28 },
			{ y: 45 },
			{ y: 2 }




            
		]
	}]
});
chart.render();

}
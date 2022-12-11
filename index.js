const uploadButton = document.getElementById("uploadButton");
const uploadedFile = document.getElementById("uploadedFile");
const canvas = document.getElementById("chartContainer");
const timeExecution = document.querySelector(".timeExecution");
const obj = [];
let numberofRectangles;

uploadButton.addEventListener('click', () => {
	let t1 = performance.now();
    Papa.parse((uploadedFile).files[0],
    {
        download: true,
        header: true,
        skipEmptyLines: true,
		
        complete: function(results){
			for(let i=0; i<results.data.length; i++){
				obj.push({
					type: "rangeArea",
					markerSize: 0,
					highlightEnabled: false,
					toolTipContent: null,
					
					dataPoints: [
						{ x:parseInt(results.data[i].x1), y: [parseInt(results.data[i].y1), parseInt(results.data[i].y2)] },
						{ x:parseInt(results.data[i].x2), y: [parseInt(results.data[i].y1), parseInt(results.data[i].y2)] },
					  ]
				})
			}
			const chart = new CanvasJS.Chart(canvas, {
				title:{
				  text: "Displaying Rectangles"
				},
				axisX:{
			   		minimum: 0,
			   		maximum: 1000
				},
				axisY:{
					minimum: 0,
					maximum: 1000
				},
				data: obj,
				
			});
			  
			chart.render();
			let t2 = performance.now();
			let elapsed = (t2 - t1)/1000;
			timeExecution.innerHTML = `It took ${elapsed} seconds to print ${obj.length} rectangles`;
        }
    })
	
})
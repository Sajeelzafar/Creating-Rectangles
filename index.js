const uploadButton = document.getElementById('uploadButton');
const uploadedFile = document.getElementById('uploadedFile');
const canvas = document.getElementById('chartContainer');
const timeExecution = document.querySelector('.timeExecution');
const obj = [];

uploadButton.addEventListener('click', () => {
  const t1 = performance.now();
  // eslint-disable-next-line
  Papa.parse((uploadedFile).files[0],
    {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete(results) {
        for (let i = 0; i < results.data.length; i += 1) {
          obj.push({
            type: 'rangeArea',
            markerSize: 0,
            highlightEnabled: false,
            toolTipContent: null,

            dataPoints: [
              {
                x: parseInt((results.data[i].x1), 10),
                y: [parseInt((results.data[i].y1), 10), parseInt((results.data[i].y2), 10)],
              },
              {
                x: parseInt((results.data[i].x2), 10),
                y: [parseInt((results.data[i].y1), 10), parseInt((results.data[i].y2), 10)],
              },
            ],
          });
        }
        // eslint-disable-next-line
        const chart = new CanvasJS.Chart(canvas, {
          title: {
            text: 'Displaying Rectangles',
          },
          axisX: {
            minimum: 0,
            maximum: 1000,
          },
          axisY: {
            minimum: 0,
            maximum: 1000,
          },
          data: obj,

        });

        chart.render();
        const t2 = performance.now();
        const elapsed = (t2 - t1) / 1000;
        timeExecution.innerHTML = `It took ${elapsed} seconds to print ${obj.length} rectangles`;
      },
    });
});
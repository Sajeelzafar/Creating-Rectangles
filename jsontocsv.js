const quantity = document.getElementById('quantity');
const nameCSV = document.getElementById('nameCSV');

const obj = [];

const downloadButton = document.getElementById('downloadButton');

function downloadCSV(filename, csvData) {
  const rectangles = document.createElement('a');
  rectangles.setAttribute('href', `data:text/csv;charset=utf-8,${csvData}`);
  rectangles.setAttribute('download', filename);
  document.body.appendChild(rectangles);
  rectangles.click();
  document.body.removeChild(rectangles);
}

downloadButton.addEventListener('click', () => {
  for (let i = 0; i < parseInt((quantity.value), 10); i += 1) {
    const x1 = Math.floor(Math.random() * 1000);
    const x2 = Math.floor(Math.random() * 1000);
    const y1 = Math.floor(Math.random() * 1000);
    const y2 = Math.floor(Math.random() * 1000);
    obj.push({
      x1,
      x2,
      y1,
      y2,
    });
  }
  if (parseInt((quantity.value), 10) > 0 && parseInt((quantity.value), 10) < 1000000) {
    // eslint-disable-next-line
    downloadCSV(`${nameCSV.value}.csv`, json2csv.parse(obj));
  } else {
    alert('Please select the value in given range');
  }
});

let obj = [];
for(let i=0; i < 1000000; i+=1){
    let x1 = Math.floor(Math.random()*1000);
    let x2 = Math.floor(Math.random()*1000);
    let y1 = Math.floor(Math.random()*1000);
    let y2 = Math.floor(Math.random()*1000);
    obj.push({
        x1,
        x2,
        y1,
        y2,
    });
}
const downloadButton = document.getElementById("downloadButton");

function downloadCSV(filename, csvData){
    const rectangles = document.createElement("a");
    rectangles.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
    rectangles.setAttribute("download", filename);
    document.body.appendChild(rectangles);
    rectangles.click();
    document.body.removeChild(rectangles);
}

downloadButton.addEventListener("click", () => {
    downloadCSV("rectangular-coords-for-practice.csv", json2csv.parse(obj));
})

const uploadButton = document.getElementById("uploadButton");
const uploadedFile = document.getElementById("uploadedFile");

uploadButton.addEventListener('click', () => {
    Papa.parse((uploadedFile).files[0],
    {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
        }
    })
})
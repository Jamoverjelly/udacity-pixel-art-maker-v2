// Target submit input element
const submitGrid = document.querySelectorAll("input")[2];

// Construct table selector element
const canvas = document.querySelector("#pixelCanvas");

// Event listener calls makeGrid() fn on click event
submitGrid.addEventListener("click", function makeGrid(event) {
    let row, col;
    // Select size input
    row = parseInt(document.querySelector("#inputHeight").value);
    col = parseInt(document.querySelector("#inputWidth").value);

    for (let i = 0; i < row; i++) {
        let newRow = document.createElement("tr");
        canvas.appendChild(newRow);
        for (let i = 0; i < col; i++) {
            let newCol = document.createElement("td");
            newCol.setAttribute("class", "pixel");
            newRow.appendChild(newCol);
            newCol.addEventListener("click", function () {
                let colorPicked = document.querySelector("#colorPicker").value;
                this.style.backgroundColor = colorPicked;
            });
        }
    }
    event.preventDefault();
});
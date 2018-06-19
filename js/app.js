// Target submit input element
const submitGrid = document.querySelectorAll("input")[2];

// Event listener calls makeGrid() fn on click event
submitGrid.addEventListener("click", function makeGrid(event) {
    let row, col;
    // Select size input
    row = parseInt(document.querySelector("#inputHeight").value);
    col = parseInt(document.querySelector("#inputWidth").value);

    // Construct table
    const canvas = document.querySelector("table");

    for (let i = 0; i < row; i++) {
        let newRow = document.createElement("tr");
        canvas.appendChild(newRow);
        for (let i = 0; i < col; i++) {
            let newCol = document.createElement("td");
            newRow.appendChild(newCol);
        }
    }
    event.preventDefault();
});

// Select color input
let colorPicked = document.querySelector("#colorPicker").value;
// Select color input
const colorPicked = document.querySelector("#colorPicker").value;

// Select size input
const gridHeight = parseInt(document.querySelector("#inputHeight").value);
const gridWidth = parseInt(document.querySelector("#inputWidth").value);

const canvas = document.querySelector("table");

// When size is submitted by the user, call makeGrid()
// Target submit input element
const submitGrid = document.querySelectorAll("input")[2];
// Event listener calls makeGrid() fn on click event
submitGrid.addEventListener("click", makeGrid());

function makeGrid() {
    for (let i = 0; i <= gridHeight; i++) {

    }
  }
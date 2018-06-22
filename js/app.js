// Target submit input element
const submitGrid = document.querySelector("[type='submit']");
// Event listener calls makeGrid() fn on click event
submitGrid.addEventListener("click", makeGrid);

// Construct table selector element
const canvas = document.querySelector("#pixelCanvas");

// Select color input
const colorSelected = document.querySelector("#colorPicker");
colorSelected.addEventListener("change", colorSelection);

function colorSelection() {
    let colorPicked = colorSelected.value;
    canvas.style.color = colorPicked;
    return colorPicked;
}

// Create interactive canvas grid
function makeGrid(event) {    
    // one-line method suggested by Abhishek K on Udacity's Knowledge Q&A forums
    canvas.innerHTML = '';
    // Select size input
    const row = parseInt(document.querySelector("#inputHeight").value);
    const col = parseInt(document.querySelector("#inputWidth").value);
    event.preventDefault();
    for (let i = 0; i < row; i++) {
        let newRow = document.querySelector("#pixelCanvas").insertRow();
        for (let j = 0; j < col; j++) {
            newRow.insertCell();
        }
    }

    document.getElementById('pixelCanvas').addEventListener("click", function(event) {
        if(event.target && event.target.nodeName == "TD") {
            event.target.style.backgroundColor = colorSelection();
        }
    });
}

// ======= Attribution =======
// The final function clearCanvas() was encountered as a means of
// passing the final test from the Pixel Art Project grader and ensuring
// proper function of the canvas being cleared each time the user clicks
// the submit button. This prevents the addition of extra table elements
// being appended to the original table as a bug.

// The code clearCanvas() is adapted from the help provided by Sudhindra A to
// another student requesting help on passing the Pixel Art Grader tests in Udacity's
// Knowledge Service: https://knowledge.udacity.com/questions/396
// Referenced code can be found at this link: https://codepen.io/sudhindra/project/editor/ZeJgJa
// Other refactored code was applied to ensure functionality of the app.
// ======= End attribution =======

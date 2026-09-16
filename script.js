function createGrid(boxDimensions){
    const cellDimensions = (700 / boxDimensions) - 2;
    console.log(cellDimensions);
    for (var i = 0; i < boxDimensions; i++) {
        for (var j = 0; j < boxDimensions; j++) {
            var box = document.createElement("div");  
            box.classList.add("box"); 
            box.setAttribute("style", "height: " + cellDimensions + 
                "px; width: " + cellDimensions + "px;");
            container.appendChild(box);
            box.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            });
        }
    }
}

function changeGrid(){
    const number = prompt("Enter a number");
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.remove());
    createGrid(number)
}

const container = document.querySelector(".container"); 
const button = document.querySelector("button");

createGrid(16);  
button.addEventListener("click", changeGrid);
function createGrid(boxDimensions){
    const cellDimensions = (700 / boxDimensions) - 2;
    for (var i = 0; i < boxDimensions; i++) {
        for (var j = 0; j < boxDimensions; j++) {
            var box = document.createElement("div");   
            box.setAttribute("style", "height: " + cellDimensions + "px; width: " + cellDimensions + "px; background: white; " +
                             "border: 1px solid black;");
            container.appendChild(box);
            box.addEventListener("mouseover", (event) => {
                if (event.target.style.backgroundColor === "white") {
                    const red = Math.floor(Math.random() * 255); 
                    const green = Math.floor(Math.random() * 255); 
                    const blue = Math.floor(Math.random() * 255); 
                    const style = "rgba(" + red + ", " + green + ", " + blue + ", 0.1)";
                    event.target.style.backgroundColor = style;    
                }
                else {
                    var originalRGBA = event.target.style.backgroundColor.split(" ");
                    if (originalRGBA.length === 4) {
                        const alpha = originalRGBA[3].replace(")", "").replace(",","");
                        const newAlpha = parseFloat(alpha) + 0.1;
                        const updatedValue = originalRGBA[0] + " " + originalRGBA[1] + " " + originalRGBA[2] + " " + newAlpha + ")";
                        event.target.style.backgroundColor = updatedValue;
                    }
                    else {
                        const red = originalRGBA[0].replace("rgb", "");
                        const green = originalRGBA[2].replace(")", "");
                        const updatedValue = "rgba" + red + " " + originalRGBA[1] + " " + green + ", 0.1)";
                        event.target.style.backgroundColor = updatedValue;
                    }
                }
            });
        }
    }
}

function changeGrid(){
    const number = prompt("Enter a number");
    if (Number.isInteger(parseInt(number))){
        if (number >= 1 && number <= 100){
            const boxes = container.children
            for (var i = boxes.length - 1; i >=0; i--) {
                boxes[i].remove();
            }
            createGrid(number);
        }
        else {
            alert("Number must be within 1-100 range");
        }
    }
    else {
        alert("Please enter a valid number (1-100)");
    }
}

const container = document.querySelector(".container"); 
const button = document.querySelector("button");

createGrid(16);  
button.addEventListener("click", changeGrid);
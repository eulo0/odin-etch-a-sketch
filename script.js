function createGrid(){
    const dimensions = 16;
    for (var i = 0; i < dimensions; i++) {
        for (var j = 0; j < dimensions; j++) {
            var box = document.createElement("div");  
            box.classList.add("box"); 
            container.appendChild(box);
        }
    }
}

const container = document.querySelector(".container"); 

createGrid();
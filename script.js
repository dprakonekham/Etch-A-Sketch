const frame = document.querySelector('body');
const grid = document.getElementById('gContainer');
//Initial Board
const gridContainer = document.querySelector('.gridContainer');
gridContainer.style.gridTemplateColumns = "repeat(" + 16 + ", minmax(0,1fr))";
gridContainer.style.gridTemplateRows = "repeat(" + 16 + ", minmax(0,1fr))";
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const element = document.createElement("div");
        element.id = "grid" + i + j;
        element.className = "grid";
        element.textContent = ".";
        element.style.color = "lightgrey";
        element.style.backgroundColor = "lightgrey";
        element.addEventListener(`mouseover`, function(e){
            element.style.color = "black";
            element.style.backgroundColor = "black";
        })
        grid.appendChild(element)
    }
}

function howBig(num){
    //This function creates a new board of num x num
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const element = document.createElement("div");
            element.id = "grid" + i + j;
            element.className = "grid";
            element.textContent = ".";
            element.style.color = "lightgrey";
            element.style.backgroundColor = "lightgrey";
            element.addEventListener(`mouseover`, function(e){
                element.style.color = "black";
                element.style.backgroundColor = "black";
            })
            grid.appendChild(element);
        }
    }
}

const gridDimensions = document.querySelector('.gridSize');
gridDimensions.addEventListener(`click`, function(e){
    let size = prompt("How Big? (Max 100)");
    if(size<101){
        //Removes every child of the previous board
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        gridContainer.style.gridTemplateColumns = "repeat(" + size + ", minmax(0,1fr))";
        gridContainer.style.gridTemplateRows = "repeat(" + size + ", minmax(0,1fr))";
        howBig(size);
    }
});

const eraseButton = document.querySelector('.eraseBtn');
const gridContents = grid.children;
eraseButton.addEventListener(`click`, function(e){
    for(let i = 0; i < gridContents.length; i++){
        //Set the board back to light grey
        gridContents[i].style.color = "lightgrey"
        gridContents[i].style.backgroundColor = "lightgrey"
    }
});

let rotationValue = 0;
document.addEventListener(`keydown`, function(e){
    if(e.code == "KeyD"){
        rotationValue += 10;
        frame.style.transform = "rotate(" + (rotationValue) + "deg)";
    }else if(e.code == "KeyA"){
        rotationValue -= 10;
        frame.style.transform = "rotate(" + (rotationValue) + "deg)";
    }
});
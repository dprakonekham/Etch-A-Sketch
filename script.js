const grid = document.getElementById('gContainer');

function howBig(num){
    if(num<101){
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
                grid.appendChild(element)
            }
        }
    }
}

const gridDimensions = document.querySelector('.gridSize');
const gridContainer = document.querySelector('.gridContainer');
const eraseButton = document.querySelector('.eraseBtn');
const gridContents = grid.children;

gridDimensions.addEventListener(`click`, function(e){
    //Removes every child
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
    let size = prompt("How Big? (Max 100)");
    gridContainer.style.gridTemplateColumns = "repeat(" + size + ", minmax(0,1fr))";
    gridContainer.style.gridTemplateRows = "repeat(" + size + ", minmax(0,1fr))";
    howBig(size);
});

eraseButton.addEventListener(`click`, function(e){
    for(let i = 0; i < gridContents.length; i++){
        gridContents[i].style.color = "lightgrey"
        gridContents[i].style.backgroundColor = "lightgrey"
    }
});

const grid = document.getElementById('gContainer')
function howBig(num){
    if(num<101){
        for(let i = 0; i < num; i++){
            for(let j = 0; j < num; j++){
                const element = document.createElement("div");
                element.id = "grid" + i + j;
                element.className = "grid"
                element.textContent = "."
                element.addEventListener(`mouseover`, function(e){
                    element.style.color = "black";
                    element.style.backgroundColor = "black";
                })
                grid.appendChild(element)
            }
        }
    }
}
const gridDimensions = document.querySelector('.gridSize')
const gridContainer= document.querySelector('.gridContainer')
//grid-template-columns: repeat(16,50px);
gridDimensions.addEventListener(`click`, function(e){
    //Removes every child
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
    let size = prompt("How Big? (Max 100)");
    gridContainer.style.gridTemplateColumns = "repeat(" + size + ", minmax(0,1fr))";
    gridContainer.style.gridTemplateRows = "repeat(" + size + ", minmax(0,1fr))";
    howBig(size)
});

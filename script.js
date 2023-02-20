const grid = document.getElementById('gContainer')
function howBig(num){
    if(num<101){
        for(let i = 0; i < num; i++){
            for(let j = 0; j < num; j++){
                const element = document.createElement("div");
                element.id = "grid" + i + j;
                element.className = "grid"
                element.textContent = "."
                grid.appendChild(element)
            }
        }
    }
}
const gridDimensions = document.querySelector('.gridSize')
gridDimensions.addEventListener(`click`, function(e){
    let size = prompt("How Big? (Max 100)");
    howBig(size)
});

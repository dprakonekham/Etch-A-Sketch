const grid = document.getElementById('gContainer')

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const element = document.createElement("div");
        element.id = "grid" + i + j;
        element.className = "grid"
        element.textContent = "."
        grid.appendChild(element)
    }
}
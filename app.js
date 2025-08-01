const grid = document.querySelector(".parent-container");
let inputValue;

const input = document.querySelector(".input");

input.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        inputValue = e.target.value;
    }
})

for (let i = 0; i < inputValue; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    grid.appendChild(box);
}
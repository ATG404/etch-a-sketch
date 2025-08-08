const grid = document.querySelector(".parent-container");

const button = document.querySelector(".btn");

let inputValue = 16;
for (let i = 0; i < inputValue; i++) {
    for (let j = 0; j < inputValue; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "aqua";
      });
      box.style.flex = `0 0 calc(100%/${inputValue})`;
      grid.appendChild(box);
    }
  }
  
button.addEventListener("click", () => {
  const input = prompt("Enter a value till 100");
  grid.innerHTML = "";
  inputValue = parseInt(input);
  for (let i = 0; i < inputValue; i++) {
    for (let j = 0; j < inputValue; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "aqua";
      });
      box.style.flex = `0 0 calc(100%/${inputValue})`;
      grid.appendChild(box);
    }
  }
});

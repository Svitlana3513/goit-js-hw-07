function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newBoxes = document.querySelector("#boxes");
const inputAmount = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", createBoxes);

function createBoxes() {
  destroyBoxes();
  let amountBoxes = inputAmount.value;
  if (amountBoxes > 0 && amountBoxes <= 100) {
    let boxsize = 30;
    for (let i = 0; i <= amountBoxes; i += 1){
      
      const newDiv = `<div style = "width: ${boxsize}px;
                                    height: ${boxsize}px;
                                    background: ${getRandomHexColor()}"></div>`;
      
      newBoxes.insertAdjacentHTML("beforeend", newDiv);
      boxsize += 10;
    }
  }
}

btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  newBoxes.innerHTML = "";
}



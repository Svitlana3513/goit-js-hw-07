function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clickMe = document.querySelector(".change-color")
const nameColor = document.querySelector(".color")

clickMe.addEventListener("click", handleClick)

function handleClick() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
};
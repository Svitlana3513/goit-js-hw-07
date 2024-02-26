const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");

inputName.addEventListener("input", handleInput);
function handleInput(event) {
    outputName.textContent = event.currentTarget.value.trim();
    if(event.currentTarget.value.trim() === ""){
        outputName.textContent = "Hello, Anonymous!";
    }
}




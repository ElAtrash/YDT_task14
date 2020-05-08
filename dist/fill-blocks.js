getInputValue = () =>{
  let inputValue = document.getElementById("user-input").value;

  if (inputValue == null || inputValue == "") {
    alert("Please Fill The Field!");
  }

  return inputValue;
}

getRandomElement = () => {
  let elementsId = ["block-1", "block-2", "block-3", "block-4", "block-5"];
  let randomElement = elementsId[Math.floor(Math.random() * elementsId.length)];
  return randomElement;
}

inputValueToElement = () => {
  document.getElementById(getRandomElement()).textContent = getInputValue();
}

let button = document.getElementById("button");
button.addEventListener("click", inputValueToElement, false);
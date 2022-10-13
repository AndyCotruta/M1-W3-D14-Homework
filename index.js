window.onload = function () {
  createBingoNumbers();
  const inputNode = document.getElementById("clickToGenerate");
  inputNode.addEventListener("click", clickToGenerate);
};

const numberArray = [];

const createBingoNumbers = function () {
  const bingoNode = document.getElementById("bingoBoard");
  for (let i = 0; i < 76; i++) {
    const bingoNumberNode = document.createElement("div");
    bingoNumberNode.className = "number";
    const h3 = document.createElement("h3");
    h3.innerText = i + 1;
    numberArray.push(h3.innerText);
    bingoNumberNode.appendChild(h3);
    bingoNode.appendChild(bingoNumberNode);
  }
};

const randomNumber = function () {
  const number = Math.floor(Math.random() * 77);
  return number;
};

const clickToGenerate = function (event) {
  const inputNode = document.getElementById("generatedNumber");
  const clickedNode = event.target;
  inputNode.value = randomNumber();
};

const colorBingoNumber = function () {
  const bingoNumberNode = document.getElementsByClassName("number");
  const inputNode = document.getElementById("generatedNumber");
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === randomNumber()) {
      child = bingoNumberNode.children[i];
      return (child.style.backgroundColor = "red");
    }
  }
};

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
  const number = Math.ceil(Math.random() * 76);
  return number;
};

// const clickToGenerate = function (event) {
//   const inputNode = document.getElementById("generatedNumber");
//   const clickedNode = event.target;
//   inputNode.value = randomNumber();
// };

const clickToGenerate = function () {
  const inputNode = document.getElementById("generatedNumber");
  let random = randomNumber();
  inputNode.value = random;
  colorBingoNumber(random);
};

// const colorBingoNumber = function (random) {
//   const bingoNumberNodes = document.querySelectorAll("h3");
//   for (let i = 0; i < bingoNumberNodes.length; i++) {
//     if (bingoNumberNodes[i].innerText === random) {
//       bingoNumberNodes[i].style.backgroundColor = "red";
//     }
//   }
// };

const colorBingoNumber = function (random) {
  const bingoNumberNodes = document.getElementsByClassName("number");
  const numberNode = bingoNumberNodes[random - 1];
  console.log(numberNode);
  numberNode.style.backgroundColor = "red";
};

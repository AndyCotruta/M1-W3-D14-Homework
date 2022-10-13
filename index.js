window.onload = function () {
  createBingoNumbers();
  const inputNode = document.getElementById("clickToGenerate");
  const clickToPlay = document.getElementById("generateRounds");
  const clickToReset = document.getElementById("resetButton");
  inputNode.addEventListener("click", clickToGenerate);
  clickToPlay.addEventListener("click", createBingoCards, true);
  clickToPlay.addEventListener("click", resetInputValue, true);
  clickToReset.addEventListener("click", resetGame);
};

const numberArray = [];
const newNumberArray = [];
const generatedNumberArray = [];

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
  colorGameNumber(random);
  generatedNumberArray.push(random);
};

// const colorBingoNumber = function (random) {
//   const bingoNumberNodes = document.querySelectorAll("h3");
//   for (let i = 0; i < bingoNumberNodes.length; i++) {
//     if (bingoNumberNodes[i].innerText === random) {
//       bingoNumberNodes[i].style.backgroundColor = "red";
//     }
//   }
// };

const colorGameNumber = function (random) {
  const bingoNumberNodes = document.getElementsByClassName("numberDesired");
  for (let i = 0; i < bingoNumberNodes.length; i++) {
    const numberNode = bingoNumberNodes[i];
    if (bingoNumberNodes[i].innerText == random) {
      numberNode.classList.add("redClass");
    }
  }
};

const colorBingoNumber = function (random) {
  const gameNumberNodes = document.getElementsByClassName("number");
  const numberNode = gameNumberNodes[random - 1];
  numberNode.classList.add("redClass");
};

const createBingoCards = function () {
  const inputNode = document.getElementById("desiredRounds");
  const desiredRounds = inputNode.value;
  const bingoCardNode = document.getElementById("bingoDesiredBoards");
  if (desiredRounds == 0) {
    alert("Please select a number and then click the 'Let's play' button");
  } else {
    for (let i = 0; i < desiredRounds; i++) {
      for (let i = 0; i < 24; i++) {
        const bingoNumberNode = document.createElement("div");
        bingoNumberNode.className = "numberDesired";
        if (i === 23) {
          const breakLine = document.createElement("br");
          breakLine.className = "breakLine";
          bingoCardNode.appendChild(breakLine);
        } else {
          const h3 = document.createElement("h3");
          h3.innerText = Math.ceil(Math.random() * 76);
          newNumberArray.push(h3.innerText);
          bingoNumberNode.appendChild(h3);
          bingoCardNode.appendChild(bingoNumberNode);
        }
      }
    }
  }
};

const resetInputValue = function () {
  const inputNode = document.getElementById("desiredRounds");
  inputNode.value = 0;
};

const resetGame = function () {
  const previousGame = document.getElementsByClassName("numberDesired");
  console.log(previousGame);
  for (let i = 0; i < previousGame.length; i++) {
    const previousGameNumbers = previousGame[i];
    previousGameNumbers.classList.add("resetGame");
  }
};

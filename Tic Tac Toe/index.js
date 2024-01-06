let bottons = document.querySelectorAll(".btn");
let ResetBtn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector("#newGame");
let resetGamebtn = document.querySelector("#resetGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turno = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

bottons.forEach((botton) => {
  botton.addEventListener("click", () => {
    if (turno) {
      botton.innerText = "O";
      turno = false;
    } else {
      botton.innerText = "X";
      turno = true;
    }
    botton.disabled = true;
    checkWineer();
  });
});

const disableBottons = () => {
  for (let botton of bottons) {
    botton.disabled = true;
  }
};

const enableBottons = () => {
  for (let botton of bottons) {
    botton.disabled = false;
    botton.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulatons , winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBottons();
};

const checkWineer = () => {
  for (let pattern of winPatterns) {
    let pos1val = bottons[pattern[0]].innerText;
    let pos2val = bottons[pattern[1]].innerText;
    let pos3val = bottons[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

// reset the Game

const resetGame = () => {
  turno = true;
  enableBottons();
  msgContainer.classList.add("hide");
};

// new game

newGamebtn.addEventListener("click", resetGame());
resetGamebtn.addEventListener("click", resetGame());

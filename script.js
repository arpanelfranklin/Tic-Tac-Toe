console.log("hello world");

let Ochoice = true;
let winner = false;

const btn = document.querySelectorAll(".btn");
const restart = document.querySelector(".restart");
const winnerMsg = document.getElementById("winnerMsg");
const playAgain = document.getElementById("playAgain");

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

const btndisable = () => {
  btn.forEach(b => b.disabled = true);
};

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    let val1 = btn[a].innerText;
    let val2 = btn[b].innerText;
    let val3 = btn[c].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      winner = true;
      winnerMsg.innerText = `🎉 Winner: ${val1}`;
      playAgain.style.display = "block";
      btndisable();
      return;
    }
  }

  
  if ([...btn].every(b => b.innerText !== "") && !winner) {
    winnerMsg.innerText = "It's a Draw 😐";
    playAgain.style.display = "block";
  }
};

btn.forEach(b => {
  b.addEventListener("click", () => {
    if (Ochoice) {
      b.innerText = "O";
    } else {
      b.innerText = "X";
    }
    b.disabled = true;
    Ochoice = !Ochoice;
    checkwinner();
  });
});

const resetGame = () => {
  btn.forEach(b => {
    b.innerText = "";
    b.disabled = false;
  });
  winner = false;
  Ochoice = true;
  winnerMsg.innerText = "";
  playAgain.style.display = "none";
};

restart.addEventListener("click", resetGame);
playAgain.addEventListener("click", resetGame);

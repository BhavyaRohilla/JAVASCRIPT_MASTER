"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "SPIDER";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🛑 No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  } // When Guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🌿 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "🐊 You lost the game!!!";
    }
  } // When Guess is too low
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "🦀 Too low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

function getRandom() {
  // Generate Random number
  var randomNumber1 = Math.floor( Math.random() * 6) + 1;


// Select the images based on the random number
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor( Math.random() * 6) + 1;

  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");





      if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "🎲 Player 1 Wins";
    } else if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").textContent = "🎲 Draw 🎲" ;
    } else {
      document.querySelector("h1").textContent = " Player 2 Wins 🎲";
    }



}
getRandom();

// Change H1 ONLY after Refresh is clicked
document.getElementById("refresh-button").onclick = getRandom();


// Button refreshing the funciton getRandom()
var Game = {
  comparedNumber: getRandom(),
  refreshNumber: function() {
    this.comparedNumber = getRandom();
  },
  refreshButton: document.querySelector("#refresh-button")
}
Game.refreshButton.addEventListener("click", Game.refreshNumber);

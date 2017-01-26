//business logic

var currentPlayer = "playerOne";

//// Update Tally function /////
var updateTally = function(diceRoll, playerTally, player) {
  var turnTally = playerTally;
  if (diceRoll === 1) {
    playerToggle(player);
    console.log("Next players turn.");
    console.log("diceRoll: " + diceRoll);
    console.log("currentPlayer: " + player);
    turnTally = 0;
    turnTallyP1 = 0;
    turnTallyP2 = 0;
    playerTally = 0;
    return turnTally;
  } else if (diceRoll != 1){
    turnTally += diceRoll;
    console.log("Roll again or hold.");
    console.log("diceRoll: " + diceRoll);
    return turnTally;
  }
}

////Player Toggle ///////
var playerToggle = function(player) {

  if (player === "playerOne") {
    currentPlayer = "playerTwo";
  }
  else {
    currentPlayer = "playerOne";
  }
  return currentPlayer;
}

/// Random Function copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// var toggleTally = function(diceRoll, playerTally, player) {
//
// };

////////////////////////////////////////////////////////////////////////////////
// user interface logic
$(document).ready(function() {
  console.log("currentPlayer: " + currentPlayer);
  $("#playerTurn").text(currentPlayer);
  var playerTally=0;
  var turnTallyP1=0;
  var turnTallyP2=0;
  var scoreBoardP1=0;
  var scoreBoardP2=0;


  ////Roll Button ///
  $("form#newTurn").submit(function(event) {
    event.preventDefault();
    console.log("currentPlayer: " + currentPlayer);
    var diceRoll=getRandomInt(1,6);

    if (currentPlayer === "playerOne") {
      turnTallyP1= updateTally(diceRoll, playerTally, currentPlayer);
      playerTally = turnTallyP1;
    }
    else if (currentPlayer === "playerTwo") {
      turnTallyP2= updateTally(diceRoll, playerTally, currentPlayer);
      playerTally = turnTallyP2;
      console.log("turnTallyP2: " + turnTallyP2);
    }


    ///Display Stats ////
    $("#diceRollResult").text(diceRoll);
    $("#turnTallyP1").text(turnTallyP1);
    $("#turnTallyP2").text(turnTallyP2);
    $("#scoreBoardP1").text(scoreBoardP1);
    $("#scoreBoardP2").text(scoreBoardP2);
    $("#playerTurn").text(currentPlayer);
  });
  //submit//


    /// HOLD Button ///
    $("#holdButton").click(function() {
      event.preventDefault();
      alert("hold!");
      console.log("turnTallyP2: " + turnTallyP2);
      var diceRoll=getRandomInt(1,6);
      if (currentPlayer === "playerOne") {
        scoreBoardP1 += turnTallyP1;
      }
      else if (currentPlayer === "playerTwo") {
        scoreBoardP2 += turnTallyP2;
      }
      ////clear tally ////
      turnTallyP1 = 0;
      turnTallyP2 = 0;
      playerTally = 0;
      ////switch player /////
      currentPlayer = playerToggle(currentPlayer);

      ///Display Stats ////
      $("#diceRollResult").text(diceRoll);
      $("#turnTallyP1").text(turnTallyP1);
      $("#turnTallyP2").text(turnTallyP2);
      $("#scoreBoardP1").text(scoreBoardP1);
      $("#scoreBoardP2").text(scoreBoardP2);
      $("#playerTurn").text(currentPlayer);
    });
    //hold//

    if (scoreBoardP1 >= 100) {
      alert("Player One Wins!!!!!!!");
    } else if (scoreBoardP2 >= 100) {
      alert("Player Two Wins!!!!!!!!");
    }
});

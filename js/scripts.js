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
    return turnTally = 0;
  } else {
    turnTally = turnTally + diceRoll;
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
};

/// Random Function copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


////////////////////////////////////////////////////////////////////////////////
// user interface logic
$(document).ready(function() {
  console.log("currentPlayer: " + currentPlayer);
  $("#playerTurn").text("PlayerOne");

  ////Turn Button ///
  $("form#newTurn").submit(function(event) {
    event.preventDefault();
    console.log("currentPlayer: " + currentPlayer);
    var playerTally=0;
    var turnTallyP1=0;
    var turnTallyP2=0;
    var diceRoll=getRandomInt(1,6);
    if (currentPlayer === "playerOne") {
      var turnTallyP1= updateTally(diceRoll, playerTally, currentPlayer);
      playerTally = turnTallyP1;
    }
    else {
      var turnTallyP2= updateTally(diceRoll, playerTally, currentPlayer);
      playerTally = turnTallyP2;
    }
    var scoreBoardP1=0;
    var scoreBoardP2=0;

    ///Display Stats ////
    $("#diceRollResult").text(diceRoll);
    $("#turnTallyP1").text(turnTallyP1);
    $("#turnTallyP2").text(turnTallyP2);
    $("#scoreBoardP1").text(scoreBoardP1);
    $("#scoreBoardP2").text(scoreBoardP2);
    $("#playerTurn").text(currentPlayer);



    /// Roll Button ////
    $("#rollButton").click(function(event) {
      event.preventDefault();
      diceRoll = getRandomInt(1,6);

      if (currentPlayer === "playerOne") {
        turnTallyP1= updateTally(diceRoll, playerTally,currentPlayer);
      }
      else {
        turnTallyP2= updateTally(diceRoll, playerTally,currentPlayer);
      }
      console.log(turnTallyP1);

      ///Display Stats ////
      $("#diceRollResult").append(", " + diceRoll);
      $("#turnTallyP1").text(turnTallyP1);
      $("#turnTallyP2").text(turnTallyP2);
      $("#scoreBoardP1").text(scoreBoardP1);
      $("#scoreBoardP2").text(scoreBoardP2);
      $("#playerTurn").text(currentPlayer);
    });

    /// HOLD Button ///
    $("#holdButton").click(function() {
      event.preventDefault();
      scoreBoardP1 += turnTallyP1
      $("#scoreBoardP1").text(scoreBoardP1);
      playerToggle(currentPlayer);
    });
  });
});

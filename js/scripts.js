//business logic

var updateTally = function(diceRoll, playerTally) {
  var turnTally = playerTally;
  if (diceRoll === 1) {
    console.log("Next players turn.");
    console.log("diceRoll: " + diceRoll);
    return turnTally = 0;
  } else {
    turnTally = turnTally + diceRoll;
    console.log("Roll again or hold.");
    console.log("diceRoll: " + diceRoll);
    return turnTally;
  }
}


// $("#rollButton").click(function(){
//   newDiceRoll=getRandomInt(1,6)
// tally += newDiceRoll;

///copied from
///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// user interface logic
$(document).ready(function() {
  console.log("hello!");

  $("#playerTurn").text("PlayerOne");
  $("form#newTurn").submit(function(event) {
    event.preventDefault();
    console.log("submitted!");
    // var playerOneTurn=true;
    var playerTally=0;
    var diceRoll=getRandomInt(1,6);
    var turnTallyP1= updateTally(diceRoll, playerTally);
    var turnTallyP2=0;
    var scoreBoardP1=0;
    var scoreBoardP2=0;
    var playerTurn= "PlayerTwo"; //// create a function that switches between players
    // alert("diceRoll: " + diceRoll);
    $("#diceRollResult").text(diceRoll);
    $("#turnTallyP1").text(turnTallyP1);
    $("#turnTallyP2").text(turnTallyP2);
    $("#scoreBoardP1").text(scoreBoardP1);
    $("#scoreBoardP2").text(scoreBoardP2);
    $("#playerTurn").text(playerTurn);
    // alert("score: " + 0);
    $("#rollButton").click(function(event) {
      event.preventDefault();
      diceRoll = getRandomInt(1,6);
      turnTallyP1= updateTally(diceRoll, turnTallyP1);
      console.log(turnTallyP1);
      $("#diceRollResult").append(", " + diceRoll);
      $("#turnTallyP1").text(turnTallyP1);
      $("#turnTallyP2").text(turnTallyP2);
      $("#scoreBoardP1").text(scoreBoardP1);
      $("#scoreBoardP2").text(scoreBoardP2);
      $("#playerTurn").text(playerTurn);
    });
    $("#holdButton").click(function() {
      event.preventDefault();
      scoreBoardP1 += turnTallyP1
      $("#scoreBoardP1").text(scoreBoardP1);
    });
  });
});

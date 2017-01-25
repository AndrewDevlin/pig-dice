//business logic

var updateTally = function(diceRoll) {
  var tally = 0;
  if (diceRoll === 1) {
    alert("Next players turn.");
    return tally = 0;
  } else {
    alert("Roll again or hold.")
    return tally + diceRoll;}
}


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
  $("form#diceRoll").submit(function(event) {
    event.preventDefault();
    console.log("submitted!");
    var diceRoll=getRandomInt(1,6);
    var turnTallyP1= updateTally(diceRoll);
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
  });
});

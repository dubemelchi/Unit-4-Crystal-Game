$(document).ready(function(){

// declare my variables

let goal = $('#randomNumber');
    wins = $('#wins');
    losses = $('#losses');
    redBox = $('#red');
    blueBox = $('#blue');
    yellowBox = $('#yellow');
    greenBox = $('#green');
    totalScore = $('#score');



//setting random number to start button

$("#startGame").on('click', function() {
  var number = 1 + Math.floor(Math.random() * 120) + 19;
  $("#randomNumber").text(number);

  $("#wins").text("Wins:" + " " + 0);

  $("#losses").text("Losses:" + " " + 0);

  return;

})

//append wins & losses with values.




// setting crystals to click events

$("#red").on('click', function() {
  var number = 1 + Math.floor(Math.random() * 12);
  $("#crystalValue").text(number);
})

$("#blue").on('click', function() {
  var number = 1 + Math.floor(Math.random() * 12);
  $("#crystalValue").text(number);
})

$("#yellow").on('click', function() {
  var number = 1 + Math.floor(Math.random() * 12);
  $("#crystalValue").text(number);
})

$("#green").on('click', function() {
  var number = 1 + Math.floor(Math.random() * 12);
  $("#crystalValue").text(number);
})

})




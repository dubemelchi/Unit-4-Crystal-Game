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
    addCrystals = 0;




//setting random number to start button

$("#startGame").on('click', function() {
  var number = 1 + Math.floor(Math.random() * 120) + 19;
  $("#randomNumber").text(number);

})


// setting crystals to click events

$("#red").on('click', function() {
  var number = 1 + Math.floor(Math.random() * 12);
  //$("#crystalValue").text(number);
  addCrystals++;
  totalScore.text(addCrystals);

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

// when crystals are clicked add numers to total score.



})





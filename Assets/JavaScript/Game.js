$(document).ready(function(){

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// declare my variables

let goal = $('#randomNumber');
    wins = $('#wins');
    losses = $('#losses');
    redBox = $('#red');
    blueBox = $('#blue');
    yellowBox = $('#yellow');
    greenBox = $('#green');
    totalScore = $('#score');


    /*  var number = 1 + Math.floor(Math.random() * 6);
  $('#my_div').text(number);
}, */


// setting red crystal to click event

$("#red").on('click', function() {
  var number = 1 + Math.floor(Math.random() * 6);
  $("#crystalValue").text(number);
})

})




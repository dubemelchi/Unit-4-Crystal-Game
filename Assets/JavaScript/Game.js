$(document).ready(function(){

// declare my variables


/*let goal = $('#randomNumber');
    wins = $('#wins');
    losses = $('#losses');
    redBox = $('#red');
    blueBox = $('#blue');
    yellowBox = $('#yellow');
    greenBox = $('#green');
    totalScore = $('#score');
    addCrystals = 0; */




//setting random number to start button

$("#startGame").on('click', function() {

  var number = 1 + Math.floor(Math.random() * 120) + 19;
  $("#randomNumber").text(number);

  var redCrystal = 1 + Math.floor(Math.random() * 12);

  var blueCrystal = 1 + Math.floor(Math.random() * 12);

  var yellowCrystal = 1 + Math.floor(Math.random() * 12);

  var greenCrystal = 1 + Math.floor(Math.random() * 12);

  var crystalMath = "";

  var totalCrystals = 0;

  $("#totalScore").text(totalCrystals);

  console.log(redCrystal);
  console.log(blueCrystal);
  console.log(yellowCrystal);
  console.log(greenCrystal);


  $("#red").on('click', function() {

  

    //crystalTotal = parseInt(crystalTotal);
    //redNumber = parseInt(redNumber);

      //function myFunction() {
  //crystalTotal.push("redNumber");}

    //result = crystalTotal + redNumber;

    //$("#totalScore").text(myFunction);

    //console.log(result);

    //console.log(redNumber);
    //console.log(crystalTotal);
});
  

 

})


})






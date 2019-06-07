$(document).ready(function(){

// declare my variables

$("#startGame").on('click', function() {

  var number = 1 + Math.floor(Math.random() * 120) + 19;
  $("#randomNumber").text(number);

  var redCrystal = 1 + Math.floor(Math.random() * 12);

  var blueCrystal = 1 + Math.floor(Math.random() * 12);

  var yellowCrystal = 1 + Math.floor(Math.random() * 12);

  var greenCrystal = 1 + Math.floor(Math.random() * 12);

  var crystalMath = [];

  console.log(crystalMath);

  var totalCrystals = 0;

  $("#totalScore").text(totalCrystals);

  //console.log(redCrystal);
  //console.log(blueCrystal);
  //console.log(yellowCrystal);
  //console.log(greenCrystal);


  $("#red").on('click', function() {

    crystalMath.push(redCrystal);
  
    console.log(crystalMath);
  
    //remember to add the contents of the array and post to total


  });

  $("#blue").on('click', function() {

    crystalMath.push(blueCrystal);
  
    console.log(crystalMath);
  
    
  });
  
  $("#yellow").on('click', function() {

    crystalMath.push(yellowCrystal);
  
    console.log(crystalMath);
  
    
  });

  $("#green").on('click', function() {

    crystalMath.push(greenCrystal);
  
    console.log(crystalMath);
  
    
  });


    var sumArr = crystalMath;
  for (let i = 0; i < crystalMath.length; i++) {
    sumArr = array[i];
    
  }

  console.log(sumArr);
})



})






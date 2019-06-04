//jquery for random number generator

$("#startGame").on("click", function() {

      var random = Math.floor(Math.random() * 1000) + 1;

        // ... and then dump the random number into our random-number div.
        $("#random-number").text(random);


          
    
      })
  
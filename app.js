$(document).ready(function() {
  var victims = ["Erick", "Andres", "John", "Abdala", "Landy", "Manny"];

  //Create a new Date object
  var date = new Date();

  //Get the day of the date object
  var day = date.getDay();

  var todaysVictim;

  //Choose a person from the victims array at random
  var pickRandom = function (){
    todaysVictim = victims[Math.floor(Math.random() * victims.length)];
    return todaysVictim;
  };

  var makeCoffee = function (person) {
    //Call the function
    person();
    //If today is Monday (1) AND the person chosen was Abdala
    if(day === 1 && todaysVictim === "Abdala"){
      //As long as the person chosen is Abdala
      while(todaysVictim == "Abdala"){
        console.log("Abdala was picked");
        //Keep calling pickRandom();
        pickRandom();
      }
      //When some other than Abdala is chosen
      //return THAT person
      return todaysVictim;
    }

    //If today is Tuesday (2) AND Abdala is chosen OR Today is Tuesday (2) AND John is chosen
    else if (day === 2 && todaysVictim === "Abdala" || day === 2 && todaysVictim === "John") {
      //As long as the person chosen is either Abdala OR John
      while(todaysVictim == "Abdala" || todaysVictim == "John"){
        console.log("Abdala or John was picked");
        //Keep picking another person
        pickRandom();
      }
      //When the person chosen is not Abdala or John
      //Return THAT person
      return todaysVictim;
    }

    //If today is Thursday (4) AND Abdala has been picked
    else if(day === 4 && todaysVictim === "Abdala") {
        //As long as Abdala is chosen
        while(todaysVictim == "Abdala"){
          console.log("Abdala was picked");
          //Keep picking someone
          pickRandom();
        }
      //When someone new is picked return THAT person
      return todaysVictim;
    }

    else {
      console.log("else");
      //If nothing else just pick anyone
      return todaysVictim;
    }


  };


  var url = "https://hooks.slack.com/services/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";
  var text = "Why u no work?!";
  $.ajax({
      data: 'payload=' + JSON.stringify({
          "text": text
      }),
      dataType: 'json',
      processData: false,
      type: 'POST',
      url: url
  });
  $('.btn-pick').click(function(){
    $('h2').text(makeCoffee(pickRandom));
    $('h2').addClass('tada').one('animationend webkitAnimationEnd oAnimationEnd', function(){
      $('h2').removeClass('tada');
    });
  });

});

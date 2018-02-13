$(document).ready(function() {
  //The array of victims
  var victims = ["Erick", "John", "Abdala", "Landy", "Manny"];

  //Create a new Date object
  var date = new Date();

  //Get the day of the date object
  var day = date.getDay();

  var todaysVictim;

  //Choose a person from the victims array at random
  var pickRandom = function (){
    todaysVictim = victims[Math.floor(Math.random() * victims.length)];
    return todaysVictim;
  };//CLOSE pickRandom

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

  };//CLOSE makeCoffee

  //Call the function
  // makeCoffee(pickRandom);


  var url = "https://hooks.slack.com/services/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";
  var salty = "☕️ Time for Manny to make café. 👏🏽TATA TATATATA TATA👏🏽";
  var text = function () {
    //Old message:
    return "☕️ Time for " + makeCoffee(pickRandom) + " to make café. 👏🏽TATA TATATATA TATA👏🏽";
    //New Special Message:
    // return "🥜 Time for Salty Nutz to make café. 🥜 Maaaaaaannnniiiiiiiii 🥜 ";
  };//CLOSE text()


  var ajaxReq = function () {
      $.ajax({
          data: 'payload=' + JSON.stringify({
              //Call the text function which will execute makeCoffee(pickRandom);
              "text": text()
          }),
          dataType: 'json',
          processData: false,
          type: 'POST',
          url: url
      });
  };//CLOSE ajaxReq

  var specReq = function () {
      $.ajax({
          data: 'payload=' + JSON.stringify({
              "text": salty
          }),
          dataType: 'json',
          processData: false,
          type: 'POST',
          url: url
      });
  };//CLOSE ajaxReq

  //When the button gets clicked...
  $('.btn-pick').click(function(){
    //Call the AJAX and send :)
    ajaxReq();
    //Update the h2 with the var
    $('h2').text(todaysVictim);
    //Add the animation and do it EVERY time the button is clicked
    $('h2').addClass('tada').one('animationend webkitAnimationEnd oAnimationEnd', function(){
      $('h2').removeClass('tada');
    });
  });//CLOSE ('.btn-pick').click()

  $('#b-btn').click(function(){
    //Call the AJAX and send :)
    specReq();
    //Update the h2 with the var
    $('h2').text("Manny");
    //Add the animation and do it EVERY time the button is clicked
    $('h2').addClass('tada').one('animationend webkitAnimationEnd oAnimationEnd', function(){
      $('h2').removeClass('tada');
    });
  });

}); //CLOSE document.ready()

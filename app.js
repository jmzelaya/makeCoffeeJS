var victims = ["Erick", "Andres", "John", "Abdala", "Landy", "Manny"];

var date = new Date();
var day = date.getDay();

var date = new Date();
var day = date.getDay();


var todaysVictim;

var pickRandom = function (){
  todaysVictim = victims[Math.floor(Math.random() * victims.length)];
  return todaysVictim;
};

var makeCoffee = function (person) {
  person();
  if(day === 1 && todaysVictim === "Abdala"){
    while(todaysVictim == "Abdala"){
      console.log("Abdala was picked");
      pickRandom();
    }
    return todaysVictim;
  }

  else if (day === 2 && todaysVictim === "Abdala" || day === 2 && todaysVictim === "John") {
    while(todaysVictim == "Abdala" || todaysVictim == "John"){
      console.log("Abdala or John was picked");
      pickRandom();
    }
    return todaysVictim;
  }

  else if(day === 4 && todaysVictim === "Abdala") {
      while(todaysVictim == "Abdala"){
        console.log("Abdala was picked");
        pickRandom();
      }
    return todaysVictim;
  }

  else {
    console.log("else");
    return todaysVictim;
  }

};

makeCoffee(pickRandom);

$(document).ready(function() {
  $('.btn-pick').click(function(){
    $('h2').text(makeCoffee(pickRandom));
    $('h2').addClass('tada').one('animationend webkitAnimationEnd oAnimationEnd', function(){
      $('h2').removeClass('tada');
    });
  });
});


//John on Tuesday
//Abdala on Monday, Tuesday, OR Thursday
//If Sat or Sun do something funny

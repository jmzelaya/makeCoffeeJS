var victims = ["Erick", "Andres", "John", "Abdala", "Landy", "Manny"];

var date = new Date();
var day = date.getDay();


var todaysVictim;

var pickRandom = function (){
  todaysVictim = victims[Math.floor(Math.random() * victims.length)];
  return todaysVictim;
};

var makeCoffee = function (person) {
  person();
  if(day === 0 && todaysVictim === "Landy"){
    console.log("Landy was picked");
    while(todaysVictim === "Landy" && day === 0)
    return pickRandom();
  }
  else {
    console.log("else");
    return todaysVictim;
  }

};

makeCoffee(pickRandom);

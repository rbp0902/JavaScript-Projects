function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute" ];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays and Objects
function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "Barking";
    Dog_Picture[1] = "wagging its tail";
    Dog_Picture[2] = "playing";
    Dog_Picture[3] = "sleeping";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
        Dog_Picture[1] + "."; 
}

//Const Keyword
function constant_Function() {
    const Vehicle = {type:"SUV", brand:"Ford", color:"black" };
    Vehicle.color = "blue";
    Vehicle.price = "$35,000";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Vehicle.type + " was " + Vehicle.price + ".";

}

function constant_Function_2() {
    const Vehicle = {type:"SUV", brand:"Ford", color:"green" };
    Vehicle.color = "blue";
    Vehicle.price = "$35,000";
    Vehicle.model_year = "2020";
    document.getElementById("Constant_2").innerHTML = "The model of the " +
        Vehicle.brand +  " was " + Vehicle.model_year + ".";

}

//Let Function
function let_Function() {
{
    let X = 33;
    document.getElementById("Let").innerHTML = X;
}
}

// Return Statement
function return_Function() {
    return Math.PI;
    
  }

  document.getElementById("Return").innerHTML = return_Function();

// Return Statement example 2

document.getElementById("Return_2").innerHTML = return_Function_2("John");

function return_Function_2(name) {
  return "Hello " + name;
  
}

// Return Statement example 3

let D = return_Function_3(4, 3);
document.getElementById("Return_3").innerHTML = D;

function return_Function_3(a, b) {
    return a * b;
}

// Objects Assignment #55
let car = {
    make: "Ford ",
    model: "Focus ",
    year: "2020 ",
    color: "brown ",
    description : function () {
        return "My car is a " + this.year +  this.color + this.make + this.model + ".";
    } 
};
document.getElementById("Object").innerHTML = car.description();

//Loop with a break
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 4) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("Loop").innerHTML = text;












  
  
  

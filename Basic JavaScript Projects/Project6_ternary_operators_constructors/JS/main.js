
//Ternary Operators
//In this code, if your height is less than 52 it will say that you're too short to 
//ride, otherwise it tell you that your tall enough.
function ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

//JS keywords identify actions to be performed. For example: var is a keyword we use to assign variables.
//variables, this and new are keywords ; the Vehicle() is the object constructor
//for Erik
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erick drives a " + Erik.Vehicle_Color+ "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
//for Jack
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")
function myFunction_2() {
    document.getElementById("New_and_This").innerHTML = "Jack drives a " + Jack.Vehicle_Color+ "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}

//Nested Function
//this function would result to 100 
//A nested function is a function under another function that is connected somehow.
//had a starting point of 98 but with function under it would add 2 when returned
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 98;
        function plus_Two() {Starting_point += 2;}
        plus_Two();
        return Starting_point;
    }
}
//increment
function increment_Operator() {
    var x = 5;
    x++;
    document.getElementById("Increment").innerHTML = " 5 increment = " + x;
}

//decrement
function decrement_Operator() {
    var x = 5;
    x--;
    document.getElementById("Decrement").innerHTML = " 5 decrement = " + x;
}

//random
function random_Operator() {
    var x = (Math.random() * 100);
    
    document.getElementById("Random").innerHTML = " Random 0 to 100 = " + x;
}

//object method
function object_Method() {
    var x = Math.sqrt(81);
    document.getElementById("Object").innerHTML = " Square root of 81 = " + x;

}

//addition operator
function addition_Operator() {
    var x = 56 + 476;
    document.getElementById("Addition").innerHTML = " 56 + 476 = " + x;
}

//subtraction operator
function subtraction_Operator() {
    var x = 5847 - 849;
    document.getElementById("Subtraction").innerHTML = "5847 - 849 = " + x;
}

//multiplication operator
function multiplication_Operator() {
    var x = 4637 * 456;
    document.getElementById("Multiplication").innerHTML = "4637 * 456 = " + x; 
}

//modulus operator
function modulus_Operator() {
    var x = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of:  " + x; 
}

function My_First_Function() {              //Defining a function and naming it
    var str = "This text is green!";        //Defining a variable and giving it a 
                                            //string value
    var result = str.fontcolor("green");    //Using the fontcolor method on
                                            //str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value
                                                            //of result into HTML element with "Green_Text" id
}

function myFunction() {                     //Defining a function and naming it
    var sentence = "I am learning";         //Defining a variable and using += to 
    sentence += " a lot from my Web Development Course!"; //concatenate a string
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the result of concatenated string
                                                                // into HTML element with "Concatenate" id 
}
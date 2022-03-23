
//This operator gives the data type of a variable
function typeof_Word() {
document.getElementById("Word").innerHTML = (typeof "Word");//the output “string” we would write this JS code
                                                                // Or to output “number” we would write this way, e.g : document.write(typeof 3)

}

//This operator gives the data type of a variable
function typeof_Num() {
    document.getElementById("Num").innerHTML = (typeof 3);

}

//To display “infinity” (higher than our maximum floating point number), we would write any number larger than 1.7976931348623157E308
function infinity_Num() {
    document.getElementById("Infinity").innerHTML = (2E310);
}

//To display -Infinity, we would write any negative number that is -1.7976931348623157E308 or lower.
function infinity_Num_2() {
    document.getElementById("Infinity2").innerHTML = (-3E310);
}

//Using Boolean logic (i.e., the greater than operator and/or less than operator) to display true and false
function logic_True() {
    document.getElementById("Logic").innerHTML = (10 > 5);
}

//Using Boolean logic (i.e., the greater than operator and/or less than operator) to display true and false
function logic_False() {
    document.getElementById("Logic_2").innerHTML = (10 < 5);
}

//The console.log method can be used to display data in the console within the browser
function console_Method() {
    document.getElementById("Console").innerHTML = console.log(300 + 5);
}

//The type coercion converts the value to the type it chooses
function coerce_Type() {
    document.getElementById("Coerce").innerHTML = ("10" + 5);
}

//to show false in the console
function console_Method_2() {
    document.getElementById("Console_2").innerHTML = console.log(300 < 5);
}

//The "==" symbol is used to check for equality
function double_Equal() {
    document.getElementById("Double").innerHTML = (10 == 10);
}

//The "==" symbol is used to check for equality
function double_Equal_2() {
    document.getElementById("Double_2").innerHTML = (10 == 20);
}

//The "===" symbol is an instruction to check whether the data on the left side of the symbol is equal to the data 
//on the right side and that it is the same type of data as that on the right. The answer to this comparison is 
//an answer of "true" or "false."
function triple_Equal() {
    document.getElementById("Triple").innerHTML = (10 === 10 );
} 

function triple_Equal_2() {
    document.getElementById("Triple_2").innerHTML = (10 === "15" );
    
}

function triple_Equal_3() {
    document.getElementById("Triple_3").innerHTML = ("10" === 10 );
}

function triple_Equal_4() {
    document.getElementById("Triple_4").innerHTML = ("hello" === "world" );
}

//Logical Operator, In JavaScript, there are three Boolean logical operators:
    //AND written: && 
    //OR written: ||
    //NOT written: !
function logical_Operator() {
    document.getElementById("Logical").innerHTML = (5 > 2 && 10 > 4);
}

function logical_Operator_2() {
    document.getElementById("Logical_2").innerHTML = (5 > 10 && 10 > 4);
}

function logical_Operator_3() {
    document.getElementById("Logical_3").innerHTML = (5 > 10 || 10 > 4) ;
}

function logical_Operator_4() {
    document.getElementById("Logical_4").innerHTML = (5 > 10 || 10 > 20) ;
}


//The ! (not) operator checks whether or not something is true. If ___ is false, “true” will be returned
function not_Function() {
    document.getElementById("Not").innerHTML = ! (5 > 10);
}

















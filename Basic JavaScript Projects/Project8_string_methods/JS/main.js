function full_Sentence() {      //The concat() method concatenates (connects) two or more strings.
    var part_1 = "The quick ";  
    var part_2 = "brown fox ";
    var part_3 = "jumped over the ";
    var part_4 = "lazy dog. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4 );
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { // The slice() method is a string method that extracts a section of a string and then
    var Sentence = "The quick brown fox jumped over the lazy dog."; //the extracted section in a new string. 
    var Section = Sentence.slice(16,19); //example here is to extract "fox"
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase_Method() { //this method converts a string to uppercase letters
    let text = "Stay safe!";
    let result = text.toUpperCase();
    document.getElementById("Upper_Case").innerHTML = result;

}

function search_Method() { // this menthod searches a string for a value and returns the position of the first match
    let text = "The quick brown fox jumped over the lazy dog.";
    let position = text.search("fox");
    document.getElementById("Search").innerHTML = position;
}

function string_Method() { // this method assists one in working with numbers. There are several types – one is the “toString()” method
    var X = 123;            // returns a number as a string.
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { // this method formats a number to a specified length.
    var X = 1637378.58949;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
 
function fixed_Method() { // this converts a number to a string, rounded to a specified number of decimals
    let num = 8.123456789;
    let n = num.toFixed(5);
    document.getElementById("Fixed").innerHTML = n;
}

function value_Method() { // this method returns the primitive value of a string
    let text = "It's a beautiful day!";
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;

}


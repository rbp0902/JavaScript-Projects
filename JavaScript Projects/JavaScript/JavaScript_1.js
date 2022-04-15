function color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a nice color.";
    switch(Colors) {  //The switch statement performs different actions based on the 
        case "Red":     //conditions presented to it.  It is a type of conditional statement.
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
            default: // If there is no case match, the default keyword is used to specify what code to run. 
            Color_Output = "Please enter a color exactly as written on the above list.";        
    }
    document.getElementById("Output").innerHTML = Color_Output;
    
}

// getElementsByClassName() method 
function Hello_World_Function() { // relates to a class instead of an id.
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed."; // We have set the index value of variable A to 0, meaning it 
                                            //will now be displayed in the first element with the class “Click” (once the button is clicked).
}    


//HTML Canvas Graphics. Draw a Text
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "60px Times Roman";
ctx.fillText("Hello World!!!",20,50);


//createLinearGradient() Method
var c = document.getElementById("myCanvas_2");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

//createLinearGradient() Method
var c = document.getElementById("myCanvas_3");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);





  
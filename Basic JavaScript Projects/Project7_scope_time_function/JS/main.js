//a global variable would be written as follows:
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();



//a local variable would be written as follows:
function Add_numbers_3() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    document.write(y + 100);
}
Add_numbers_3();
Add_numbers_4();

//using console.log to debugg error 
function Add_numbers_5() {
    var y = 10;
    console.log(15 + y);
 }
 function Add_numbers_6() {
     console.log(y + 100);
  }
  Add_numbers_5();
  Add_numbers_6();

  //If Statements, take not nothing will happen if time is 6pm onwards
 function get_Date() {
     if (new Date().getHours() < 18) {
         document.getElementById("Greeting").innerHTML = "How's your day?";
     }
 }



  //If Statements
  function bigger_Number() {
      if (90 > 80) {
          document.getElementById("Bigger").innerHTML = "Yes, first number is bigger than the one on the left.";
      }
  }

  //Else and If Statements
  function bmi_Function() {
      BMI = document.getElementById("BMI").value;
      if (BMI >= 25) {
          Weight = "You are overweight and not in the healthy weight range!";
      }
      else {
          Weight = "You are not overweight!";
      }
      document.getElementById("Your_BMI?").innerHTML = Weight;
  }

  //Else If Statements
  function time_Function() {
      var Time = new Date().getHours();
      var Reply;
      if (Time < 12 == Time > 0) {
          Reply = "It is morning time!";
      }
      else if (Time > 12 == Time < 18) {
          Reply = "It is the afternoon.";
      }
      else {
          Reply = "It is evening time.";
      }
      document.getElementById("Time_of_day").innerHTML = Reply;
  }


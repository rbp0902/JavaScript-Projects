function my_Dictionary() { //Defining a function and naming it
    var Animal = {         //Defining a variable and giving it 
        Species:"Cat",     // values
        Color:"White",
        Breed:"Persian",
        Age:3,
        Sound:"Meow",        
    };
    delete Animal.Sound;   //the value of var Sound is deleted output would be "undefined"
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
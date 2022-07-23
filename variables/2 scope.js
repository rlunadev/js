//SCOPE VARIABLES
var newName = 'Juanito';
function getName() {
    var localName = 'Pepe';
    newName = 'Juanis';
    //dentro del scope
    console.log(newName); // Juanito
    console.log(localName);// Pepe
}
// console.log(newName);// Juanito
//getName();
// console.log(localName); // referenceError

// SCOPE IN DATA STRUCTURE
function getLastName() {
    if(true) {
        var newLastName = 'Mamani';
        let newAge = 40;
    }
    console.log(newLastName);//Mamani
    console.log(newAge); // referenceError
}

//getLastName();


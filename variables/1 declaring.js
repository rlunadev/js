    //declaring variables
    var name;
    console.log(name); // undefined

    //declaring multiples variables
    var age, color;
    console.log(age, color)// undefined, undefined

    //declaring without var
    lastName;
    console.log(lastName)// referenceError
    
    //set variables when it is created
    var firstName = 'Juan';
    console.log(firstName); // Juan
    var height = 15, isMarried = false, fullName = 'Juan Vargas'; //
    console.log(height, isMarried, fullName);


    //read variable when its declared return a error
    console.log(ci); //referenceError

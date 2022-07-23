//Variables Hoisting
var phone = 777;
function getPhone() {
    console.log(phone);
    var phone = 333;
    console.log(phone);
}

getPhone();


//SECOND EXAMPLE

function getAddress() {
    console.log(address);
    var address;
}

getAddress();
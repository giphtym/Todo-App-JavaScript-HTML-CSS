/**
 * functions
 * A block of code designed to perform a task
 */
function name(params) {
    
}

function car() {
let model = "Tesla";
let speed = "300/km";
let year = 2022;
let fuelType = "desiel"
let engiene = "strong";
let details = {
    name: model, 
    distance: speed,
    date: year, 
    fuel: fuelType,
    capacity: engiene,
}
return(details);
}
console.log(car());

// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// console.log(myFunction());

function addition() {
    let a = 34;
    let f = 43;
    let g = 50;
    let total = a + f + g;
    return total;
}
console.log(addition());

// Parameters and Arguments
// Parameters
function myUser(userName, userAge, userGender) {
    return{
        name: userName,
        age: userAge,
        gender: userGender,
    };
}
// passing arguments
console.log(myUser("Patoo", 40, "male"));

















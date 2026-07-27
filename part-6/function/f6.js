// Function Scope

// Variables defined inside a function are not accessible (visible) from outside the function.

// function calsum(a,b){
//     let sum = a+b //function scope 
// }
// calsum(1,2)
// console.log(sum); //this will give the error becuase sum is defined only on function block so that the function can be not access outside the function 



let sum = 54//global scope
function calsum(a,b){
    let sum = a+b //function scope 
}
calsum(1,2)
console.log(sum); //function scope


//but inside the function block the sum which to be use is inside one only , if fight occue between function scope and global scope then the function scope will win the match
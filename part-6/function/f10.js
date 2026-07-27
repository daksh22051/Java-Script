//what is the output of the code 
let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);

    function innerGreen() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();
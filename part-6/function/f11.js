//function expression
//addition example
const sum = function (num1 , num2){
    return num1+num2
}
console.log("sum = ",sum(12,12))


//multiplication example
const mul = function(num1 , num2){
    return num1 * num2
}
console.log("mul = ",mul(2,3));



//even_odd example
const even_odd = function(num1){
    if(num1>=18){
        console.log("eligible to vote");
    }
    else{
        console.log("not eligible to vote");
    }
    
}
even_odd(19)
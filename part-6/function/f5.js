//function with argument



function sum(a,b){
   return a+b
}
console.log(sum(5,5))



function avg(num1,num2,num3){
    avg = (num1+num2+num3)/3;
    return avg;
}
console.log("avg = ",avg(1,2,3));



function isAdult(age){
    if( age>=18){
        return 'Adult'
    }
    else{
        return 'not Adult'
    }
}
console.log(isAdult(20));

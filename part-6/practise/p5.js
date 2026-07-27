//add from 1 to n
let sum = 0
function add(num){
    for(let i=1;i<=num;i++)
    {
        sum = sum + i;
    }
   return sum;
}
console.log("sum = ",add(5));



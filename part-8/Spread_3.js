//spread using array literal

let arr = [1,2,3,4,5]
let newArr = [...arr]
console.log(newArr);

newArr.push(6)
console.log(newArr);



let char = 'hello'
console.log(...char);



let odd = [1,3,5,7]
let even = [2,4,6,8]
let nums = [...odd , ...even]
console.log(nums);

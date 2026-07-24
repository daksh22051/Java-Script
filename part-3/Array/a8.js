//Array reference

//in string 
let result = ("name"== "name")
console.log(result);

let result_1 = ("name" === "name")
console.log(result_1);





//but in array

let output_1 = ([1]==[1])
console.log(output_1);

let output_2 = ([1]===[1])
console.log(output_2);


// Array Reference (Short & Simple)

// Array is a reference type in JavaScript.

// When you create an array, the actual array is stored in memory, and the variable stores only the address (reference) of that array.

// let arr = [1, 2, 3];

// Memory:

// arr ─────► [1, 2, 3]
//           (stored in memory)
// Why does this return false?
// console.log([1] == [1]);    // false
// console.log([1] === [1]);   // false

// Because JavaScript compares references (memory addresses), not the values.

// [1] ─► Address A
// [1] ─► Address B

// Address A != Address B

// So the result is:

// false
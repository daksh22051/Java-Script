let arr = [1,2,3,4,5]
console.log(...arr);




let max = Math.max(1,2,3,4,5,6)
console.log("max = ",max); //this is will becuase it does not contain any array 

// let arr_1 = [1,2,3,4,5,6]
// let max = Math.max(arr_1)
// console.log("maximum element:",max); //this is will print becuase we have to accress the each index


let arr_2 = [1,2,3,4]
let maxi = Math.max(arr_2[0] , arr[1] , arr[2] , arr[3])
console.log("maximum is:",maxi);




//better wway
let array = [1,2,3,4,5,6,7,8,9,10]
let maximum = Math.max(...array)
console.log("max = ",maximum);
//better way to print maximum element using spread

//reduce function --> return the array to a single value 

let num = [1,2,3,4,5,6,7,8,9,10]
let finalVal = num.reduce((res , ele)=>{
    return res + ele  
})
console.log(finalVal);







//max with for loop
let arr = [1,2,5,6,7,5,4,3,56,7,7,5,4]
// let max = arr[0]
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log("max = ",max);

let max = arr.reduce((max , ele)=>{
    if(max < ele){
        return ele
    }
    else{
        return max
    }
})
console.log("max = ",max);

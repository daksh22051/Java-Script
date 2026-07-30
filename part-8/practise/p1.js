//check if all number in our array are multiple of 10 or not 

let arr = [10,20,30,40,50]
let ans = arr.every((ele)=>{
    return ele % 10==0
})
console.log(ans);
    


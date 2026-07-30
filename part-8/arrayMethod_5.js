//every function
let ans = [2,4,6].every((ele)=>{
    return ele % 2==0  
})
console.log(ans);



//to check all are positive or not
let ans_1 = [1,2,3,4].every((ele)=>{
    return ele>0;
})
console.log(ans_1);




//to check all student is pass or not
let marks = [45,67,35,43]
let ans_2 = marks.every((ele)=>{
    return ele >=35
})
console.log(ans_2);



//to check each contain string ot not 
let str = ["daksh","khamar","rahul"]
let result = str.every((ele)=>{
    return typeof ele == "string"
})
console.log(result);

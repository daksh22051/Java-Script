//find sum of a array using rest variable
function sum(...args){
    return args.reduce((sum,ele)=>{
        return sum + ele
    })
}
console.log(sum(-1,-2,-3,-4,-5));




//find min in a given array using a rest variable
function min(...args){
    return args.reduce((min,ele)=>{
        if(min>ele){
            return ele
        }
        else{
            return min
        }
    })
}
console.log(min(1,2,3,4,5));



//finding max in given array using rest variable
function max(...args){
    return args.reduce((max , ele)=>{
        if(max < ele){
            return ele
        }
        else{
            return max
        }
    })
}
console.log(max(1,32,3,45,5,6,7,4,3));

function add(a , b=5){
    return a + b
}
console.log(add(3));



//in default parameter try to give the default parameter as a last argument becuase for example:
// function addition(a=4,b){
//     return a+b
// }
// console.log(addition(8)) --(NAN)-->//in this program , we have given 8 as a argument it follows the order wise function due to this , a will converted to 8 because order wise system is followed



//correction
// function addition(b,a=4){
//     return a+b
// }
// console.log(addition(8)) //in this program , we have given 8 as a argument it follows the order wise function due to this , a will converted 



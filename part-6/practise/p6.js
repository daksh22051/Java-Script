//create a function that return the concatentation of all string in an array
let str = ["hi","hello","hellu","!"]

function concat(str){
    let result = ""
    for(let i=0;i<str.length;i++){
        result = result + str[i];
    }
    return result
}
console.log(concat(str));

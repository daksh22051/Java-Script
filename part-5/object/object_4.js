//js automically converts object key into string
//even if we made the number as a key ,the number will be converted to string

let detail = {
    1 : "A",
    2 : "B",
    null : true,
    undefined : true,
    true : "c",
};
console.log(detail);

//java script will take null as a strinng  , also undefined as a null
console.log(detail[1])
console.log(detail[2])
console.log(detail[null])
console.log(detail[undefined])
console.log(detail[true])

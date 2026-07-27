//higher order function 
// a function that does one or both
//  -> takes one or multiple function as argument
//  -> return a function



// function multipleGreet(func , count){
//     for(let i=1;i<=count;i++){
//         func()
//     }
// }

// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet,4)




function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func()
    }
}

    let greet = function () {
        console.log("hello");
    }
    multipleGreet(greet,4)
    greet()
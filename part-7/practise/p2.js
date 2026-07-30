//write a function that print a "hello world" 5 times at a interval od 2 second each

let id = setInterval(() => {
    console.log("hello world");
}, 2000);


//now we have to stop at 10 second
setTimeout(()=>{
    clearInterval(id)
},10000)
//rest agument

function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
}
sum(1,2,3,4,5)






function min(a,b,c,d){
    console.log(arguments); //no error
    console.log(arguments.length);
    // arguments.push(1) //push is of array function so it will can't define in argument which is not defined --> error
}
min(1,2,3,4)  //all the argument will be print      
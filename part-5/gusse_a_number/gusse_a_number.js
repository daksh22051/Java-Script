const max = parseInt(prompt("enter the max number:"))
const num = Math.floor(Math.random()*max)+1

let guess = prompt("guess the number:")
while(true){
    if(guess =="quit"){
        console.log("quitinh the game.....");
        break;
    }
    guess = parseInt(guess)
    if(guess==num){
        console.log("congrulation , you have chosen the right num");
        break;
    }
    else if(guess <num ){
        guess = prompt("gusse is too small , please try again");    
    }
    else{
        guess = prompt("gusse is too large , please try again");        
    }
}
    // else{
    //     console.log("wrong guess");
    //     guess = parseInt(prompt("enter the number again:"))
    // 

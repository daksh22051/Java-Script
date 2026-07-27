//function with conditional statement
function eligibleToVote() {
    let age = parseInt(prompt("enter you num:"))
    if (age >= 18) {
        console.log("you are eligible to vote");
    }
    else {
        console.log("not eligible to vote");
    }
}
eligibleToVote()
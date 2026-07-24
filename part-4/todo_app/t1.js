let todo = [];
let req = prompt("enter your task:");

while (true) {
    console.log("req =", req);
    console.log("todo =", todo);

    if (req == "quit") {
        console.log("quitting");
        break;
    }

        
    if (req == "list") {
        console.log("LIST COMMAND");
        for (let a of todo) {
            console.log(a);
        }
    }
    else if (req == "add") {
        let task = prompt("Enter task:");
        todo.push(task);
        console.log("Task added");
    }

    req = prompt("enter your task:");
}
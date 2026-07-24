const fav_movie ='Kill';
let gussess = prompt("enter you fav moive:")

while(gussess!=fav_movie)
{
    
    if(gussess==="quit")
    {
        console.log("you have quit the game");
        break;
    }
    console.log("you have chosen incorrect moive");
    gussess = prompt("enter you fav moive again:")
}
if(fav_movie==gussess)
{
    console.log(("you have chosen the correct movie"));
    
}


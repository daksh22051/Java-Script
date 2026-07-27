let odd = function(n){
    console.log(n%2==1);
}
odd(7)


let even = function(n){
    console.log(n%2==0);
}
even(8)




function oddOrEvenFactory(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(n%2==1);
        }
        return odd;
    }
    else if(request=="even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("invalid request");
    }
}
let request = "odd"
let func =  oddOrEvenFactory(request)
func(5)
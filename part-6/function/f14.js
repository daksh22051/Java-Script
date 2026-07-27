//methods

const calculator = {
    add : function(a ,b){
        return a+b;
    },
    sub : function(a ,b){
        return a-b;
    },
    mul : function(a ,b){
        return a*b
    },
};
console.log(calculator.add(1,2))
console.log(calculator.sub(2,1))
console.log(calculator.mul(7,8))



//method (shortand)
const calculator_1 = {
    add(a, b){
        return a +b
    },
    sub(a,b){
        return a-b
    },
    mul(a,b){  
        return a*b
    }
};
console.log(calculator_1.add(1,2))
console.log(calculator_1.sub(2,1))
console.log(calculator_1.mul(7,8))
      
// const student = {
//     name : "daksh",
//     age : 20,
//     place : "ahmedabad",
//     num_1 : 80,
//     num_2 : 80,
//     getSum(){
//         let sum = this.num_1 + this.num_2 //this key word is use because direct access nhi hota variable
//         console.log("sum =",sum);
//     }
// }
// console.log(student);
// console.log(student.getSum());



const student = {
    name : "daksh",
    age : 20,
    sem : "SEM5",
    eng : 99,
    math : 78,
    hindi : 89,
    getAvg(){
        let avg = (this.eng + this.math + this.hindi)/3
        console.log(avg);
        
        console.log(`${this.name} got ${avg} marks`);
    }
}
console.log(student.getAvg());




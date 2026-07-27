// 1. Global Scope 🌍

// 👉 Jo variable function ke bahar declare hota hai, usse poore program me access kar sakte hain.

let country = 'india'
function showCountry(){
    console.log(country);
}
console.log(country)
showCountry()
// Output
// India
// India
// Memory Trick
// Global Variable
//       │
//       ├── Function 1 ✅
//       ├── Function 2 ✅
//       └── Outside Function ✅
// 2. Function Scope 🔒

// 👉 Jo variable function ke andar declare hota hai, usko sirf usi function ke andar use kar sakte hain.

function student() {
       let name = "Daksh"; // Function Scope
    console.log(name);
}

student();

// console.log(name); // Error
// Output
// Daksh
// ReferenceError: name is not defined
// Memory Trick
student()
{
   name = "Daksh"

//    ✅ Accessible Here
}

// ❌ Outside Function
// 3. Lexical Scope (Nested Function) 🧠

// 👉 Inner function apne outer function ke variables ko access kar sakta hai.

function college() {

    let collegeName = "NLJIET";

    function student() {
        console.log(collegeName);
    }

    student();
}

college();
// Output
// NLJIET
// Memory Trick
college()
{
//    collegeName

    //   │
    //   ▼

   student()
   {
    //   ✅ collegeName Accessible
   }
}
// Opposite of Lexical Scope ❌

// Outer function inner function ke variable ko access nahi kar sakta.

function college() {

    function student() {
        let name = "Daksh";
    }

    console.log(name); // Error
}

college();
// Output
// ReferenceError: name is not defined


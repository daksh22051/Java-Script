//1.) "good string" is a string that starts with the letter 'a' & has a length > 3.

// Write a Program to find if a string is good or not.

let name = 'am' //good string
let name_1 = 'apple' //good string
let name_2 = 'am' //bad string
console.log(name);
console.log(name_1);
console.log(name_2);

 
if((name[0]=='a')&&(name.length>=3))
{
    console.log(`${name} is a good string`);
}
else
{
    console.log(`${name} is a bad string`);
    
}
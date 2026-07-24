// //2
// For the given start state of an array, change it to final form using splice.

// Start:

// ['january', 'july', 'march', 'august']

// Final:

// ['july', 'june', 'march', 'august']

let months = ['january', 'july', 'march', 'august']
months.splice(0,4)
console.log(months);

months.splice(0,0,'july', 'june', 'march', 'august')
console.log(months);

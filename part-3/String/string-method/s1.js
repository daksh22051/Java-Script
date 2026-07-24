//String-method



//1.)---> Trim method
let msg = '      hello    '
console.log(msg);
console.log(msg.trim());




//password spaces removal
let psd = prompt("enter you password")
let new_psd = psd.trim()
console.log((new_psd));



//so orginal psd one string does not change , the remove space new string is created , orginal string remain as it iss , new string is created wit no spacess , so string are immutable
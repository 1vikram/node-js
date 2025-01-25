let age = "21abc"
//let age = null  // use when want to chek about null
//let age = true
//let age = undefined
console.log(typeof age);
console.log(typeof (age));

//conversion string to number
let valueInNumber = Number(age) // dhyan rakhne ki 'Number'use kiya jata h kisi ko number formate me change krne ke liye
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(valueInNumber);//output is NaN because it is also a datatype (given string in number_alphabate(21abc)type )
let value = null
console.log(typeof value);//output is 0

/*
"33"=>33
"33abc"=> NaN
true => 1 ; false => 0
*/

//conversion number to boolean 
let isLoggedIn = 1

let chekValue = Boolean(isLoggedIn)
console.log(chekValue);

/*
1 => true; 0 => false
"" => false
"vikram" => true
*/ 

// number to string
let number = 19
let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

//***************************************  OPERATTION  ***************************************


const name = "vikram "
const DOB = 19
//console.log(name + DOB + " hello");  this is outdated
console.log(`my name is ${name} and my DoB is ${DOB}`); //called string interpolution and right top corner
const myName = new String("vikram")
console.log(myName);        // run 2 lines in inspect and you get new thing try it
console.log(myName[0]);     // output is v 
console.log(myName.__proto__);
console.log(typeof myName); // output -> object
console.log(myName.length);
console.log(myName.toUpperCase()); // output -> VIKRAM
console.log(myName.charAt(3));     // to find the charater at index number
console.log(myName.indexOf('r'))   // to find the inderx number of character

const newName = myName.substring(0,4) 
console.log(newName);              // output -> vikr

const anotherString = myName.slice(-5,4)  // start form -ve value
console.log(anotherString);

const newAnotherString = "     vk    "
console.log(newAnotherString);
console.log(newAnotherString.trim()); // used for removing unwanted space

const url = "https://vikram.com/vikram%20kumar" // replace the value or any part of string
console.log(url.replace('%20','-'));

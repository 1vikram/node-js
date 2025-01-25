const score = 200
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toLocaleString().length); // 3
console.log(balance.toFixed(2));  // 100.00

const otherNumber = 24.8965
console.log(otherNumber.toPrecision(3));  // give the max mumber in round of -> 24.9

const num1 = 100000000
console.log(num1.toLocaleString());    // addingthe comma as US standaed -> 100,000,000

//++++++++++++++++++++++++++++++++++++ MATHES +++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-100)) // convert -ve number to positive
console.log(Math.round(4.4)); // use for round of the value
console.log(Math.ceil(2.01));  // -> 3
console.log(Math.floor(4.9));  // -> 4
console.log(Math.min(5,3.,6,36,7,)); // to get minmum vlaue -> 3
console.log(Math.max(4,46,8,4,5,6,4546,3,6,3));  // to get maximum value  -> 4546
console.log(Math.random());  // give the value between 0 and 1 
console.log((Math.random()*10)+1); // always give the vlaue more then 1

console.log(Math.floor(Math.random()*10)); // get random round off value 

const min = 10
const max = 20

console.log(Math.floor (Math.random() * ( max - min + 1) + min)); // give the value b/w max and min


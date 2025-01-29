// Array
const arr1 = [0, 1, 2, 3, 4, 5]
console.log(arr1);
//console.log(arr1[3]);
const arr2 = new Array(1,2,3,4,5,6,7)
//console.log(arr2);

// Array methods

arr1.push(6)
//console.log(arr1);  // ->[1, 2, 3, 4, 5, 6]

arr1.pop()  // -> only remove the last element of array 
//console.log(arr1);  //-> [1, 2, 3, 4, 5]

//console.log(arr1.includes(9)); //-> to check exist or not (boolean)
//console.log(arr1.indexOf(9)); // -> -ve number meen don't exist

const arr3 = arr1.join() // convert array to string
//console.log(arr3);


// slice, splice

console.log("A ", arr1);
const arr4 = arr1.slice(1,4)
console.log(arr4);

console.log("B ", arr1) // original array after "slice" with B name
const arr5 = arr1.splice(1,4)
console.log(arr5);
console.log(arr1);// original array after "splice"
// slice can't change the original array but...
// splice can change the original array and put out given values
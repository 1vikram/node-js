const marvel_heros = ["ironman", "thor", "spiderman"]
console.log(marvel_heros);

const dc_heros = ["batman", "superman", "flash"]
console.log(dc_heros);

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //->superman

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // used for adding more then one string/array
console.log(all_new_heros);
 
const arr1 = [1, 2, 3, [4, 5], 6, [6, 7, [8, 9]]]
const arr2 = arr1.flat(Infinity) // infinity is the depth which is used for how much we want to assamble arrays
// flat is used to assamble all the arrays in given single array 
console.log(arr2);

console.log( Array.isArray("vikram"));
console.log(Array.from("vikram"));
console.log(Array.from({name: "vikram"}));// interesting case give empty array / confuse which is convert in array key or string

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));// used for making a simple and new array 

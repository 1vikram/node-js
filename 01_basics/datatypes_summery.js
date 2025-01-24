// Datatypes are defined in 2 types (1. primitive 2. non-primitive)
// primitive : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 299
const scoreValue = 38.4
const isLoggedIn = false
const temprature = null
let userEmail;  // let userEmail = undefined -> ese bhi defined ke skte hai
const id = Symbol('23')
const id2 = Symbol('23')

console.log(id===id2);  // both are not same 'Symbol is used for defined a unique id or data

const bigNumber = 4543656464353646453n  // 'n' is used for give a big number

// Reference(nonprimitive): Array, Objects, Function

const heros = ["ironman","thour","antman","brusebanner"];
let myObj = {
    name: "vikram",
    age: 21
}  // objects are defined in {} 

let myFunction = function(){
    console.log("hello VIKRAM");    
}
console.log(myFunction);

// some predefined data types when we watn to get by "typeof"

// 1. primitive datatypes
// Number    -> number
// String    -> String
// Boolean   -> boolea
// Null      -> object
// undefined -> undefined
// Symbol    -> Symbol 
// BigInt    -> BigInt

//2. nonprimitive or reference datatype
// Array     -> Object
// function  -> Function
// Object    -> Object
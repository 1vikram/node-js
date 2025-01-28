let myDate = new Date()  // date is an object
console.log(myDate.toString());
console.log(myDate.toDateString())     // give day and date
console.log(myDate.toLocaleString());  // only date and time

let myCreatedDate = new Date(2003,9,19)
let anotherWayDate = new Date("10-19-2003")  // dd-mm-yy formate but write in mm-dd-yy formate
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toLocaleString());
console.log(anotherWayDate.toLocaleString())

// js me months 0 se start hote hai

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());  // mili sec till now
console.log(Math.floor(Date.now()/1000));  // sec till now

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());  // monday se start hote h days

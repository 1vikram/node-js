// objects are created by two ways 1. Constructor 2. singleton
// object me key and vlaue dono define kr skte hai

const symbol = Symbol("key1")

const obj1 = {
    name: "vikram",
    mob: 9610026027,
    location: "hanumangarh(Raj)",
    gmail: "vikram@gmail.com",
    isLogedIn: false,
    [symbol]: "key1" // way to represent key 
}
console.log(obj1);

// ways to access element of object

console.log(obj1.name);
console.log(obj1["name"]); // brtter way to access the element
console.log(obj1[symbol])  // only way to access symbol 
console.log(typeof obj1[symbol]);

obj1.gmail = "vikramkumar@gmail.com" // overwrite the data
console.log(obj1);

Object.freeze(obj1) // used for freeze the data of object(here) can't cangable
obj1.gmail = "vk@gmail.com"
console.log(obj1);

// creating function in objects

obj1.greeting = function(){
    console.log("hello VK kese hai aap!");
}
console.log(obj1.greeting());

obj1.greeting02 = function(){
    console.log(`hello kese hai aap! ${this.name}`);
}
console.log(obj1.greeting02());

// Ways to create objects

// 1. singleton -> made from constructor
//Object.create

// 2. literals

const mySym = Symbol("key1")

const jsUser = {

    name: "Aqsa",
    "full name": "Aqsa Imtiaz", // cant be accessed using .. use square notation
    [mySym] : "MyKey1", 
    age: 18,
    location: "USA",
    email: "aqsa.imtiaz@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Mon", "Tues"]

}

console.log(jsUser['name']);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

//Object.freeze(jsUser) // freeze thoe object for further changes


jsUser.greeting = function() {
    console.log("Hello JS User");
}

jsUser.greeting();

jsUser.greeting1 = function() {
    console.log(`Hello JS user, ${this["full name"]}`);
}

jsUser.greeting1()
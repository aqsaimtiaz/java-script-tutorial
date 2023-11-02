// Primitive, call by value
    // String
    // number
    // boolean
    // null
    // undefined
    // symbol
    // Big int

// non-primitive, call by reference
    // Object
    // Arrays
    // functions

// JS is dynamically typed as it doesn't require data type to be told

const id = Symbol('123')
console.log(id.description);

const id1 = Symbol('123')
console.log(id1.description);

console.log(id == id1);

const fruits = ['Apple', 'orange', 'banana']
console.log(fruits);

const obj = {
    name: "Aqsa",
    desig: "CEO"
}
console.log(obj);

const fun = function() {
    console.log("Hello this is a function");
}

fun();


///////////////////////////////////////////////////////////////////////

// Memeory types:
    // Stack: Used in primitive type, we get a copy of variable
    // Heap: Used in non-primitive, we get reference of original object, so change is reflected in original value


let myYTname = "aqsabytes.com"
let anotherName = myYTname
anotherName = "newname"

console.log(myYTname);
console.log(anotherName);

let userOne = {
    email: "user1@example.com",
    upi: "user1"
}

let user2 = userOne

user2.upi = "user2"

console.log(userOne);
console.log(user2);

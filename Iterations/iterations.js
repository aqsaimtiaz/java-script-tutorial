for (let i = 0; i <= 10; i++) {
    const element = i

    if(element === 5) 
    {
        console.log("5 is the best number");
    }

    console.log(element);
    
}


//////////////// Nested Loop

for (let i = 0; i < 10; i++) {

    console.log(`outer loop value ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop value ${j}`);
        
    }
}


////////// while loop
let p=0
while (p < 5) {
    
    console.log(`hey while ${p}`);
    p++;
}


///// do while loop
let q = 0
do {

    console.log(`hey do while ${q}`);
    q++;

} while (q < 5);



// array specific loop
/// for of loop

const arr = [1,2,3,4,5]

for (const iterator of arr) {
    console.log(`hey for of ${iterator}`);
}


for (const iterator in arr) {
    console.log(`hey for in ${iterator}`);
}


const greetings = "Hello world"
for (const greet of greetings) {
    
    console.log(`Each char 'of' ${greet}`);
}

for (const greet in greetings) {
    
    console.log(`Each char 'in' ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India") // only unique value

console.log(map);


for (const key of map) {
    console.log(key);
    
}


for (const [key,value] of map) {
    console.log(key, ":", value);
    
}


const myObject = {
    'game1' : "pubg",
    'game2' : 'freefire'
}

// in loop is used for object

for (const iterator in myObject) {
    
    console.log(iterator);
}

for (const key in myObject) {
    
    console.log(key,":-",myObject[key] );
}


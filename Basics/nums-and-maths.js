const score = 400
console.log(typeof score);

// explicit data type 
const balance = new Number(100)
console.log(balance);
console.log(typeof balance);

console.log(typeof balance.toString());

console.log(Math.ceil(4.2))
console.log(Math.floor(4.9));
console.log(Math.min(3,2,4,5,9));
console.log(Math.max(3,4,5,3,2));

console.log(Math.random());
console.log((Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
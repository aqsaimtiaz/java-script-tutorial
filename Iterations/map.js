const myNumbers = [1,2,3,4,5,6,7,8,9,10]


let n1 = myNumbers
.map((n) => { return n + 1})
.map((n) => {return n*2})
console.log(n1);

n1 = myNumbers
.map((n) => {return n*2})
console.log(n1);
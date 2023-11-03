let myarray = [1,2,3,4,5]
console.log(myarray);

const myarray1 = [1,2,'3',4,5,true]
console.log(myarray1);

let myarray2 = [myarray, myarray1]
console.log(myarray2);


console.log([myarray, ...myarray1]);
console.log([...myarray, myarray1]);


let myarray3 = [...myarray, ...myarray1]
console.log(myarray3);

///// Array Methods

myarray.push("ok")
console.log(myarray);

myarray.pop() // removes last value
console.log(myarray);

myarray = myarray.concat(myarray1)
console.log(myarray);

myarray.unshift(100)
console.log(myarray);

myarray.shift()
console.log(myarray);

console.log(myarray.includes(7));

const newArr = myarray.join();
console.log(newArr);

// slice, splice

console.log("A ", myarray);

const myn1 = myarray.slice(1,3) // returns sction of array
console.log(myn1);

const myn2 = myarray.splice(1,3) // removes the respective index values from the orignal array
console.log(myn2);
let score = 33
console.log(typeof(score));

score = "33"
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

score = "33abc"
valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log((valueInNumber)); 

// "33" -> 33
// "33abc" -> NaN, but type is number
// true -> 1; false -> 0
// null -> 0
// undefined -> 1

let num = 33
let stringNumber = String(num)
console.log(stringNumber);
console.log(typeof stringNumber);



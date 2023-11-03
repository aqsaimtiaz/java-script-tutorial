const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc = ['superman', 'flash', 'batman']

marvel_heros.push(dc);
console.log(marvel_heros);

let allheros = marvel_heros.concat(dc)
console.log(allheros);

const allNewHeros = [...marvel_heros, ...dc] // spread operator, gives same output as concat
console.log(allNewHeros);

const arr1 = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]
const arr2 = arr1.flat(Infinity)
console.log(arr2);

console.log(Array.from('Aqsa'));

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));
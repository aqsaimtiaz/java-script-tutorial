let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());


let myCreatedDate = new Date(2023, 6, 23)
console.log(myCreatedDate.toDateString());

let myD = new Date("2023-01-12")
console.log(myD);


let myTimeStamp = Date.now() // returns milisec from 1970
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
     weekday: "long",
     day:"2-digit",
     month:"long"
})

console.log(newDate.toDateString());
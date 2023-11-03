/*function addTwoNumber(number1, number2) {
    console.log(number1+number2)
}*/

function addTwoNumber(number1, number2) {
 
    return number1 + number2;
}

const res = addTwoNumber(2,3)
console.log(res);

function login(username) {
    return `${username} logged`
}

console.log(login("Aqsa"))

const user  = {
    userame: "hitesh",
    price: 200
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.userame} and price is ${anyObject.price}`);
}

handleObject(user)


function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue([3,4,5,6,7]));


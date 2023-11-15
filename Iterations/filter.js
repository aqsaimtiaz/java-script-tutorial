const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (n) => n > 5)
console.log(newNums);

const newNums1 = myNums.filter( (n) => {
    return n > 5
})

console.log(newNums1);

const numA = []
myNums.forEach((n) => {

    if(n > 5) {

        numA.push(n)
    }
})

console.log(numA);
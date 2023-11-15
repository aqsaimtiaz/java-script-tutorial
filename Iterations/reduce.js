let nums = [1,2,3]

nums = nums.reduce((acc, currVal) => {return acc+currVal}, 0)
console.log(nums);

///

let shoppingCart = [
    {
        name: "A",
        price: 100
    },
    {
        name: "B",
        price: 200

    },
    {
        name: "C",
        price: 300

    }
]

shoppingCart = shoppingCart.reduce((acc, item) => {return acc + item.price}, 0)
console.log(shoppingCart);

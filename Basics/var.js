// var => When the variable do not have to deal with block or functional scope


// No block scope encountered

var name = "Aqsa"
console.log(name)

// lets update the value of this variable
name = "Ali"
console.log(name);

// ----------------------------
// No matter in which block var is declared, it becomes accessible in all the code
// var is not recommended to use due to its global scope property

var age = 18
if(age > 18) {

   var status = "Adult" // here the status should be only confined to this block scope

} else {
    status = "Teen" // this block should ideally not have access to the status variable because it was declared in other block
}

console.log(status);
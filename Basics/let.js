// let => When the variable have to deal with block or functional scope

let name = "Aqsa"
console.log(name)

// lets update the value of this variable
name = "Ali"
console.log(name);

// ----------------------------
// No matter in which block var is declared, it becomes accessible in ONLY that respective scope

let age = 18
if(age > 18) {

   let status = "Adult" // here the status should be only confined to this block scope

} else {
    let status = "Teen" 
}

console.log(status); // this block do not have access to the status variable because it was declared in other block

/* 
console.log(status);
            ^
ReferenceError: status is not defined
*/
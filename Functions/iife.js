// Immediately imovked function expression (IIFE)

// used when there is chance of polution due to scope of global variables

(function chai () { // named iife
    console.log("DB Connected");
})(); // semi colon must be there to end the scope of iife function, otherwise rest of below functions wont execute


// can also be written as arrow

( () => {
    console.log("Connected 2");
})();

//()           ()
//definition   execution


( (name) => {
    console.log(`${name}`);
})('Aqsa');
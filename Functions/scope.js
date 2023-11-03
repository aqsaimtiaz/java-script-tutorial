function one() {
    const username = "Aqsa"

    function two() {
        const website = "youtube"
        console.log(username);
        console.log(website);

    }
   // console.log(website); ERROR due to scope restriction

    two()
}

one()

//---------------
add() // Can use this syntax
function add() {

}

//addTwo()  :: Error cant access this format before declaration
const two = function addTwo() {

}
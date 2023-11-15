const coding = ['js', 'java','ruby','python', 'cpp']

coding.forEach((p) => {console.log(p);})

function printMe(item) {
    console.log("hey ",item);
}

coding.forEach(printMe)


////////

const myCoding = [
    {
        langName:"javascript",
        exten:"js"
    },
    {
        langName:"java",
        exten:"java"

    },
    {
        langName:"python",
        exten:"py"

    }
]

printCoding = function(object) {

    console.log("from fun",object.langName, object.exten);
}

myCoding.forEach(printCoding)

myCoding.forEach( (lang) => {
    console.log(lang.langName, ":", lang.exten);
})
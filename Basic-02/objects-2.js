// singelton
//const tinderUder = new Object();


const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "Aqsa"

console.log(tinderUser);

const regularUser = {
    email: "aqsa.imtiaz@google.com",
    fullname: {
        fname: "Aqsa",
        lname: "Imtiaz"
    }
}

console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1, obj2, obj5)
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));

const course = {

    name: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"

}

// course.courseInstructor

// another syntax

const {courseInstructor} = course
console.log(courseInstructor);


const {name : n} = course
console.log(n);
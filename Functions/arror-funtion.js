const user = {
    username: "Aqsa",
    price: 99,
    welcomeMsg : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMsg()

user.username = "sam"
user.welcomeMsg()

const add = (n1, n2) => {
    return n1 + n2; // return is mandatory when {} is used (Explicit return). Useful when  working with objects
}

const add1 = (n1, n2) => (n1+n2) //  no need to use return when wrapper in () in arrow function (implicit return)
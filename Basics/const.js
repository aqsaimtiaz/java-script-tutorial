// const -> Use where we do not want to change the value of a variable once declared
const notificationName = "Subscribed_Susccessful"
console.log(notificationName);

// lets try to update the value of const variable
notificationName = "Subscriber_Successful_Updated"
console.log(notificationName);

// Following Error will be shown in console
/*
notificationName = "Subscriber_Successful_Updated"
                 ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (C:\Users\pc\Documents\JS-hindi\java-script-tutorial\Basics\const-var-let.js:8:18)
*/



//let var and const
//do not use var because of issue in block scope and fucntional scope
 
let accountId=523
const name="Akshansh"
var salary=3000000

name="somethingelse"
/*cannot change name as it is defined using const variable*/

//always use let variable because of issue in function and block scope in case of var

console.log(name)
const score=40
console.log(score)


const balance=new Number(10)// 100% guarantee that it wll be a number
console.log(balance)
console.log(balance.toFixed(2))// do decimal place tak 10.00

let otherValue=128.8966
console.log(otherValue.toPrecision(3))  //precision upto three places 129

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN')) // 1,00,000 according to indian format

/* ++++++++++++++++++++++++   MATHS  +++++++++++++++++++  */

console.log(Math.abs(-5))
console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.8)) //4
console.log(Math.round(4.6)) //5 simple round off


console.log(Math.random()) //NOTE- Math.random() always give values between 0 and 1

//if we need values from 1 to 10 then 
console.log(Math.random()*10 + 1)

//if we need values between 10  and 20

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))
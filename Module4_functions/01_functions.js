function addTwoNumber(number1,number2){
    let result= number1+number2

    return result
}
const result=addTwoNumber(4,5)

console.log("result :" + result)
//++++++++++++++//

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600))// [ 200, 400, 600 ]
//+++++++++++++++//

const user={
    name:"darkworld",
    price:"250"
}

function handleObject(anyobject){
 console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}
handleObject(user)
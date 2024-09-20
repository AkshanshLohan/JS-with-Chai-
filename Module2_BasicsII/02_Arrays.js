const marvelheros=["thor","ironman","spiderman"]
const dcheroes=["superman","flash","batman"]

marvelheros.push(dcheroes)
console.log(marvelheros)// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelheros[3][1])// flash

const fruits=["apple","banana","bananakepapa"]
const vegetables=["potato","cucumber","ladyfinger"]

const both=fruits.concat(vegetables)//concat combines both array and returns a new array
console.log(both)// ["apple","banana","bananakepapa","potato","cucumber","ladyfinger"]

//best way to add two array elements-using spread
const array1=["krishlay","sumit","nitin"]
const array2=[500,1000,2000]
const newarr=[...array1,...array2]// every element of array one by one
console.log(newarr)

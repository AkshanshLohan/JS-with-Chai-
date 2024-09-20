const myArray=[0,1,"haha",true]
//array can store multiple types of data in js 

// NOTE- Arrays in js are resizable

//Array methods"
myArray.push("sher")//sher will be added to th last index
console.log(myArray)

myArray.unshift(9)//used for insertion from front
console.log(myArray)

const newarr=myArray.join()//join isko string me convert krdega

console.log(myArray)
console.log(typeof newarr)//string

const a=myArray.slice(1,3)// 1 se leke 2 index tak
console.log(a)
console.log("A",myArray)// A [ 9, 0, 1, 'haha', true, 'sher' ]

//NOTE- when we use slice method there will be no change in original array




const b=myArray.splice(1,3)// 1 se leke 3 index tak

console.log("B", myArray)// B [ 9, true, 'sher' ]
console.log(b)
//NOTE- When we use splice method original array will get spliced

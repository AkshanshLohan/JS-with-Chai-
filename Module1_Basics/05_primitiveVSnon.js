//primitive vs non primitive data types

//primitive- stack memory is used for primitive
 
//7 types: boolean,string,number,null,undefined,Symbol,BigInt
const id= Symbol("23")
const id2=Symbol("23")
console.log(id===id2)


//Non primitive(reference types)- heap memory is used for non primitive

//Arrays,Objects,Functions

let a="initial"
let b=a;
b="change in value"

console.log(a)
console.log(b)

let user={
    email:"xyz@gmail.com",
    mobile:"8533049958"
}
let copy=user
copy.email="hitesh@gmail.com"
//copy mai changes krne par user me bhi changes ho jayege
console.log(user)
console.log(copy)


const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akshansh",
            lastname: "chaudhary"
        }

    }
}
console.log(regularUser.fullname.userfullname.lastname)

/* ++++++++++++++++++++ */

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign( {} ,  obj1,  obj2)//{}-target,  obj1,obj2,.... -Source
//combines all source values and assigns them to the target
//but use spread mostly

const obj4={...obj1, ...obj2}
console.log(obj4)

const users=[
    {
        id:1,
        email:"akshu@gmail.com"

    }
    ,{
        id:2,
        email:"ak@gmail.com"
    }
    ,
    {
        id:3,
        email:"aksh@gmail.com"
    }
]

console.log(users[1].email)
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))


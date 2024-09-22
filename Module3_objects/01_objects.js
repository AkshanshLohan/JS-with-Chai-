//singleton  by constructor
//object.create

//object literals
const mysym=Symbol("key1")

const jsuser={name:"akshu",
    "full name" :"Akshansh Chaudhary",
     mob:"9090909090", 
     [mysym]:"mykey1",//we have to use square bracket for symbol
     age:"18",
     logindays:["mon","sat"]
    }

    console.log(jsuser.age)
  //  console.log(jsuser.full name) //error cannot access it using dot
    console.log(jsuser["full name"])
    console.log(jsuser[mysym])

    jsuser.greeting=function(){
      console.log(`hello my name is, ${this.name}`)
    }
    console.log(jsuser.greeting())
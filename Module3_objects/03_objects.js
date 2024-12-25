//de structuring- It is just syntactical sugar
const course={
    coursename:"dsa in java",
    price:"1999",
    courseinstructor: "akshansh"
}

const {courseinstructor: instructor}=course// curly brackets ka syntax dekhke smjh jao ki yaha par de structuring ki ja rhi h
console.log(courseinstructor)//akshansh

// const fruits =["Apple","Dedi","Orange"];
// //forEach
// fruits.forEach(function(fruit){
//     console.log(fruit)
// })

// const numbers = [1,2,3,4,5,6];
// const squaredNumbers =  []
// numbers.forEach(function(item){
//     // console.log(item*item)
//     squaredNumbers.push(item**2)
// })
// console.log(squaredNumbers);

//map
// const squaredNumbers =numbers.map(function(number){
//     return number*2;
// })
// console.log(squaredNumbers)

const users = [{
    id:1,
    firstName:"Dambar",
    lastName: "Gharti",
    address:"Nepalgunj"
},
{
    id:2,
    firstName:"Manish",
    lastName: "Basnet",
    address:"Itahari"
}]

const result =users.map((user)=>{
    // return {
    //     id:user.id,
    //     Details: user.firstName +" lives in "+ user.lastName +" lives in " + user.address
    // }
    return {
        ...user, //spread operator
        Details: user.firstName +" "+ user.lastName +" lives in " + user.address
    }
})
// console.log(result)

//asignment to show output
const numbers2 = [1,2,3,4];
const assign = numbers2.map((item)=>{
    return {
        number:item,
        name:"A"
    }
})
// console.log(assign)

//filter()
const numbers = [1,2,3,4];
const filtered = numbers.filter((number)=>{
    return number%2 ==0 // &&
})
// console.log(filtered)

//reduce 
const result1 =numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
},0)
// console.log(result1);

//daraz eg
const cartItems =[
    {
        name:"A",
        price:2,
        quantity:4
    },
    {
        name:"B",
        price:20,
        quantity:5
    },
    {
        name:"c",
        price:100,
        quantity:5
    }
]
//total quantity
//total price
const total= cartItems.reduce((acc,curr)=>{
    acc.totalPrice +=(curr.quantity * curr.price)
    acc.totalQuantity +=(curr.quantity)
    return acc
},{totalPrice:0,totalQuantity:0})
// console.log(total)

const people = [
    {
        name:"Hari", age:23
    },
    {
        name:"Dolma", age:17
    },
    {
        name:"Manish", age:21
    },
    {
        name:"Dambar", age:20
    },
    {
        name:"Hima", age:17
    }
]
const groupData = people.reduce((acc,person)=>{
    const age = person.age;
    if(!acc[age]){
        acc[age]=[]
    }
    acc[age].push(person)
    return acc
},{})

console.log(groupData)
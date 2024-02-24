// console.log("This is my first JS Workshop")

// let cup = "Coffee"
// cup ="Water"
// console.log(cup)

//var vs let vs const
// if(true){
//     var name = "Dambar" //not with let & const 
//     console.log(name + 10 + " Gharti")
// }
// let name; // declare -> undefined
// console.log(name,"This is second")

//boolean
// const isNepali = true // or false

//array
// let friends = ['DigitalPa','Bob','John'] // different data type in dina milxa (JS is dynamic)
// let offer = ['Digital Pathshala',999] 

// console.log(offer) // Problem: Array don't share information about offer

//Solution: Object
let offers ={
    institueName: "Digital Pathshala",
    reactJS: "At Rs."+  999
}
console.log(offers.reactJS)
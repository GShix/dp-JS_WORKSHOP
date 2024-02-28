//condition
const isRaining = false
// if(isRaining){
//     console.log("Carry Umbrella")
// }

//ternary operator
// const terOp = isRaining ? "Carry Umbrella":"Don't carry Ummbrella"
// console.log(terOp)

//short circuit evaluation
// const short = isRaining && "Carry Umbrella";
const short = isRaining && "Carry Umbrella" || "Don't carry Umbrella"
console.log(short)
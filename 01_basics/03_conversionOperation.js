let score = null

console.log(typeof score) // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // 0

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0


let isLoggedIn = 0  // 1   | ""   | "Parichay"  if chaking this things get the below commqnted result
console.log(typeof isLoggedIn) // number

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//if set a variable to a string, it will be true
// if set a variable to a number, it will be true
// if set a variable to an empty string, it will be false
// if set a variable to 0, it will be false
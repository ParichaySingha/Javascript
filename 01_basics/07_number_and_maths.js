const blance = new Number(100)
console.log(blance)

const blanceAmout = 400
console.log(blanceAmout)

console.log(blance.toString().length)
console.log(blance.toFixed(2)) //

const otherNumber = 123.8699

console.log(otherNumber.toPrecision(4))   // return the figer number accordint to the set the number

const localNumber = 100000
console.log(localNumber.toLocaleString('en-IN'))


/*+++++++++++++++++++++MATHs++++++++++++++++++++++*/

console.log('..........................Maths...................')

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(46.858564))
console.log(Math.floor(4.21))
console.log(Math.min(4,5,6,8,10,1))
console.log(Math.max(4,5,6,8,10,1))

console.log('..............................')

console.log(Math.random())
console.log(Math.random()*10 + 1)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

let  myDate = new Date();
console.log(myDate.toString())

console.log(myDate.toDateString())
console.log(myDate.getTime())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())

console.log('..................................')

let myCreateDate = new Date("01-14-2025")
console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(Math.floor(Date.now()/1000))   //prient sec


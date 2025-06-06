// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(3, 8)

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result

  return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("The Result is : ", result)

console.log('...........................');


function loginUserMessage(username = "Parichay") {
  if(!username){
    console.log("Please enter a username")
    return
  }
  return `${username} just logged in`
}
// console.log(loginUserMessage("Parichay"))
// console.log(loginUserMessage("Singha"))

function calculateCardPrice(...num1) {
  return num1
}

// console.log(calculateCardPrice(200,300,500,1000))


const user = {
  username: "Parichay Singha",
  price: 199
}

function handleObject(anyobject) {
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

handleObject({
  username: "sam",
  price: 399
})


console.log('..............................')


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));

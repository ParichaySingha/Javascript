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
console.log(loginUserMessage("Singha"))


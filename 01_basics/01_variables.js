const accountId = 16448
let accountEmail = "parichaysingha@gmail.com"
var accountPassword = "12345678"
accountCity = "Kolkata"

let accountCountry


// accountId = 12345;    // not allowed, const cannot be reassigned
accountEmail = "parichay@gmail.com"
accountPassword = "1234"
accountCity = "Delhi"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountCountry]);


x = 10
y = 20
z = x + y

console.log("x + y = ", z);


let a = 10
let b = 20

let total = a + b
console.log("a + b = ", total);

//can also add strings, but strings will be concatenated:
let concatenated = "5" + 2 + 3;
console.log(concatenated);
const name = "Parichay"
const repoCount = 20

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('Parichsy Singha');

console.log(gameName[0]);
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase())

console.log(gameName.charAt(5))

console.log(gameName.indexOf('i'))

console.log(gameName.charCodeAt('i'))

console.log(gameName.at(2))

console.log(gameName.slice(0))

console.log(gameName.substring(7,5))
console.log("........................@...................")
console.log(gameName.substr(7,5))


const newString = "Parichay singha"
console.log(newString);
console.log(gameName.trim());

const url = "https://parichay.com/parichay%20singha"

console.log(url.replace('%20',"_"))

console.log(url.includes('parichay'))

console.log(url.split('com'))
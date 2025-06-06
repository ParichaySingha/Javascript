// const tinderUser = new Object()  // singeleton object for declerition

const tinderUser = {}  // non-singleton object

tinderUser.id = "123456"
tinderUser.name = "Parichay Singha"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
  email : "parichaysingh@gmail.com",
  fullname : {
    usrfullname : {
      fristname : "parichay",
      lastname :"Singha"
    }
  }
}

// console.log(regularUser.fullname.usrfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const user = [
  {
    id: 1,
    email: "parichaysingha@gmail.com"
  },
  {
    id: 1,
    email: "parichaysingha@gmail.com"
  },
  {
    id: 1,
    email: "parichaysingha@gmail.com"
  },
  {
    id: 1,
    email: "parichaysingha@gmail.com"
  }
]

user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

/*..............................................*/
console.log('........................................');


const course = {
  coursename: "javascript",
  price: "999",
  courseInstracture: "Parichay Singha"
}

const {courseInstracture: instractor} = course

console.log(instractor)

/* this is how the object distracturing*/
/*
const navbar = ({company}) => {

}

navbar(company = "Parichay")
*/


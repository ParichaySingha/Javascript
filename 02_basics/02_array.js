const marvel_heros = ['thor', 'Ironman ','spiderman']
const dc_heros = ['superman','flash','batman']

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

/*....................................................*/

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)


/*............................*/

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)
console.log(real_array)


console.log('....................................')

console.log(Array.isArray("Parichay Singha"))
console.log(Array.from('Parichay Singha'))
console.log(Array.from({name : "Parichay Singha"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3))

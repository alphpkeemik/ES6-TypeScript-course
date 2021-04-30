/*
const  orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries']

const logFavoriteFruit = (fruits) => {
   /!* const favorite = fruits[0]
    const secondFavorite = fruits[1]*!/
    const  [favorite, secondFavorite, third, fourth] = fruits
    console.log(`My favorite fruit is ${favorite} and second favorite is ${secondFavorite}, there is no ${fourth}`)
}

logFavoriteFruit(orderedFavoriteFruits)*/


const person = {
    name: 'John',
    email: 'john@smith.example.com',
    password: 'imtheman'
}

let defaultPerson = {name: 'no name provided', email: 'no email provided'};
const personLogger = (person= defaultPerson) => {
    const {name, email} = Object.assign(defaultPerson, person)
    console.log(`${name}, ${email}`)
}

personLogger({name: 'John'})
/*
const  orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries']

const logFavoriteFruit = (fruits) => {
   /!* const favorite = fruits[0]
    const secondFavorite = fruits[1]*!/
    const  [favorite, secondFavorite, third, fourth] = fruits
    console.log(`My favorite fruit is ${favorite} and second favorite is ${secondFavorite}, there is no ${fourth}`)
}

logFavoriteFruit(orderedFavoriteFruits)*/


const fordFocus = {
    make: 'ford',
    model: 'focus',
    year: 2009
}

const logCarMake = car => {
    const {make: manufacturer} = car
    console.log(`Car make ${manufacturer}`)
}

logCarMake(fordFocus)
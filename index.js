const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries']


const logSecondFavoriteFruit = (fruits) => {

    const [, secondFavorite] = fruits
    console.log(`My second favorite fruit is ${secondFavorite}`)
}
//logSecondFavoriteFruit(orderedFavoriteFruits)


const [,,arg1, arg2] = process.argv
console.log(arg1, arg2)
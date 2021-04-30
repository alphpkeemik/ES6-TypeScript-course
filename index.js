const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries']


const logFruitsThatAreNotFavorite = (fruits) => {

    const [favorite, ...otherFruits] = fruits
    console.log(otherFruits)
    //console.log(`My second favorite fruit is ${secondFavorite}`)
}
logFruitsThatAreNotFavorite(orderedFavoriteFruits)


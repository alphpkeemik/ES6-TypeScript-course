const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries', 'bananas', 'apples', 'strawberries']


const logFruitsThatAreNotFavorite = (fruits) => {

    const [favorite, second, ...otherFruits] = fruits
    console.log(otherFruits)
    //console.log(`My second favorite fruit is ${secondFavorite}`)
}
logFruitsThatAreNotFavorite(orderedFavoriteFruits)


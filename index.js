const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries', 'bananas', 'apples', 'strawberries']


const capitalizeFruits = (fruits) => orderedFavoriteFruits.map((value, index, array) => {
    const [first, ...characters] = value.split("")

    return `${index+1}: ${first.toUpperCase()}${characters.join('')}`
})

console.log(capitalizeFruits(orderedFavoriteFruits))
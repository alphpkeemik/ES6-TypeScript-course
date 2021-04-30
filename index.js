const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries', 'bananas', 'apples', 'strawberries']


const capitalizeFruits = (fruits) => orderedFavoriteFruits.map((value, index, array) => {
    const fruitCount = array.length
    const [first, ...characters] = value.split("")
    const prefix = index < fruitCount / 2 ? index + 1 : 'runner-up'
    return `${prefix}: ${first.toUpperCase()}${characters.join('')}`
})

console.log(capitalizeFruits(orderedFavoriteFruits))
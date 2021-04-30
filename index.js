const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries', 'bananas', 'apples', 'strawberries', 'avocado', 'apples']


const capitalizeFruits = (fruits) => orderedFavoriteFruits.map((value, index, array) => {
    const fruitCount = array.length
    const [first, ...characters] = value.split("")
    const prefix = index < fruitCount / 2 ? index + 1 : 'runner-up'
    return `${prefix}: ${first.toUpperCase()}${characters.join('')}`
})


//console.log(capitalizeFruits(orderedFavoriteFruits))


const uniqueueFruits = orderedFavoriteFruits.reduce((acc, value, index, array) => {
    if (acc.indexOf(value) < 0) {
       acc.push(value)
    }
    return acc
}, [])

const formattedData = orderedFavoriteFruits.reduce((acc, value, index, array) => value.length > acc ? value.length : acc, 0)


console.log(formattedData)

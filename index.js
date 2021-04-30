
const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries', 'bananas', 'apples', 'strawberries', 'avocado', 'apples']
const dedupe = array => Array.from(new Set(array))
console.log([...new Set(orderedFavoriteFruits)])

console.log(dedupe(orderedFavoriteFruits))
const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries', 'bananas', 'apples', 'strawberries']


const logFruitsThatAreNotFavorite = (fruits) => {

    const [...otherFruits] = fruits
    console.log(otherFruits)
    //console.log(`My second favorite fruit is ${secondFavorite}`)
}
//logFruitsThatAreNotFavorite(orderedFavoriteFruits)


const person= {
    name: 'John',
    email: 'smith@example.com',
    password: '123pass',
    id: 97,
    guid: 'aaa-bbbb-123123123-ccc'
}

const personLogger = ({password, id, ...otherFields}) => {
    console.log(otherFields)
}

//personLogger(person)
const makeArray = (... args) =>args
console.log(makeArray('banana', 'apple', 'strawberry'))
const orderedFavoriteFruits = ['watermelon', 'avocado', 'cherries', 'bananas', 'apples', 'strawberries']


const logFruitsThatAreNotFavorite = (fruits) => {

    const [...otherFruits] = fruits
    console.log(otherFruits)
    //console.log(`My second favorite fruit is ${secondFavorite}`)
}
//logFruitsThatAreNotFavorite(orderedFavoriteFruits)
const personTemplate= {
    name: 'Name not given',
    email: 'E-mail not given',
    password: '*****',
    id: -1,
    guid: 'aaaaaa-aaaaa-aaaaa-aaaa'
}


const person= {
    name: 'John',
    email: 'smith@example.com',

}


const personAddress = {
    id : 56,
    street: 'Ravi',
    house: '2',
    postalCode: '10203',
}

const combinePersonAndAddress = (person, personAddress) => {
    return {
        ...person,
        ...personAddress
    }
}
//console.log(combinePersonAndAddress(person, personAddress))
console.log({...personTemplate, ...person})
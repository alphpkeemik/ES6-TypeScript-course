const people = [
    {
        name: 'John',
        email: 'john@example.com',
        age: 17,
    },
    {
        name: 'Jane',
        email: 'jane@.example.com',
        age: 29,
    },
    {
        name: 'Juss',
        email: 'juss@example.com',
        age: 63,
    },
]


const detectUnderAgePerson = ({age}, index, array) => {
    return age < 18
}

const underAgePerson = people.find((value, index, array) => detectUnderAgePerson(value, index, array))
// or const underAgePerson = people.find((value, index, array) => detectUnderAgePerson(value))
// or const underAgePerson = people.find(detectUnderAgePerson)

const everyOneIsOfAge = people.every(({age}) => age >= 18)

console.log(everyOneIsOfAge)



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
const [person] = people

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
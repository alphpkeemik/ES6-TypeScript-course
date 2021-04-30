const prefixWithMeta = key => {
    return `meta:${key}`
}
// single line
//const prefixWithMeta = key => `meta:${key}`

const createCarObject = (make, model = 'focus', year = 2000, metaKey, metaValue) => {
    return {
        make,
        model,
        year: year - 2,
        metadata: {
            [prefixWithMeta(metaKey)]: metaValue
        }
    }
}

console.log(createCarObject('Ford'))
console.log(createCarObject('Ford', 'ka'))
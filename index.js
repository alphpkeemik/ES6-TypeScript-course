const prefixWithMeta = key => {
    return `meta:${key}`
}
// single line
//const prefixWithMeta = key => `meta:${key}`

const createCarObject = (make, model = 'focus', year = 2000) => {
    return {
        make,
        model,
        year: year - 2,
        logData: () => {
            console.log(`${make} ${model} from ${year}`)
        }
    }
}

let car = createCarObject('Ford', 'Ka', 2009);
car.logData()

const prefixWithMeta = key => {
    return `meta:${key}`
}
// single line
//const prefixWithMeta = key => `meta:${key}`

const loggingFn = (make, model, year) => {
    console.log(`${make} ${model} from ${year}`)
};
const createCarObject = (make, model = 'focus', year = 2000, loggingFn1 = loggingFn) => {
    return {
        make,
        model,
        year: year - 2,
        logData: loggingFn1(make, model, year)
    }
}

let car = createCarObject('Ford', 'Ka', 2009);
car.logData()
let tesla = createCarObject('Tesla', 'cybertruck', 2020, () => {
    console.log('Elon made this')
});
tesla.logData()

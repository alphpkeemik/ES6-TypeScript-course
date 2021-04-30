
const carFactory =  (make, model, year) => {
    return {
        make,
        model,
        year
    }
}

const car1 = carFactory('Form', 'focus', 2006)
console.log(car1)
const car2 = carFactory(2006, false, 'year')
console.log(car2)
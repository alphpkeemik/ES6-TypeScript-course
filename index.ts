interface Car {
    make: string,
    model: string
    year: number
}

const carFactory = (make: string, model: string, year: number): Car => {
    return {
        make,
        model,
        year
    }
}

const car1 = carFactory('Form', 'focus', 2006)
//console.log(car1)

const getCarInfo = (car: Car) => {
    const {make, model, year} = car
    return `This ${make} ${model} was manufactured in ${year}`
}

console.log(getCarInfo(car1))
console.log(getCarInfo({
    make: 'a',
    model: 'b',
    year: 'string'
}))
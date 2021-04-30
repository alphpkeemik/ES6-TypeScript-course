interface Car {
    make: string,
    model: string
    year: number
}

interface CarFactory {
    (make: string, model: string, year: number): Car
}

type Vehicle = {
    pedalCount: number
}

const carFactory: CarFactory = (make: string, model: string, year: number): Car => {
    return {
        make,
        model,
        year
    }
}

const myCarFactory: CarFactory = (make: string, model: string, year: number): Car => {
    return {
        make,
        model,
        year: year + 1
    }
}

const car1 = carFactory('Form', 'focus', 2006)
const car2 = myCarFactory('Form', 'focus', 2006)
console.log(car1, car2)

const printVehicleInfo = (vehicle: Car | Vehicle) => {
    const {make, model, year} = vehicle
    return `This ${make} ${model} was manufactured in ${year}`
}


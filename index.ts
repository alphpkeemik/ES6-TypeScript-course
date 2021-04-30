
const carFactory =  (make :string, model: string, year: number) => {
    return {
        make,
        model,
        year
    }
}

const car1 = carFactory('Form', 'focus', 2006)
//console.log(car1)

const getCarInfo = (car:any) => {
    const {make, model, year} = car
    return `This ${make} ${model} was manufactured in ${year}`
}

console.log(getCarInfo(car1))
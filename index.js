const createCarObject = (make, model, year) => {
    const car  = {}
    car.make = make
    car.model = model
    car.year = year
}

console.log(createCarObject('Ford', 'Focus', 2006))
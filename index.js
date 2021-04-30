const createCarObject = (make, model, year) => {
    return {
        make,
        model,
        year: year - 2
    }
}

console.log(createCarObject('Ford', 'Focus', 2006))
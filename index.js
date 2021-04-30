const createCarObject = (make, model, year) => {
    return {
        make,
        model,
        year
    }
}

console.log(createCarObject('Ford', 'Focus', 2006))
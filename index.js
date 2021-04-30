const createCarObject = (make, model, year, metaKey, metaValue) => {
    return {
        make,
        model,
        year: year - 2,
        metadata: {
            [metaKey]: metaValue
        }
    }
}

console.log(createCarObject('Ford', 'Focus', 2006, 'spoilerHeight', '20cm'))
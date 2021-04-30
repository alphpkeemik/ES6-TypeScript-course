const newWorldLengthClassifier = word => word.length > 7 && `that's a long word`

console.log(newWorldLengthClassifier('bananas'))
console.log(newWorldLengthClassifier('bananas!'))
function wordLengthClassifier(word) {
    if (word.length > 7) {
        return `That's a long word!`
    }
    return `I can handle also words in any length`
}

const newWorldLengthClassifier = word => word.length > 7? `That's a long word!`: `I can handle also words in any length`

console.log(newWorldLengthClassifier('bananas'))
console.log(newWorldLengthClassifier('bananas!'))
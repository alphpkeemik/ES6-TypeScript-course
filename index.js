function wordLengthClassifier(word) {
    if (word.length > 7) {
        return `That's a long word!`
    }
    return `I can handle also words in any length`
}

console.log(wordLengthClassifier('bananas'))
console.log(wordLengthClassifier('bananas!'))
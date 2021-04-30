interface Car {
    make: string,
    model: string
    year: number
    colors: EColor[]
}
enum EColor {
    Red, Black= 'black', Blue = 'blue', Grey = 'grey',
}
console.log((() :Car => {
    return {
        make: 'Make',
        model: 'model',
        year: 2005,
        colors: [EColor.Black, EColor.Red]
    }
})())
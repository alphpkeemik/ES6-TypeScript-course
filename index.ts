interface Car {
    make: string,
    model: string
    year?: number
    colors: EColor[]
}
enum EColor {
    Red, Black= 'black', Blue = 'blue', Grey = 'grey',
}
console.log((() :Car => {
    return {
        make: 'Make',
        model: 'model',
        colors: [EColor.Black, EColor.Red]
    }
})())

const shouldNotRetrurn = (): void => {
    console.log('not returning')
}
shouldNotRetrurn()

const arrayOfCars: Array<Car> = [
    {
        make: 'Make',
        model: 'model',
        colors: [EColor.Black, EColor.Red]

    }
]
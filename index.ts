/**
 * Pick
 * Omit
 * Partial
 * Required
 * Record
 */

type TCar = {
    make: string,
    model: string
    year: number
    vin: number,
    wheelCount: number
}
type TLeanCar = Pick<TCar, 'make'|'model'|'year'>

const car: TLeanCar = {make: 'ford', model: 'focus', year: 2006}
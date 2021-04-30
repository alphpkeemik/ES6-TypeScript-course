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
type TLeanCar = Omit<TCar, 'vin'|'wheelCount'>

const car: TLeanCar = {make: 'ford', model: 'focus', year: 2006}
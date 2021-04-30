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
type TPartialLCar = Partial<TCar>

const car: TPartialLCar = {make: 'ford', model: 'focus', year: 2006}
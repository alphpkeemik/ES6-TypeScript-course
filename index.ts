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
    vin?: number,
    wheelCount?: number
}
type TLeanCar = Omit<TCar, 'vin'|'wheelCount'>
const car1: TCar = {make: 'ford', model: 'focus', year: 2006}
type TRequiredCar = Required<TCar>

const car2: TRequiredCar = {make: 'ford', model: 'focus', year: 2006}
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


type TSpoilerHeightsByCar = Record<string, number>

const spoilerHeights : TSpoilerHeightsByCar ={
    focus: 20,
    ka: -2,
    6: 'a'
}
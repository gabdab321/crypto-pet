import countSupplyPercentage from './countSupplyPercentage'

describe('countSupplyPercentage', () => {
    test('should return 100% when max_supply is null', () => {
        expect(countSupplyPercentage(null, 500)).toBe(100)
    })

    test('should return 100% when circulating_supply is equal to max_supply', () => {
        expect(countSupplyPercentage(1000, 1000)).toBe(100)
    })

    test('should return 50% when circulating_supply is half of max_supply', () => {
        expect(countSupplyPercentage(1000, 500)).toBe(50)
    })

    test('should return 0% when circulating_supply is 0', () => {
        expect(countSupplyPercentage(1000, 0)).toBe(0)
    })

    test('should return the correct percentage for arbitrary max_supply and circulating_supply', () => {
        expect(countSupplyPercentage(2000, 500)).toBe(25)
        expect(countSupplyPercentage(2500, 1250)).toBe(50)
    })
})
import formatNumber from './formatNumber'

describe('formatNumber', () => {
    test('should format numbers with commas as thousands separators', () => {
        expect(formatNumber(1000000)).toBe('1,000,000')
        expect(formatNumber(56000)).toBe('56,000')
        expect(formatNumber(3465.21)).toBe('3,465.21')
        expect(formatNumber(1000)).toBe('1,000')
    })

    test('should leave numbers under 1000 unchanged', () => {
        expect(formatNumber(999)).toBe('999')
        expect(formatNumber(100)).toBe('100')
        expect(formatNumber(0)).toBe('0')
    })
})
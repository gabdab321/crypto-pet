/* formats numbers with commas, for example: 1000000 -> 1,000,000. returns STRING.
* does not work with the negative numbers. I could use toLocaleString method,
* but it rounds number, so it doesn't fit */
export default function formatNumber(num: number): string{
    const numStr = num.toString()

    // split the number into integer and fractional parts
    const [integerPart, fractionalPart] = numStr.split('.')

    // function to format the integer part with commas
    function formatIntegerPart(intPart: string): string {
        // create an array of characters from the integer part
        const intChars = intPart.split('')

        // create a new array to hold the formatted integer part
        const formattedIntPart: string[] = []

        // counter to keep track of digit groups (every 3 digits)
        let counter = 0

        // iterate over the integer part characters from right to left
        for (let i = intChars.length - 1; i >= 0; i--) {
            counter++
            formattedIntPart.unshift(intChars[i])

            // add a comma every 3 digits
            if (counter % 3 === 0 && i !== 0) {
                formattedIntPart.unshift(',')
            }
        }

        return formattedIntPart.join('')
    }

    // format the integer part with commas
    const formattedIntegerPart = formatIntegerPart(integerPart)

    // if there is a fractional part, concatenate it to the formatted integer part with a dot
    if (fractionalPart !== undefined) {
        return `${formattedIntegerPart}.${fractionalPart}`
    }

    return formattedIntegerPart
}
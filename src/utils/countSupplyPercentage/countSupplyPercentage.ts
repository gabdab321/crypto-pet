/* This function counts difference between max and circulating supply and return
   difference number in percents. Used to fill progress bar.
   Max supply of coin - is a maximum of how much coins can ever exist.
   Circulating supply - is a number of coins that are currently exists.
   More information about crypto supplies: https://www.techopedia.com/definition/total-supply
   */
export default function countSupplyPercentage(max_supply: number | null, circulating_supply: number): number {
    if(!max_supply) return 100

    return Math.round((circulating_supply / max_supply) * 100)
}
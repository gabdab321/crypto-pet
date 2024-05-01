import dayjs from "dayjs";
import {IChartData, IChartDataRaw} from "../../models/ChartModels";

export default function formatHistoricalData(data: IChartDataRaw): IChartData[] {
    const formattedData: IChartData[] = []

    data.splice(-1, 1) // deleting because of api bug, where two last elements have the same date

    for(let [timestamp, value] of data) {
        formattedData.push({
            time: dayjs(timestamp).format("YYYY-MM-DD"),
            value
        })
    }

    return formattedData
}
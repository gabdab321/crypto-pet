import axios from "axios";
import apiKey from "../consts/apiKey";
import {ICoin} from "../models/ICoin";
import formatHistoricalData from "../utils/formatHistoricalData/formatHistoricalData";
import {IChartData} from "../models/ChartModels";

const baseUrl = "https://api.coingecko.com/api/v3/"
const headers = {
    "accept": "application/json",
    "x-cg-demo-api-key": apiKey,
}

export default class CoinAPI {
    static async getCoinsList(): Promise<ICoin[]> {
        const response = await axios.get(`${baseUrl}coins/markets?vs_currency=usd`, {headers})

        return response.data
    }

    static async getCoinById(id: string): Promise<ICoin[]> {
        const response = await axios.get(`${baseUrl}coins/markets?vs_currency=usd&ids=${id}`, {headers})

        return response.data
    }

    static async getCoinChartData(id: string): Promise<IChartData[]> {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/?vs_currency=usd&days=365`, {headers})

        return formatHistoricalData(response.data.prices)
    }
}
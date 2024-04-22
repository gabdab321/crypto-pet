import axios from "axios";
import apiKey from "../consts/apiKey";
import {ICoin} from "../models/ICoin";

const baseUrl = "https://api.coingecko.com/api/v3/"
const headers = {
    "accept": "application/json",
    "x-cg-demo-api-key": apiKey,
}

export default class CoinAPI {
    static async getCoinsList(): Promise<ICoin[]> {
        const response = await axios.get(`${baseUrl}coins/markets?vs_currency=usd`, {headers})

        console.log(response.data)

        return response.data
    }

    static async getCoinById(id: string): Promise<ICoin[]> {
        const response = await axios.get(`${baseUrl}coins/markets?vs_currency=usd&ids=${id}`, {headers})

        console.log(response.data)

        return response.data
    }
}
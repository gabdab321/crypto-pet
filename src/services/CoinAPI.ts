import axios, {AxiosHeaders} from "axios";
import apiKey from "../consts/apiKey";
import {ICoinItem} from "../models/ICoinItem";

const baseUrl = "https://api.coingecko.com/api/v3/"
const headers = {
    "accept": "application/json",
    "x-cg-demo-api-key": apiKey,
}

export default class CoinAPI {
    static async getCoinsList(): Promise<ICoinItem[]> {
        const response = await axios.get(`${baseUrl}coins/markets?vs_currency=usd`, {headers})

        console.log(response.data)

        return response.data
    }
}
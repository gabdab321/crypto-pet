import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {ICoin} from "../models/ICoin";
import {Container, Typography, Box, ToggleButtonGroup, ToggleButton} from "@mui/material";
import CoinAPI from "../services/CoinAPI";
import GradientProgress from "../components/UI/GradientProgress";
import Chart from "../components/Chart/Chart";
import formatHistoricalData from "../utils/formatHistoricalData/formatHistoricalData";
import TradingViewWidget from "../components/TradingViewWidget/TradingViewWidget";
import formatNumber from "../utils/formatNumber/formatNumber";
import {IChartData} from "../models/ChartModels";

// TODO: make indicator that shows how price was changed in last 24 hours
// TODO: make util that format price(66708 -> 66,708; 3700 -> 3,700)
// TODO: make candlesticks chart

// TODO: don't forget to enable strict mode back after finishing this page

/* Page with all information about current crypto. Current crypto is fetched by its id in url params */
const CoinPage = () => {
    const [coin, setCoin] = useState<ICoin[]>([]) // state of current coin
    const [chartData, setChartData] = useState<IChartData[]>([])
    const {id} = useParams() // id of the coin from url param
    const [chartType, setChartType] = useState<string>("chart")

    const handleChange = useCallback((e: React.MouseEvent<HTMLElement>, type: string) => {
        setChartType(type)
    }, [])

    /* fetching data about current coin and setting it to the state */
    useEffect(() => {
        if(id) {
            CoinAPI.getCoinById(id).then(coin => setCoin(coin))
            CoinAPI.getCoinChartData(id).then(data => setChartData(data))
        }
    }, [])

    console.log(chartData)
    return (
        <Container sx={{display: "flex", flexDirection: "column", backgroundColor: "background.default", minHeight: "100vh", py: 3}}>
            {coin.length > 0
                ?
                <>
                    <Box>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Box sx={{width: "80px", height: "80px", "& img": {width: "100%", height: "100%"}}}><img src={coin[0].image} alt=""/></Box>
                            <Typography sx={{marginLeft: 3}} variant="h3" color="text.primary">{coin[0].name}</Typography>
                        </Box>
                        <Typography color="text.primary" variant="h5">$ {formatNumber(coin[0].current_price)}</Typography>
                    </Box>
                    <Box sx={{width: "100%", height: "500px"}}>
                        <ToggleButtonGroup
                            color="primary"
                            value={chartType}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="chart">Chart</ToggleButton>
                            <ToggleButton value="tw">TradingView</ToggleButton>
                        </ToggleButtonGroup>
                        {chartType === "chart"
                            ?
                            <Chart data={chartData}/>
                            :
                            <TradingViewWidget symbol={`${coin[0].symbol}USDT`.toUpperCase()}/>
                        }
                    </Box>
                </>
                :
                <Box sx={{width: "100%", height: "fit", display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <GradientProgress sx={{display: "flex", alignSelf: "center"}} size={100}/>
                </Box>
            }
        </Container>
    );
};

export default CoinPage;
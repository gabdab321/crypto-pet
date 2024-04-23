import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {ICoin} from "../models/ICoin";
import {Container, Typography, Box} from "@mui/material";
import CoinAPI from "../services/CoinAPI";
import GradientProgress from "../components/UI/GradientProgress";

// TODO: make indicator that shows how price was changed in last 24 hours
// TODO: make util that format price(66708 -> 66,708; 3700 -> 3,700)

/* Page with all information about current crypto. Current crypto is fetched by its id in url params */
const CoinPage = () => {
    const [coin, setCoin] = useState<ICoin[]>([]) // state of current coin
    const {id} = useParams() // id of the coin from url param

    /* fetching data about current coin and setting it to the state */
    useEffect(() => {
        if(id) {
            const data = CoinAPI.getCoinById(id)
            data.then(coin => setCoin(coin))
        }
    }, [])
    console.log(coin)

    return (
        <Container sx={{display: "flex", backgroundColor: "background.default", minHeight: "100vh", py: 3}}>
            {coin.length > 0
                ?
                <Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <Box sx={{width: "80px", height: "80px", "& img": {width: "100%", height: "100%"}}}><img src={coin[0].image} alt=""/></Box>
                        <Typography sx={{marginLeft: 3}} variant="h3" color="text.primary">{coin[0].name}</Typography>
                    </Box>
                    <Typography color="text.primary" variant="h5">$ {coin[0].current_price}</Typography>
                </Box>
                :
                <Box sx={{width: "100%", height: "fit", display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <GradientProgress sx={{display: "flex", alignSelf: "center"}} size={100}/>
                </Box>
            }
        </Container>
    );
};

export default CoinPage;
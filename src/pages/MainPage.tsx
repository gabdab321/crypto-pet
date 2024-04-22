import React, {useState, useEffect} from 'react';
import {ICoin} from "../models/ICoin";
import CoinAPI from "../services/CoinAPI";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import CoinItem from "../components/CoinItem/CoinItem";

const MainPage = () => {
    const [coins, setCoins] = useState<ICoin[]>([])

    useEffect(() => {
        const data = CoinAPI.getCoinsList();
        data.then(d => setCoins(d))
    }, [])

    return (
        <Container sx={{backgroundColor: "background.default"}}>
            <Stack spacing={2} sx={{py: 2}}>
                {coins.map(coin => <CoinItem key={coin.id} coin={coin}/>)}
            </Stack>
        </Container>
    );
};

export default MainPage;
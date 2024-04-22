import React, {useEffect, useState} from 'react';
import './App.scss';
import CoinAPI from "./services/CoinAPI";
import { ThemeOptions } from '@mui/material/styles';
import {Box, Button, CircularProgress, Container, createTheme, Stack, ThemeProvider, Typography} from "@mui/material";
import {ICoinItem} from "./models/ICoinItem";

function App() {
    const [coins, setCoins] = useState<ICoinItem[]>([])

    useEffect(() => {
        const data = CoinAPI.getCoinsList();
        data.then(d => setCoins(d))
    }, [])

    return (
        <Container sx={{backgroundColor: "background.default"}}>
            <Stack spacing={2} sx={{py: 2}}>
                {coins.map(coin =>
                    <Box sx={{display: "flex", justifyContent: "space-between"}} key={coin.id}>
                        <Typography variant="h6" color="text.primary">{coin.market_cap_rank}. {coin.name} --- {coin.current_price}</Typography>
                        <Button color="error" variant="contained">Delete</Button>
                    </Box>
                )}
            </Stack>
        </Container>
    );
}

export default App;

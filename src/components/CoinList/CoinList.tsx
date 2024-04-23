import React, {useEffect, useState} from 'react';
import {Divider, Grid, Stack, Typography} from "@mui/material";
import CoinItem from "../CoinItem/CoinItem";
import {ICoin} from "../../models/ICoin";
import CoinAPI from "../../services/CoinAPI";
import GradientProgress from "../UI/GradientProgress";

const CoinList = () => {
    const [coins, setCoins] = useState<ICoin[]>([])

    useEffect(() => {
        const data = CoinAPI.getCoinsList();
        data.then(d => setCoins(d))
    }, [])

    return (
        <Grid container>
            {coins.length > 0
                ?
                coins.map(coin =>
                    <>
                        <CoinItem key={coin.id} coin={coin}/>
                    </>
                )
                :
                <GradientProgress size={70} />
            }

        </Grid>
    );
};

export default CoinList;
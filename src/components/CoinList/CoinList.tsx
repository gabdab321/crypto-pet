import React, {useEffect, useState} from 'react';
import {
    TableContainer,
    TableBody,
    TableHead,
} from "@mui/material";
import CoinItem from "../CoinItem/CoinItem";
import {ICoin} from "../../models/ICoin";
import CoinAPI from "../../services/CoinAPI";
import GradientProgress from "../UI/GradientProgress";
import ListNavigation from "../ListNavigation/ListNavigation";

const CoinList = () => {
    const [coins, setCoins] = useState<ICoin[]>([])

    useEffect(() => {
        const data = CoinAPI.getCoinsList();
        data.then(d => setCoins(d))
    }, [])

    return (
        <TableContainer >
            <TableHead>
                <ListNavigation/>
            </TableHead>
            <TableBody>
                {coins.length > 0
                    ?
                    coins.map(coin =>
                            // <Link sx={{textDecoration: "none"}} component={RouterLink} to={`coin/${coin.id}`}>
                        <CoinItem key={coin.id} coin={coin}/>
                        // </Link>
                    )
                    :
                    <GradientProgress size={70} />
                }
            </TableBody>
        </TableContainer>
    );
};

export default CoinList;
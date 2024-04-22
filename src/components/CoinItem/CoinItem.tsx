import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {ICoin} from "../../models/ICoin";
import {Link as RouterLink} from "react-router-dom";

interface CoinItemProps {
    coin: ICoin
}
const CoinItem = ({coin}: CoinItemProps) => {
    return (
        <Box sx={{display: "flex", justifyContent: "space-between"}} key={coin.id}>
            <Typography variant="h6" color="text.primary">{coin.market_cap_rank}. {coin.name} --- {coin.current_price}</Typography>
            <Button component={RouterLink} to={`coin/${coin.id}`} color="primary" variant="contained" >Explore</Button>
        </Box>
    );
};

export default CoinItem;
import React from 'react';
import {Box, Button, Paper, Typography} from "@mui/material";
import {ICoin} from "../../models/ICoin";
import {Link as RouterLink} from "react-router-dom";
import {styled} from "@mui/material/styles";

interface CoinItemProps {
    coin: ICoin
}
const CoinItem = ({coin}: CoinItemProps) => {

    return (
        <ItemBox>
            <Box sx={{width: "50px", height: "50px", "& img": {width: "100%", height: "100%"}}}><img src={coin.image} alt=""/></Box>
            <Typography sx={{mx: 2}} variant="h6" color="text.primary">{coin.market_cap_rank}  {coin.name} --- {coin.current_price}$</Typography>
            <Button sx={{display: "flex", marginLeft: "auto"}} component={RouterLink} to={`coin/${coin.id}`} color="primary" variant="contained" >Explore</Button>
        </ItemBox>
    );
};

export default CoinItem;

// styled components
const ItemBox = styled(Box)(
    ({theme}) => `
          display: flex;
          border-radius: 8px;
          align-items: center;
          padding: 8px;
          transition: 0.4s all ease;
          &:hover {
            background-color: ${theme.palette.background.paper};
          }
        `
)
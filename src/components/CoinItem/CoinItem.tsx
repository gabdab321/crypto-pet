import React from 'react';
import {Box, Button, Link, Typography} from "@mui/material";
import {ICoin} from "../../models/ICoin";
import {Link as RouterLink} from "react-router-dom";
import {styled} from "@mui/material/styles";

interface CoinItemProps {
    coin: ICoin
}
const CoinItem = ({coin}: CoinItemProps) => {

    return (
        <Link sx={{textDecoration: "none"}} component={RouterLink} to={`coin/${coin.id}`}>
            <ItemBox>
                <Box sx={{width: "40px", height: "40px", "& img": {width: "100%", height: "100%"}}}><img src={coin.image} alt=""/></Box>
                <Typography sx={{mx: 2, fontWeight: "bold", textDecoration: "none"}} color="text.primary">{coin.market_cap_rank}.  {coin.name} --- {coin.current_price}$</Typography>
            </ItemBox>
        </Link>
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
          text-decoration: none;
          &:hover {
            background-color: ${theme.palette.background.paper};
          }
        `
)
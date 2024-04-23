import React from 'react';
import {Box, Divider, Grid, LinearProgress, Link, Typography} from "@mui/material";
import {ICoin} from "../../models/ICoin";
import {Link as RouterLink} from "react-router-dom";
import {styled} from "@mui/material/styles";
import countSupplyPercentage from "../../utils/countSupplyPercentage/countSupplyPercentage";

interface CoinItemProps {
    coin: ICoin
}
// TODO: make nice format for price change value
// TODO: add small chart for 24h change

const CoinItem = ({coin}: CoinItemProps) => {
    const supplyPercentage = countSupplyPercentage(coin.max_supply, coin.circulating_supply)

    return (
        <>
            <ItemRow direction="row" alignItems="center" container>
                {/*<Link sx={{textDecoration: "none"}} component={RouterLink} to={`coin/${coin.id}`}>*/}
                    <Grid item xs={1}> {/* market rank */}
                        <Typography variant="h6" sx={{textAlign: "center"}} color="text.primary">{coin.market_cap_rank}</Typography>
                    </Grid>
                    <Grid item xs={3}> {/* image + name + ticker */}
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Box
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    "& img": {width: "100%", height: "100%"}
                                }}
                            ><img src={coin.image} alt=""/></Box>
                            <Typography sx={{mx: 1, fontWeight: "bold"}} color="text.primary">{coin.name}</Typography>
                            <Typography color="text.secondary">{coin.symbol.toUpperCase()}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}> {/* price */}
                        <Typography sx={{fontWeight: "bold", textAlign: "end"}} color="text.primary">
                            {coin.current_price}$
                        </Typography>
                    </Grid>
                    <Grid item xs={1}> {/* price change by 24h(%) */}
                        <Typography sx={{fontWeight: "bold", textAlign: "end"}} color="text.primary">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </Typography>
                    </Grid>
                    <Grid item xs={2}> {/* market cap */}
                        <Typography sx={{fontWeight: "bold", textAlign: "end"}} color="text.primary">
                            {coin.market_cap}$
                        </Typography>
                    </Grid>
                    <Grid item xs={3}> {/* number of total supply */}
                        <Typography sx={{fontWeight: "bold", textAlign: "end"}} color="text.primary">
                            {coin.circulating_supply} {coin.symbol.toUpperCase()}
                        </Typography>
                        {supplyPercentage < 100
                            ?
                            <LinearProgress
                                sx={{width: "80%", marginLeft: "auto", marginTop: "8px"}}
                                variant="determinate"
                                value={countSupplyPercentage(coin.max_supply, coin.circulating_supply)}
                            />
                            :
                            ""
                        }
                    </Grid>
                {/*</Link>*/}
            </ItemRow>
            <Divider sx={{width: "100%"}} orientation="horizontal" />
        </>
    );
};

export default CoinItem;

// styled components
const ItemRow = styled(Grid)(
    ({theme}) => `
          border-radius: 2px;
          align-items: center;
          padding: 16px 8px;
          transition: 0.4s all ease;
          text-decoration: none;
          &:hover {
            background-color: ${theme.palette.background.paper};
          }
        `
)
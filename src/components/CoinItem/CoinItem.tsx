import React from 'react';
import {Box, LinearProgress, TableCell, TableRow, Typography} from "@mui/material";
import {ICoin} from "../../models/ICoin";
import {styled} from "@mui/material/styles";
import countSupplyPercentage from "../../utils/countSupplyPercentage/countSupplyPercentage";
import formatNumber from '../../utils/formatNumber/formatNumber';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface CoinItemProps {
    coin: ICoin
}
// TODO: add small chart for 24h change
// TODO: refactor this component

const CoinItem = ({coin}: CoinItemProps) => {
    const supplyPercentage = countSupplyPercentage(coin.max_supply, coin.circulating_supply)

    return (
        <TableRow hover sx={{display: "flex", alignItems: "center",  padding: "16px 8px"}}>

            <ItemCell sx={{display: "flex", minWidth: "50px", justifyContent: "center"}} > {/* market rank */}
                <Typography variant="h6" sx={{textAlign: "center", }} color="text.primary">{coin.market_cap_rank}</Typography>
            </ItemCell>

            <ItemCell sx={{alignSelf: "center", minWidth: "350px"}}> {/* image + name + ticker */}
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "start"}}>
                    <Box
                        sx={{
                            width: "40px",
                            height: "40px",
                            "& img": {width: "100%", height: "100%"}
                        }}
                    ><img src={coin.image} alt=""/></Box>
                    <Typography variant="body1" sx={{mx: 1}} color="text.primary">{coin.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{coin.symbol.toUpperCase()}</Typography>
                </Box>
            </ItemCell>

            <ItemCell sx={{minWidth: "180px"}}> {/* price */}
                <Typography variant="body1" sx={{ textAlign: "end", width: "100%"}} color="text.primary">
                    {formatNumber(coin.current_price)}$
                </Typography>
            </ItemCell>

            <ItemCell sx={{minWidth: "130px", alignItems: "center", justifyContent: "end"}}> {/* price change by 24h(%) */}
                {coin.price_change_percentage_24h >= 0
                    ?
                    <ArrowDropUpIcon fontSize="medium" color="success"/>
                    :
                    <ArrowDropDownIcon fontSize="medium" color="error"/>
                }
                <Typography variant="body1" sx={{ textAlign: "end"}} color={coin.price_change_percentage_24h >= 0 ? "success.main" : "error.main"}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </Typography>
            </ItemCell>

            <ItemCell sx={{minWidth: "190px", justifyContent: "end"}}> {/* market cap */}
                <Typography variant="body1" sx={{ textAlign: "end"}} color="text.primary">
                    {formatNumber(coin.market_cap)}$
                </Typography>
            </ItemCell>

            <ItemCell sx={{minWidth: "300px", flexDirection: "column"}}> {/* circulating supply */}
                <Typography variant="body1" sx={{ textAlign: "end"}} color="text.primary">
                    {formatNumber(coin.circulating_supply)} {coin.symbol.toUpperCase()}
                </Typography>
                {supplyPercentage < 100
                    ?
                    <LinearProgress
                        sx={{width: "100%", marginTop: "8px"}}
                        variant="determinate"
                        value={countSupplyPercentage(coin.max_supply, coin.circulating_supply)}
                    />
                    :
                    ""
                }
            </ItemCell>
        </TableRow>
    );
};

export default CoinItem;

// styled components
export const ItemCell = styled(TableCell)`
    display: flex;
    padding-left: 30px;
`
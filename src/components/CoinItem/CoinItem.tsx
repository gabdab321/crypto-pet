import React from 'react';
import {Box, LinearProgress, TableCell, TableRow, Typography} from "@mui/material";
import {ICoin} from "../../models/ICoin";
import {styled} from "@mui/material/styles";
import countSupplyPercentage from "../../utils/countSupplyPercentage/countSupplyPercentage";
import formatNumber from '../../utils/formatNumber/formatNumber';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useNavigate} from "react-router-dom";

interface CoinItemProps {
    coin: ICoin
}
// TODO: add small chart for 24h change

const CoinItem = ({coin}: CoinItemProps) => {
    /* shortcut for minimizing JSX code */
    const supplyPercentage = countSupplyPercentage(coin.max_supply, coin.circulating_supply)
    const navigate = useNavigate()

    // styles for each cell
    const cellStyles = {
        marketRank: { display: 'flex', minWidth: '50px', justifyContent: 'center' },
        nameTicker: { minWidth: '350px' },
        price: { minWidth: '180px', justifyContent: 'end' },
        priceChange: { minWidth: '130px', justifyContent: 'end', alignItems: 'center' },
        marketCap: { minWidth: '190px', justifyContent: 'end' },
        circulatingSupply: { minWidth: '300px', flexDirection: 'column' },
    };

    function handleClick() {
        navigate(`/coin/${coin.id}`)
    }

    return (
        <TableRow
            onClick={handleClick}
            hover
            sx={{ display: 'flex', alignItems: 'center', padding: '16px 8px', transition: '0.6s all ease' }}
        >
            <ItemCell sx={cellStyles.marketRank}>
                <Typography variant="h6" color="text.primary" align="center">
                    {coin.market_cap_rank}
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.nameTicker}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <Box sx={{ width: '40px', height: '40px' }}>
                        <img src={coin.image} alt={coin.symbol} style={{ width: '100%', height: '100%' }} />
                    </Box>
                    <Typography variant="body1" sx={{ mx: 1 }} color="text.primary">
                        {coin.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {coin.symbol.toUpperCase()}
                    </Typography>
                </Box>
            </ItemCell>

            <ItemCell sx={cellStyles.price}>
                <Typography variant="body1" align="right" width="100%" color="text.primary">
                    {formatNumber(coin.current_price)}$
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.priceChange}>
                {coin.price_change_percentage_24h >= 0 ?
                    <ArrowDropUpIcon fontSize="medium" color="success" />
                    :
                    <ArrowDropDownIcon fontSize="medium" color="error" />
                }
                <Typography variant="body1" color={coin.price_change_percentage_24h >= 0 ? 'success.main' : 'error.main'}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.marketCap}>
                <Typography variant="body1" align="right" color="text.primary">
                    {formatNumber(coin.market_cap)}$
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.circulatingSupply}>
                <Typography variant="body1" align="right" color="text.primary">
                    {formatNumber(coin.circulating_supply)} {coin.symbol.toUpperCase()}
                </Typography>
                {supplyPercentage <= 100
                    ?
                    ""
                    :
                    <LinearProgress
                        sx={{ width: '100%', marginTop: '8px' }}
                        variant="determinate"
                        value={supplyPercentage}
                    />
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
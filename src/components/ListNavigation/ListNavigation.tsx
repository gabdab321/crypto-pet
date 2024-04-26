import React from 'react';
import {TableRow, Typography} from "@mui/material";
import {ItemCell} from "../CoinItem/CoinItem";
import {styled} from "@mui/material/styles";


/* Navigates user through the coin list table, used a head of table */
const ListNavigation = () => {
    // styles for each cell
    const cellStyles = {
        marketRank: { display: 'flex', minWidth: '50px', justifyContent: 'center' },
        nameTicker: { alignSelf: 'center', minWidth: '350px' },
        price: { minWidth: '180px', justifyContent: 'end' },
        priceChange: { minWidth: '130px', alignItems: 'center', justifyContent: 'end' },
        marketCap: { minWidth: '190px', justifyContent: 'end' },
        circulatingSupply: { minWidth: '300px', justifyContent: 'end' },
    };

    return (
        <NavRow>
            <ItemCell sx={cellStyles.marketRank}>
                <Typography variant="body1" align="center" color="text.primary">
                    #
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.nameTicker}>
                <Typography variant="body1" color="text.primary">
                    Name
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.price}>
                <Typography variant="body1" color="text.primary">
                    Price
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.priceChange}>
                <Typography variant="body1" color="text.primary">
                    1d%
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.marketCap}>
                <Typography variant="body1" color="text.primary">
                    Capitalization
                </Typography>
            </ItemCell>

            <ItemCell sx={cellStyles.circulatingSupply}>
                <Typography variant="body1" color="text.primary">
                    Circulating Supply
                </Typography>
            </ItemCell>
        </NavRow>
    );
};

export default ListNavigation;

// styled components
const NavRow = styled(TableRow)(({theme}) => `
    background-color: ${theme.palette.background.paper};
    display: flex;
    align-items: center;
    padding: 16px 8px;
`)
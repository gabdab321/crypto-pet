import React from 'react';
import {TableRow, Typography} from "@mui/material";
import {ItemCell} from "../CoinItem/CoinItem";


/* Used as a row of titles for columns   */
const ListNavigation = () => {
    return (
        <TableRow sx={{bgcolor: "background.paper", display: "flex", alignItems: "center",  padding: "16px 8px"}}>

            <ItemCell sx={{display: "flex", minWidth: "50px", justifyContent: "center"}} > {/* market rank */}
                <Typography variant="body1" sx={{textAlign: "center"}} color="text.primary">#</Typography>
            </ItemCell>

            <ItemCell sx={{alignSelf: "center", minWidth: "350px"}}> {/* image + name + ticker */}
                <Typography variant="body1"  color="text.primary">Name</Typography>
            </ItemCell>

            <ItemCell sx={{minWidth: "180px", justifyContent: "end"}}> {/* price */}
                <Typography variant="body1" sx={{textAlign: "end"}} color="text.primary">Price</Typography>
            </ItemCell>

            <ItemCell sx={{minWidth: "130px", alignItems: "center", justifyContent: "end"}}> {/* price change by 24h(%) */}
                <Typography variant="body1" color="text.primary">1d%</Typography>
            </ItemCell>

            <ItemCell sx={{minWidth: "190px", justifyContent: "end"}}> {/* market cap */}
                <Typography variant="body1" color="text.primary">Capitalization</Typography>
            </ItemCell>

            <ItemCell sx={{minWidth: "300px", justifyContent: "end"}}> {/* circulating supply */}
                <Typography  variant="body1" color="text.primary">Circulating supply</Typography>
            </ItemCell>
        </TableRow>
    );
};

export default ListNavigation;
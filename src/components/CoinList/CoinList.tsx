import React, {useEffect, useState} from 'react';
import {TableContainer, TableBody, TableHead, Table} from "@mui/material";
import CoinItem from "../CoinItem/CoinItem";
import {ICoin} from "../../models/ICoin";
import CoinAPI from "../../services/CoinAPI";
import GradientProgress from "../UI/GradientProgress";
import ListNavigation from "../ListNavigation/ListNavigation";
import {styled} from "@mui/material/styles";

// TODO: add error handling

/* Table component that renders table head and all coins inside using map method */
const CoinList = () => {
    const [coins, setCoins] = useState<ICoin[]>([]) // coins list

    // fetching coins from API
    useEffect(() => {
        CoinAPI.getCoinsList().then(list => setCoins(list))
    }, [])

    return (
        <CoinsContainer sx={{justifyContent: coins.length > 0 ? "start" : "center"}}>
            {coins.length > 0
                ?
                <Table>
                    <TableHead>
                        <ListNavigation/>
                    </TableHead>
                    <TableBody >
                        {coins.map(coin =>
                            <CoinItem key={coin.id} coin={coin}/>
                        )}
                    </TableBody>
                </Table>
                :
                <GradientProgress sx={{m: 4}} size={70} />
            }
        </CoinsContainer>
    );
};

export default CoinList;

// styled components
const CoinsContainer = styled(TableContainer)(({theme}) => (
    `
      overflow-x: scroll;
      overflow-y: hidden;
    &::-webkit-scrollbar {
      height: 6px;
      background-color: transparent;
    };
    &::-webkit-scrollbar-track {
      background-color: transparent;
    };
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: ${theme.palette.background.paper};
    };
    display: flex;
    `
))
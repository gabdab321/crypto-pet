import React, {useState, useEffect} from 'react';
import {ICoin} from "../models/ICoin";
import CoinAPI from "../services/CoinAPI";
import {Box, Button, Container, Divider, Stack, Typography} from "@mui/material";
import CoinItem from "../components/CoinItem/CoinItem";
import CoinList from "../components/CoinList/CoinList";

const MainPage = () => {


    return (
        <Container sx={{backgroundColor: "background.default"}}>
            <CoinList/>
        </Container>
    );
};

export default MainPage;
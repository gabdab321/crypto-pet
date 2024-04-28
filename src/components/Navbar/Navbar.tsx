import React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import Search from "../Search/Search";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{bgcolor: "background.default"}} position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        CryptoPet
                    </Typography>

                    <Search />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, justifyContent: "end"}}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="search"
                        >
                            <SearchIcon/>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ ml:1, display: { xs: 'flex', sm: 'none' } }}
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
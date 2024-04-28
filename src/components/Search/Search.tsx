import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    return (
        <TextField
            id="input-with-icon-textfield"
            size="small"
            placeholder="Search"
            sx={{
                my: 2,
                display: {xs: "none", sm: "block"}
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
        />
    );
};

export default Search;
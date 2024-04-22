import {createTheme} from "@mui/material/styles";

/* MUI theme config */
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffbf00',
        },
        secondary: {
            main: '#ef6c00',
        },
        background: {
            default: '#161616',
            paper: '#161616',
        },
        text: {
            primary: '#ffffff',
        },
        error: {
            main: '#d32f2f',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
    },
})

export default theme
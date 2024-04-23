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
            paper: '#424242', //'#4f4f4f',
        },
        text: {
            primary: '#ffffff',
            secondary: '#949494'
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
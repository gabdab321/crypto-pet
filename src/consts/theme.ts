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
        success: {
            dark: "#388e3c",
            main: "#66bb6a",
            light: "#81c784"
        },
        error: {
            dark: "#d32f2f",
            main: '#f44336',
            light: "#e57373"
        },
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        body1: {
            fontSize: 16,
            fontWeight: 800,
            margin: 0
        },
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: "none"
                }
            },
            defaultProps: {
                padding: "none"
            }
        },
    }
})

export default theme
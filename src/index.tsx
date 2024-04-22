import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const themeOptions = createTheme({
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


root.render(
  <React.StrictMode>
      <ThemeProvider theme={themeOptions}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
import React from 'react';
import './App.scss';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";

// TODO: Make 404 page

function App() {
    return (
        <>
            <Navbar/>
            <AppRouter/>
        </>
    );
}

export default App;

import React from 'react';
import routes from "../consts/routes";
import {Routes, Route} from "react-router-dom"

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => <Route key={route.path} {...route}/>)}
        </Routes>
    );
};

export default AppRouter;
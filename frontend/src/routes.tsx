import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../src/pages/Login";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Login} />
        </BrowserRouter>
    );
};

export default Routes;

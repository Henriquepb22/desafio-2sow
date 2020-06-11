import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/signup" component={Signup} />
            </Layout>
        </BrowserRouter>
    );
};

export default Routes;

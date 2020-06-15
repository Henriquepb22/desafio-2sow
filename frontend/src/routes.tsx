import React, { useContext } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

import userContext from "./store/userContext";

const Routes: React.FC = () => {
    const user = useContext(userContext);

    return (
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard">
                    {user.name && user.token ? (
                        <Dashboard />
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/signup" component={Signup}>
                    {user.name && user.token ? <Signup /> : <Redirect to="/" />}
                </Route>
                <Route path="/">
                    <Redirect to="/" />
                </Route>
            </Layout>
        </BrowserRouter>
    );
};

export default Routes;

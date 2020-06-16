import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

import UserContext from "./store/UserContext";

const Routes: React.FC = () => {
    const user = useContext(UserContext);
    const [loggedUser, setLoggedUser] = useState(user);

    /* 
        Só exibe as páginas se o usuário estiver logado,
        se não redireciona para a página de login
    */
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
                <Layout>
                    <Route exact path="/">
                        {loggedUser.nome ? (
                            <Redirect to="/dashboard" />
                        ) : (
                            <Login />
                        )}
                    </Route>
                    <Route path="/dashboard">
                        {loggedUser.nome ? <Dashboard /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/signup">
                        {loggedUser.nome ? <Signup /> : <Redirect to="/" />}
                    </Route>
                </Layout>
            </UserContext.Provider>
        </BrowserRouter>
    );
};

export default Routes;

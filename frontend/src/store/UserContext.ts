import { createContext } from "react";

const initialState = JSON.parse(localStorage.getItem("user") as string) || {
    nome: undefined,
    token: undefined,
};

const UserContext = createContext(initialState);

export default UserContext;

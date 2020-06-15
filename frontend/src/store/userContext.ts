import { createContext } from "react";

const initialState = {
    name: undefined,
    token: undefined,
};

export default createContext(initialState);

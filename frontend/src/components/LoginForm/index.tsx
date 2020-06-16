import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import crypto from "crypto";

import api from "../../services/api";

import UserContext from "../../store/UserContext";

//Segredo do hash
const secret = "I413T1A_SDFÇT435";

const LoginForm: React.FC = () => {
    const { setLoggedUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        await api
            .get(`/usuarios?email=${email}&password=${password}&_limit=1`)
            .then((res) => {
                if (res.data.length === 0) {
                    const emailInput = document.getElementById(
                        "email"
                    ) as HTMLInputElement;
                    emailInput.select();
                    emailInput.focus();
                    toast.error(`${email} não cadastrado.`, {
                        autoClose: 2000,
                    });
                    setLoading(false);
                    return;
                }
                toast.success("Conectado", { autoClose: 2000 });
                setLoading(false);
                const { nome } = res.data[0];
                const token = crypto
                    .createHmac("sha256", secret)
                    .update(password)
                    .digest("hex");
                const user = { nome, token };
                localStorage.setItem("user", JSON.stringify(user));
                setLoggedUser(user);
            });
    }

    return (
        <form onSubmit={(e) => handleLogin(e)}>
            <ToastContainer />
            <fieldset>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </fieldset>
            <fieldset>
                <label htmlFor="senha">Senha:</label>
                <input
                    type="password"
                    name="senha"
                    id="senha"
                    minLength={5}
                    placeholder="Insira sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </fieldset>
            <button type="submit" disabled={loading}>
                Entrar
            </button>
        </form>
    );
};

export default LoginForm;

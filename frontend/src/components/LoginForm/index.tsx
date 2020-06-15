import React, { useContext } from "react";

import userContext from "../../store/userContext";

const LoginForm: React.FC = () => {
    const user = useContext(userContext);

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        console.log(user);
    }

    return (
        <form onSubmit={(e) => handleLogin(e)}>
            <fieldset>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="seuemail@exemplo.com"
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
                    required
                />
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    );
};

export default LoginForm;

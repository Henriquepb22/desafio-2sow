import React from "react";

const LoginForm: React.FC = () => {
    return (
        <form>
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

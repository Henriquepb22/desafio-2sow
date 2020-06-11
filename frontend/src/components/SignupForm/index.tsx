import React from "react";

import FormField from "../FormField";

const SignupForm: React.FC = () => {
    return (
        <form>
            <span>Dados Pessoais:</span>
            <FormField
                name="name"
                label="Nome:"
                type="text"
                placeholder="Insira seu nome"
            />
            <FormField
                name="cpf"
                label="CPF:"
                type="text"
                placeholder="Insira seu CPF"
            />
            <FormField
                name="email"
                label="E-mail:"
                type="email"
                placeholder="Insira seu e-mail"
            />
            <span>Endereço:</span>
            <FormField
                name="cep"
                label="CEP:"
                type="text"
                placeholder="00000-000"
            />
            <FormField
                name="street"
                label="Rua:"
                type="text"
                placeholder="Ex: Avenida Paulista"
            />
            <FormField
                name="number"
                label="Número:"
                type="text"
                placeholder="Ex: 123A"
            />
            <FormField
                name="neighborhood"
                label="Bairro:"
                type="text"
                placeholder="Ex: Campinas"
            />
            <FormField
                name="city"
                label="Cidade:"
                type="text"
                placeholder="Ex: São Paulo"
            />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default SignupForm;

import React, { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";

const SignupForm: React.FC = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleUser(e: FormEvent) {
        e.preventDefault();
        setLoading(true);

        await api
            .post("/usuarios", {
                nome,
                cpf,
                email,
                endereco: {
                    cep,
                    rua,
                    numero,
                    bairro,
                    cidade,
                },
            })
            .then((resp) => {
                if (resp.status === 201) {
                    toast.success(`${nome} cadastrado com sucesso!`, {
                        autoClose: 2000,
                    });
                    cleanFields();
                    setLoading(false);
                }
            })
            .catch((err) => {
                toast.error(err);
                setLoading(false);
            });
    }

    function cleanFields() {
        setNome("");
        setCpf("");
        setEmail("");
        setCep("");
        setRua("");
        setNumero("");
        setBairro("");
        setCidade("");
    }

    return (
        <form onSubmit={(e) => handleUser(e)}>
            <ToastContainer />
            <fieldset>
                <legend>Dados Pessoais:</legend>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Insira seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <label htmlFor="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    placeholder="Insira seu CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Insira seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </fieldset>
            <fieldset>
                <legend>Endereço:</legend>
                <label htmlFor="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    placeholder="00000-000"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required
                />
                <label htmlFor="rua">Rua:</label>
                <input
                    type="text"
                    id="rua"
                    placeholder="Ex: Avenida Paulista"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    required
                />
                <label htmlFor="numero">Número:</label>
                <input
                    type="text"
                    id="numero"
                    placeholder="Ex: 123A"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                />
                <label htmlFor="bairro">Bairro:</label>
                <input
                    type="text"
                    id="bairro"
                    placeholder="Ex: Centro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    required
                />
                <label htmlFor="cidade">Cidade:</label>
                <input
                    type="text"
                    id="cidade"
                    placeholder="Ex: São Paulo"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    required
                />
            </fieldset>
            <button type="submit" disabled={loading}>
                Cadastrar
            </button>
        </form>
    );
};

export default SignupForm;

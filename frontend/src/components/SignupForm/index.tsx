import React, { useEffect, useState } from "react";
import MaskedInput from "react-text-mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import useQuery from "../../utils/useQuery";

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
    const [isEdit, setIsEdit] = useState(false);

    const query = useQuery();
    const userId = query.get("id");

    useEffect(() => {
        async function handleEdit() {
            //Transforma a tela no modo de edição se receber algum id pela url
            if (userId !== null) {
                setIsEdit(true);
                setLoading(true);
                await api
                    .get(`/usuarios/${userId}`)
                    .then((res) => {
                        setNome(res.data.nome);
                        setCpf(res.data.cpf);
                        setEmail(res.data.email);
                        setCep(res.data.endereco.cep);
                        setRua(res.data.endereco.rua);
                        setNumero(res.data.endereco.numero);
                        setBairro(res.data.endereco.bairro);
                        setCidade(res.data.endereco.cidade);
                        setLoading(false);
                    })
                    .catch(() => {
                        toast.error("Usuário não encontrado", {
                            autoClose: 2000,
                        });
                    });
            }
        }

        handleEdit();
    }, [userId]);

    useEffect(() => {
        async function handleAddress() {
            // Formata o cep digitado retirando o "-"
            const formatedCep = cep.replace("-", "");
            const cepRegex = new RegExp(/^[0-9]{8}$/);

            // Só executa a requisição caso o valor digitado seja de 8 números.
            if (formatedCep.match(cepRegex)) {
                await axios
                    .get(`https://viacep.com.br/ws/${formatedCep}/json`)
                    .then((res) => {
                        /* 
                        De acordo com a documentação a requisição retorna um objeto 
                        com uma propriedade chamada "erro" com valor true se o cep for inválido. 
                        */
                        if (res.data.erro) {
                            const cepInput = document.getElementById(
                                "cep"
                            ) as HTMLInputElement;
                            // Se o cep for inválido seleciona o cep digitado para alteração.
                            cepInput.select();
                            cepInput.focus();
                            cepInput.setSelectionRange(
                                0,
                                cepInput.innerText.length - 1
                            );
                            return alert("CEP digitado inválido!");
                        }
                        /* 
                        Caso o cep esteja correto adiciona os valores correspondentes aos campos
                        de logradouro, bairro e cidade e muda o foco para o campo de número. 
                        */
                        setRua(res.data.logradouro);
                        setBairro(res.data.bairro);
                        setCidade(res.data.localidade);
                        document.getElementById("numero")?.focus();
                    });
            }
        }
        handleAddress();
    }, [cep]);

    async function handleUser(e: React.FormEvent) {
        /* 
        Previne a página de recarregar e muda a 
        propriedade de loading enquanto faz a requisição 
        */
        e.preventDefault();
        setLoading(true);

        const userData = {
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
        };

        //Atualiza os dados do usuário com id igual ao recebido na url
        if (isEdit) {
            await api.put(`/usuarios/${userId}`, userData);
            cleanFields();
            return toast.success("Usuário alterado com sucesso!", {
                autoClose: 2000,
            });
        }
        await api
            .post("/usuarios", userData)
            .then((res) => {
                /* 
                Caso não haja nenhum erro com a api e os dados sejam salvos
                exibe um toast, limpa os campos e muda a propriedade loading. 
                */
                if (res.status === 201) {
                    toast.success(`${nome} cadastrado com sucesso!`, {
                        autoClose: 2000,
                    });
                    cleanFields();
                    setLoading(false);
                }
            })
            .catch(() => {
                // Caso haja um erro na api retorna um toast com a mensagem de erro.
                toast.error("Ocorreu um erro no requisição, tente novamente", {
                    autoClose: 2000,
                });
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
                    maxLength={11}
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
                <MaskedInput
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
                    type="text"
                    id="cep"
                    placeholder="Ex: 12345-678"
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
                {isEdit ? "Salvar" : "Cadastrar"}
            </button>
        </form>
    );
};

export default SignupForm;

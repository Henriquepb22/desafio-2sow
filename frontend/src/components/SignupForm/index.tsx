import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import useQuery from "../../utils/useQuery";

import api from "../../services/api";

import * as S from "./styled";

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
                    cleanFields();
                    setLoading(false);
                    return toast.success(`${nome} cadastrado com sucesso!`, {
                        autoClose: 2000,
                    });
                }
            })
            .catch(() => {
                // Caso haja um erro na api retorna um toast com a mensagem de erro.
                setLoading(false);
                return toast.error(
                    "Ocorreu um erro no requisição, tente novamente",
                    {
                        autoClose: 2000,
                    }
                );
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
        <S.SignupForm onSubmit={(e) => handleUser(e)}>
            <ToastContainer />
            <S.UserData>
                <S.FieldLegend>Dados Pessoais</S.FieldLegend>
                <S.FieldLabel htmlFor="nome">Nome</S.FieldLabel>
                <S.FieldInput
                    type="text"
                    id="nome"
                    placeholder="Nome do usuário"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <S.FieldLabel htmlFor="cpf">CPF</S.FieldLabel>
                <S.FieldWithMask
                    mask={[
                        /\d/,
                        /\d/,
                        /\d/,
                        ".",
                        /\d/,
                        /\d/,
                        /\d/,
                        ".",
                        /\d/,
                        /\d/,
                        /\d/,
                        "-",
                        /\d/,
                        /\d/,
                    ]}
                    type="text"
                    id="cpf"
                    placeholder="CPF do usuário"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                <S.FieldLabel htmlFor="email">E-mail</S.FieldLabel>
                <S.FieldInput
                    type="email"
                    id="email"
                    placeholder="E-mail do usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </S.UserData>
            <S.UserAddress>
                <S.FieldLegend>Endereço</S.FieldLegend>
                <S.FieldLabel htmlFor="cep">CEP</S.FieldLabel>
                <S.FieldWithMask
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
                    type="text"
                    id="cep"
                    placeholder="Ex: 12345-678"
                    value={cep}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCep(e.target.value)
                    }
                    required
                />
                <S.FieldLabel htmlFor="rua">Rua</S.FieldLabel>
                <S.FieldInput
                    type="text"
                    id="rua"
                    placeholder="Ex: Avenida Paulista"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    required
                />
                <S.FieldLabel htmlFor="numero">Número</S.FieldLabel>
                <S.FieldInput
                    type="text"
                    id="numero"
                    placeholder="Ex: 123A"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                />
                <S.FieldLabel htmlFor="bairro">Bairro</S.FieldLabel>
                <S.FieldInput
                    type="text"
                    id="bairro"
                    placeholder="Ex: Centro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    required
                />
                <S.FieldLabel htmlFor="cidade">Cidade</S.FieldLabel>
                <S.FieldInput
                    type="text"
                    id="cidade"
                    placeholder="Ex: São Paulo"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    required
                />
            </S.UserAddress>
            <S.SubmitButton type="submit" disabled={loading}>
                {isEdit ? "Salvar" : "Cadastrar"}
            </S.SubmitButton>
        </S.SignupForm>
    );
};

export default SignupForm;

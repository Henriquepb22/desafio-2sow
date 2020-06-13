import React, { useEffect, useState } from "react";

import api from "../../services/api";

type Usuario = {
    nome: string;
    cpf: string;
    email: string;
    endereco: Endereco;
};

type Endereco = {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
};

const UsersTable: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            await api.get("/usuarios").then((resp) => {
                setUsuarios(resp.data);
                setLoading(false);
            });
        }

        loadUsers();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>CPF</td>
                    <td>Email</td>
                    <td>Cidade</td>
                </tr>
            </thead>
            <tbody>
                {loading ? (
                    <tr>
                        <td>Carregado...</td>
                    </tr>
                ) : (
                    usuarios.map((usuario) => (
                        <tr key={usuario.cpf}>
                            <td>{usuario.nome}</td>
                            <td>{usuario.cpf}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.endereco.cidade}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default UsersTable;

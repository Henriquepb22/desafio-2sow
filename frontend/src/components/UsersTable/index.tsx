import React from "react";

type TableProps = {
    usuarios: Usuario[];
};

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

const UsersTable: React.FC<TableProps> = ({ usuarios }) => {
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
                {usuarios.map((usuario) => (
                    <tr key={usuario.cpf}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.cpf}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.endereco.cidade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;

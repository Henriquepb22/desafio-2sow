import React from "react";
import { Link } from "react-router-dom";

type TableProps = {
    usuarios: Usuario[];
    onDelete: (id: number, email: string) => void;
    loading: boolean;
};

type Usuario = {
    id: number;
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

const UsersTable: React.FC<TableProps> = ({ usuarios, onDelete, loading }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>CPF</td>
                    <td>Email</td>
                    <td>Cidade</td>
                    <td>Ações</td>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario) => (
                    <tr key={usuario.cpf}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.cpf}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.endereco.cidade}</td>
                        <td>
                            <Link to={`/signup?id=${usuario.id}`}>Editar</Link>
                        </td>
                        <td>
                            <button
                                onClick={() =>
                                    onDelete(usuario.id, usuario.email)
                                }
                                disabled={loading}
                            >
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;

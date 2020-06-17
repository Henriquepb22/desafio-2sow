import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styled";

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
        <S.UsersTable>
            <S.TableHeader>
                <tr>
                    <S.HeaderData>Nome</S.HeaderData>
                    <S.HeaderData>CPF</S.HeaderData>
                    <S.HeaderData>Email</S.HeaderData>
                    <S.HeaderData>Cidade</S.HeaderData>
                    <S.HeaderData>Ações</S.HeaderData>
                </tr>
            </S.TableHeader>
            <tbody>
                {usuarios.map((usuario) => (
                    <tr key={usuario.cpf}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.cpf}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.endereco.cidade}</td>
                        <td>
                            <Link to={`/signup?id=${usuario.id}`}>Editar</Link>
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
        </S.UsersTable>
    );
};

export default UsersTable;

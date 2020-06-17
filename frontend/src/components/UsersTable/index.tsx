import React from "react";
import { EditAlt, Eraser } from "styled-icons/boxicons-solid";
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
                <S.HeaderRow>
                    <S.HeaderData>Nome</S.HeaderData>
                    <S.HeaderData>CPF</S.HeaderData>
                    <S.HeaderData>Email</S.HeaderData>
                    <S.HeaderData>Cidade</S.HeaderData>
                    <S.HeaderData>Ações</S.HeaderData>
                </S.HeaderRow>
            </S.TableHeader>
            <S.TableBody>
                {usuarios.map((usuario) => (
                    <S.BodyRow key={usuario.cpf}>
                        <S.BodyData>{usuario.nome}</S.BodyData>
                        <S.BodyData>{usuario.cpf}</S.BodyData>
                        <S.BodyData>{usuario.email}</S.BodyData>
                        <S.BodyData>{usuario.endereco.cidade}</S.BodyData>
                        <S.BodyActions>
                            <S.EditContainer title="Editar">
                                <Link to={`/signup?id=${usuario.id}`}>
                                    <EditAlt size={25} color="#fff" />
                                </Link>
                            </S.EditContainer>
                            <S.DeleteButton
                                title="Excluir"
                                onClick={() =>
                                    onDelete(usuario.id, usuario.email)
                                }
                                disabled={loading}
                            >
                                <Eraser size={25} color="#fff" />
                            </S.DeleteButton>
                        </S.BodyActions>
                    </S.BodyRow>
                ))}
            </S.TableBody>
        </S.UsersTable>
    );
};

export default UsersTable;

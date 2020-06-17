import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import UsersTable from "../../components/UsersTable";

import api from "../../services/api";

import * as S from "./styled";

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

const Dashboard = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState("");
    const [isFiltered, setIsFiltered] = useState(false);
    const [actualPage, setActualPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        //Carrega a primeira página da lista no carregamento da página
        loadUsers(1);
    }, []);

    //Carrega todos os usuários
    async function loadUsers(page: number) {
        setLoading(true);
        await api.get(`/usuarios?&_page=${page}`).then((res) => {
            setActualPage(page);
            setUsuarios(res.data);
            setLoading(false);
            setTotal(Number(res.headers["x-total-count"]));
        });
    }

    //Carrega apenas os usuários do filtro
    async function loadFilteredUsers(page: number) {
        setLoading(true);
        await api
            .get(`/usuarios?nome_like=${searchName}&_page=${page}`)
            .then((res) => {
                setActualPage(page);
                setIsFiltered(true);
                setUsuarios(res.data);
                setLoading(false);
                setTotal(Number(res.headers["x-total-count"]));
            });
    }

    //Retorna para a primeira página com o filtro adicionado
    function searchUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleFirstPage();
    }

    //Limpa o filtro e retorna para a primeira página
    function cleanFilter() {
        setSearchName("");
        loadUsers(1);
        setActualPage(1);
        setIsFiltered(false);
    }

    //Deleta o usuário do id recebido e volta para a primeira página
    async function handleDelete(id: number, email: string) {
        if (
            window.confirm(`Confirmar exclusão do usuário com email ${email}?`)
        ) {
            setLoading(true);
            await api.delete(`/usuarios/${id}`).then(() => {
                toast.success("Excluído com sucesso!", { autoClose: 2000 });
                loadUsers(1);
            });
        }
    }

    //Paginação
    function handleFirstPage() {
        const firstPage = 1;
        if (searchName === "") {
            return loadUsers(firstPage);
        }
        return loadFilteredUsers(firstPage);
    }

    function handleLastPage() {
        const lastPage =
            total % 10 !== 0 ? Math.trunc(total / 10) + 1 : total / 10;
        if (searchName === "") {
            return loadUsers(lastPage);
        }
        return loadFilteredUsers(lastPage);
    }

    function handleNextPage() {
        if (searchName === "") {
            return loadUsers(actualPage + 1);
        }
        return loadFilteredUsers(actualPage + 1);
    }

    function handlePrevPage() {
        if (searchName === "") {
            return loadUsers(actualPage - 1);
        }
        return loadFilteredUsers(actualPage - 1);
    }

    return (
        <S.DashboardWrapper>
            <ToastContainer />
            <S.DashboardTitle>Lista de Usuários</S.DashboardTitle>
            <S.SearchForm onSubmit={(e) => searchUser(e)}>
                <S.SearchField>
                    <S.SearchLabel htmlFor="search">
                        Buscar por nome:
                    </S.SearchLabel>
                    <S.SearchInput
                        type="text"
                        id="search"
                        placeholder="Digite um nome para buscar"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        required
                    />
                </S.SearchField>
                <S.SearchActions>
                    <S.SearchButton
                        type="submit"
                        disabled={loading}
                        title="Buscar"
                    >
                        Buscar
                    </S.SearchButton>
                    <S.CancelButton
                        type="reset"
                        disabled={loading || !isFiltered}
                        onClick={cleanFilter}
                        title="Limpar Filtro"
                    >
                        Limpar Filtro
                    </S.CancelButton>
                </S.SearchActions>
            </S.SearchForm>
            {loading ? (
                <S.LoadingText>Carregando...</S.LoadingText>
            ) : (
                <UsersTable
                    usuarios={usuarios}
                    onDelete={handleDelete}
                    loading={loading}
                />
            )}
            <S.PaginationWrapper>
                <S.PaginationText>
                    Página {actualPage} de{" "}
                    {total
                        ? total % 10 !== 0
                            ? Math.trunc(total / 10) + 1
                            : total / 10
                        : 1}
                </S.PaginationText>
                <S.TotalText>
                    Total de registros: <S.TotalCount>{total}</S.TotalCount>
                </S.TotalText>
            </S.PaginationWrapper>
            <S.PaginationActions>
                <S.PaginationButtons
                    disabled={actualPage === 1 || loading}
                    onClick={handleFirstPage}
                >
                    Primeira
                </S.PaginationButtons>
                <S.PaginationButtons
                    disabled={actualPage === 1 || loading}
                    onClick={handlePrevPage}
                >
                    Anterior
                </S.PaginationButtons>
                <S.PaginationButtons
                    disabled={total / 10 <= actualPage || loading}
                    onClick={handleNextPage}
                >
                    Próxima
                </S.PaginationButtons>
                <S.PaginationButtons
                    disabled={total / 10 <= actualPage || loading}
                    onClick={handleLastPage}
                >
                    Última
                </S.PaginationButtons>
            </S.PaginationActions>
        </S.DashboardWrapper>
    );
};

export default Dashboard;

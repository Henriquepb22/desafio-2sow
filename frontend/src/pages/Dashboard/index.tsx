import React, { useEffect, useState } from "react";

import UsersTable from "../../components/UsersTable";

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
                setIsFiltered(true);
                setUsuarios(res.data);
                setLoading(false);
                setTotal(Number(res.headers["x-total-count"]));
            });
    }

    //Busca os usuários filtrando pelo nome digitado
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

    //Paginação
    function handleFirstPage() {
        const firstPage = 1;
        setActualPage(1);
        if (searchName === "") {
            loadUsers(firstPage);
        }
        loadFilteredUsers(firstPage);
    }

    function handleLastPage() {
        const lastPage =
            total % 10 !== 0 ? Math.trunc(total / 10) + 1 : total / 10;
        setActualPage(lastPage);
        if (searchName === "") {
            loadUsers(lastPage);
        }
        loadFilteredUsers(lastPage);
    }

    function handleNextPage() {
        setActualPage(actualPage + 1);
        if (searchName === "") {
            loadUsers(actualPage + 1);
        }
        loadFilteredUsers(actualPage + 1);
    }

    function handlePrevPage() {
        setActualPage(actualPage + 1);
        if (searchName === "") {
            loadUsers(actualPage - 1);
        }
        loadFilteredUsers(actualPage - 1);
    }

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <form onSubmit={(e) => searchUser(e)}>
                <label htmlFor="search">Buscar por nome:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Digite um nome"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    Buscar
                </button>
                <button
                    type="reset"
                    disabled={loading || !isFiltered}
                    onClick={cleanFilter}
                >
                    Limpar Filtro
                </button>
            </form>
            {loading ? (
                <h2>Carregando...</h2>
            ) : (
                <UsersTable usuarios={usuarios} />
            )}
            <div>
                <span>
                    Página {actualPage} de{" "}
                    {total
                        ? total % 10 !== 0
                            ? Math.trunc(total / 10) + 1
                            : total / 10
                        : 1}
                </span>
                <span>Total de registros: {total}</span>
            </div>
            <div>
                <button
                    disabled={actualPage === 1 || loading}
                    onClick={handleFirstPage}
                >
                    Primeira
                </button>
                <button
                    disabled={actualPage === 1 || loading}
                    onClick={handlePrevPage}
                >
                    Anterior
                </button>
                <button
                    disabled={total / 10 <= actualPage || loading}
                    onClick={handleNextPage}
                >
                    Próxima
                </button>
                <button
                    disabled={total / 10 <= actualPage || loading}
                    onClick={handleLastPage}
                >
                    Última
                </button>
            </div>
        </div>
    );
};

export default Dashboard;

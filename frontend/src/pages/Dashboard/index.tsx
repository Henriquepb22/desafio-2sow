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
    const [searchName, setSearchName] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);

        async function loadUsers() {
            await api.get(`/usuarios?_page=${page}`).then((res) => {
                setUsuarios(res.data);
                setLoading(false);
                setTotal(Number(res.headers["x-total-count"]));
            });
        }

        loadUsers();
    }, [page]);

    async function searchUser(e: React.FormEvent, name: string) {
        e.preventDefault();
        setLoading(true);
        await api.get(`/usuarios?nome_like=${name}`).then((res) => {
            setUsuarios(res.data);
            setLoading(false);
            setSearchName("");
        });
    }

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <form onSubmit={(e) => searchUser(e, searchName)}>
                <label htmlFor="search">Buscar por nome:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Digite um nome"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    required
                />
            </form>
            {loading ? (
                <h2>Carregando...</h2>
            ) : (
                <UsersTable usuarios={usuarios} />
            )}
            <span>
                Página {page} de {Math.trunc(total / 10 + 1)}
            </span>
            <div>
                <button
                    disabled={page === 1 || loading}
                    onClick={() => setPage(1)}
                >
                    Primeira
                </button>
                <button
                    disabled={page === 1 || loading}
                    onClick={() => setPage(page - 1)}
                >
                    Anterior
                </button>
                <button
                    disabled={total / 10 <= page || loading}
                    onClick={() => setPage(page + 1)}
                >
                    Próxima
                </button>
                <button
                    disabled={total / 10 <= page || loading}
                    onClick={() => setPage(Math.trunc(total / 10 + 1))}
                >
                    Última
                </button>
            </div>
        </div>
    );
};

export default Dashboard;

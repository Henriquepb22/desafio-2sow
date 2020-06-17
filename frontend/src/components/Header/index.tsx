import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../store/UserContext";

import * as S from "./styled";

const Header: React.FC = () => {
    const { loggedUser, setLoggedUser } = useContext(UserContext);

    function handleLogout() {
        localStorage.removeItem("user");
        setLoggedUser({
            nome: undefined,
            token: undefined,
        });
    }

    return (
        <S.HeaderContainer>
            <S.HeaderTitle>Cadastro.io</S.HeaderTitle>
            <S.HeaderNav>
                <S.HeaderList>
                    {loggedUser.nome ? (
                        <>
                            <S.HeaderLinks>
                                <Link to="/dashboard">Lista de Usuários</Link>
                            </S.HeaderLinks>
                            <S.HeaderLinks>
                                <Link to="/signup">Adicionar Usuário</Link>
                            </S.HeaderLinks>
                            <S.HeaderLinks>
                                <Link to="/" onClick={handleLogout}>
                                    Logout
                                </Link>
                            </S.HeaderLinks>
                        </>
                    ) : (
                        <S.HeaderLinks>
                            <Link to="/">Realize seu Login</Link>
                        </S.HeaderLinks>
                    )}
                </S.HeaderList>
            </S.HeaderNav>
        </S.HeaderContainer>
    );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styled";

const Header: React.FC = () => {
    return (
        <S.HeaderContainer>
            <S.HeaderTitle>Cadastro.io</S.HeaderTitle>
            <S.HeaderNav>
                <S.HeaderList>
                    <S.HeaderLinks>
                        <Link to="/dashboard">Lista de Usuários</Link>
                    </S.HeaderLinks>
                    <S.HeaderLinks>
                        <Link to="/signup">Adicionar Usuário</Link>
                    </S.HeaderLinks>
                    <S.HeaderLinks>
                        <Link to="/">Logout</Link>
                    </S.HeaderLinks>
                </S.HeaderList>
            </S.HeaderNav>
        </S.HeaderContainer>
    );
};

export default Header;

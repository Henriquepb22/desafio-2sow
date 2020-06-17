import React from "react";

import LoginForm from "../../components/LoginForm";

import * as S from "./styled";

const Login: React.FC = () => {
    return (
        <S.LoginWrapper>
            <S.LoginTitle>Dados do Usuário</S.LoginTitle>
            <LoginForm />
        </S.LoginWrapper>
    );
};

export default Login;

import React from "react";

import LoginForm from "../../components/LoginForm";

import * as S from "./styled";

const Login: React.FC = () => {
    return (
        <S.LoginWrapper>
            <S.LoginTitle>Faça seu Login</S.LoginTitle>
            <LoginForm />
        </S.LoginWrapper>
    );
};

export default Login;

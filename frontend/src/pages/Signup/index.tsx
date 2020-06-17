import React from "react";

import SignupForm from "../../components/SignupForm";

import * as S from "./styled";

const Signup: React.FC = () => {
    return (
        <S.SignupWrapper>
            <SignupForm />
        </S.SignupWrapper>
    );
};

export default Signup;

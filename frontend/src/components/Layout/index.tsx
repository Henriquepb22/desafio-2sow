import React from "react";

import Header from "../Header";

import { GlobalStyles } from "../../styles/global";
import * as S from "./styled";

const Layout: React.FC = ({ children }) => {
    return (
        <S.LayoutWrapper>
            <GlobalStyles />
            <Header />
            <S.ContentContainer>{children}</S.ContentContainer>
        </S.LayoutWrapper>
    );
};

export default Layout;

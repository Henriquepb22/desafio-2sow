import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #bdc3c7;
`;

export const HeaderTitle = styled.h1`
    font-size: 2rem;
    margin-left: 2.2rem;
`;

export const HeaderNav = styled.nav`
    margin-right: 2rem;
`;

export const HeaderList = styled.ul`
    display: flex;
`;

export const HeaderLinks = styled.li`
    margin: 0 0.8rem;
`;

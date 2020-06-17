import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #3d6cb9;
    box-shadow: 0 1px 7px 1px #3d6cb9;
`;

export const HeaderTitle = styled.h1`
    margin-left: 2.2rem;
    color: white;
    font-size: 2rem;
    font-weight: bold;
`;

export const HeaderNav = styled.nav`
    margin-right: 2rem;
`;

export const HeaderList = styled.ul`
    display: flex;
`;

export const HeaderLinks = styled.li`
    margin: 0 0.8rem;

    a {
        padding: 0.6rem;
        font-weight: bold;
        text-decoration: none;
        color: white;
    }
`;

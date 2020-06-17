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
    margin-left: 0.8rem;
    color: white;
    font-size: 1.8rem;
    font-weight: bold;

    @media (min-width: 768px) {
        margin-left: 1.2rem;
        font-size: 2rem;
    }

    @media (min-width: 992px) {
        margin-left: 1.8rem;
        font-size: 2.2rem;
    }
`;

export const HeaderNav = styled.nav`
    margin-right: 0.8rem;

    @media (min-width: 768px) {
        margin-right: 1.2rem;
    }

    @media (min-width: 992px) {
        margin-right: 1.8rem;
    }
`;

export const HeaderList = styled.ul`
    display: flex;
`;

export const HeaderLinks = styled.li`
    margin: 0 0.4rem;
    white-space: nowrap;

    @media (min-width: 768px) {
        margin: 0 0.6rem;
    }

    @media (min-width: 992px) {
        margin: 0 0.8rem;
    }

    a {
        padding: 0.6rem;
        font-weight: bold;
        text-decoration: none;
        color: white;

        &:hover {
            border-bottom: 2px solid #ddd;
        }
    }
`;

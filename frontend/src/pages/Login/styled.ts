import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    box-shadow: none;

    @media (min-width: 576px) {
        margin-top: 2rem;
        width: 500px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 4px 4px 8px 1px #ccc;
    }
`;

export const LoginTitle = styled.h2`
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (min-width: 992px) {
        font-size: 2.2rem;
    }
`;

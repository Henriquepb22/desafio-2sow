import styled from "styled-components";

export const LoginForm = styled.form`
    padding: 1rem 0.6rem;

    @media (min-width: 576px) {
        padding: 1rem;
    }
`;

export const LoginFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LoginLabel = styled.label`
    margin: 0.6rem 0;
    font-weight: 500;
    font-size: 1.2rem;

    @media (min-width: 992px) {
        font-size: 1.6rem;
    }
`;

export const LoginInput = styled.input`
    width: calc(100% - 1.6rem);
    padding: 0.4rem 0.8rem;
    border: none;
    border-bottom: 1px solid #999;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 1rem;

    @media (min-width: 992px) {
        font-size: 1.2rem;
    }
`;

export const LoginButton = styled.button`
    margin-top: 1rem;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    background: #00d1ff;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.4s;

    &:hover,
    &:focus {
        transition: opacity 0.4s;
        opacity: 0.5;
    }

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }

    @media (min-width: 992px) {
        font-size: 1.2rem;
    }
`;

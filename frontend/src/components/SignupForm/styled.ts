import styled from "styled-components";
import MaskedInput from "react-text-mask";

export const SignupForm = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 500px;
    }
`;

export const UserData = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const UserAddress = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
`;

export const FieldLegend = styled.legend`
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 1.4rem;
    }

    @media (min-width: 992px) {
        font-size: 1.6rem;
    }
`;

export const FieldLabel = styled.label`
    margin: 0.6rem 0 0.4rem;
    font-weight: 500;
    font-size: 1.2rem;

    @media (min-width: 768px) {
        margin: 0.8rem 0 0.6rem;
        font-size: 1.3rem;
    }

    @media (min-width: 992px) {
        font-size: 1.4rem;
    }
`;

export const FieldInput = styled.input`
    width: 100%;
    padding: 0.4rem 0.8rem;
    border: none;
    border-bottom: 1px solid #777;
    font-size: 1rem;

    @media (min-width: 768px) {
        font-size: 1.1rem;
    }

    @media (min-width: 992px) {
        font-size: 1.2rem;
    }
`;

export const FieldWithMask = styled(MaskedInput)`
    width: 100%;
    padding: 0.4rem 0.8rem;
    border: none;
    border-bottom: 1px solid #777;
    font-size: 1rem;

    @media (min-width: 768px) {
        font-size: 1.1rem;
    }

    @media (min-width: 992px) {
        font-size: 1.2rem;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 1rem;
    padding: 0 1rem;
    background: #27ae60;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:focus,
    &:hover {
        transition: opacity 0.4s;
        opacity: 0.5;
    }

    &:disabled {
        opacity: 0.3;
    }

    @media (min-width: 768px) {
        font-size: 1.4rem;
        height: 45px;
    }
`;

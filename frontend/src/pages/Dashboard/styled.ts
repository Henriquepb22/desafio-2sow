import styled from "styled-components";

export const DashboardWrapper = styled.main`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DashboardTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
`;

export const SearchForm = styled.form`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const SearchField = styled.fieldset`
    white-space: nowrap;
`;

export const SearchActions = styled.div`
    margin-top: 0.4rem;
    display: flex;
`;

export const SearchLabel = styled.label`
    font-size: 1.2rem;
    padding: 0 0.4rem;
`;

export const SearchInput = styled.input`
    width: 300px;
    padding: 0.4rem;
    border: none;
    border-bottom: 1px solid #333;
    font-size: 1rem;
`;

export const SearchButton = styled.button`
    width: 120px;
    height: 35px;
    margin: 0 0.33rem;
    border: none;
    border-radius: 5px;
    background: #3d6cb9;
    color: white;
    font-weight: bold;
    font-size: 1rem;

    &:hover,
    &:focus {
        cursor: pointer;
        transition: opacity 0.4s;
        opacity: 0.5;
    }

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }
`;

export const CancelButton = styled.button`
    width: 120px;
    height: 35px;
    margin: 0 0.33rem;
    border: none;
    border-radius: 5px;
    background: #999;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    white-space: nowrap;

    &:hover,
    &:focus {
        cursor: pointer;
        transition: opacity 0.4s;
        opacity: 0.5;
    }

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }
`;

export const PaginationWrapper = styled.div`
    padding: 0.6rem;
    display: flex;
`;

export const PaginationText = styled.span`
    font-size: 1.1rem;
`;

export const TotalText = styled.span`
    font-size: 1.1rem;
    margin-left: 1rem;
`;

export const TotalCount = styled.strong`
    font-weight: bold;
`;

export const PaginationActions = styled.div`
    padding: 0.4rem;
`;

export const PaginationButtons = styled.button`
    background: #46565e;
    color: white;
    margin: 0 0.4rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.6rem 0.8rem;
    transition: opacity 0.4s;
    cursor: pointer;

    &:hover,
    &:focus {
        transition: opacity 0.4s;
        opacity: 0.5;
    }

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }
`;

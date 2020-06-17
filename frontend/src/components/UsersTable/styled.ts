import styled from "styled-components";

export const UsersTable = styled.table`
    border: 1px solid #777;
    box-shadow: 4px 4px 8px 1px #777;
    margin: 1rem;
`;

export const TableHeader = styled.thead`
    background: #40514e;
`;

export const HeaderRow = styled.tr`
    border-bottom: 1px solid #777;
    text-align: center;
`;

export const HeaderData = styled.td`
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    padding: 1rem;
    border-right: 1px solid #777;
`;

export const TableBody = styled.tbody`
    text-align: center;
`;

export const BodyRow = styled.tr`
    border-bottom: 1px solid #777;

    &:hover,
    &focus {
        background: #ddd;
    }
`;

export const BodyData = styled.td`
    padding: 1rem;
    border-right: 1px solid #777;
    font-size: 1rem;
`;

export const BodyActions = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EditContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background: #27ae60;
    margin-right: 3px;
    transition: opacity 0.4s;

    a {
        padding: 5px;
    }

    &:hover,
    &:focus,
    &:focus-within {
        transition: opacity 0.4s;
        opacity: 0.5;
    }
`;

export const DeleteButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #c0392b;
    padding: 5px;
    transition: opacity 0.4s;

    &:hover,
    &:focus {
        transition: opacity 0.4s;
        opacity: 0.5;
    }
`;

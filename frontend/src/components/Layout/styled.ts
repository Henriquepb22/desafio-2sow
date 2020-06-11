import styled from "styled-components";

export const LayoutWrapper = styled.div`
    display: grid;
    grid-template-areas:
        "header"
        "content";
    grid-template-rows: 80px 1fr;
    grid-template-columns: 1fr;
`;

export const ContentContainer = styled.div`
    grid-area: content;
    display: flex;
    justify-content: center;
`;

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        "header"
        "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0px;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;
    }

    a {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }
    > h1 {
        font-weight: 500;
        padding-top: 64px;
        font-size: 36px;
    }
    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }
`;

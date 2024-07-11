import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;

    grid-template-areas:
        "header"
        "content";

        >main{
            overflow-y:auto;
            grid-area:content;
            &::-webkit-scrollbar {
        width: 12px; /* Largura da scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_800}; /* Cor da trilha da scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.ORANGE}; /* Cor do polegar da scrollbar */
        border-radius: 10px; /* Arredondamento do polegar */
        border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_900}; /* Borda ao redor do polegar */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.COLORS.ORANGE_DARK}; /* Cor do polegar ao passar o mouse */
    }
        }
    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
    }
`;

export const Form = styled.form`
    max-width: 600px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
        a:hover{
            color: ${({theme}) => theme.COLORS.ORANGE}
        }
    }
`;

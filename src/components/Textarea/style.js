import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    border: none;
    resize: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
    padding: 16px;
    border-radius: 8px;

    &&::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    /* Estilizando a scrollbar */
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
`;


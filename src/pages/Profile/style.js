import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    > header {
        width: 100%;
        height: 144px;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        display: flex;
        align-items: center;
        padding: 0 124px;
        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 24px;
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;
`;

export const Avatar = styled.div`
    position: relative;
    margin: -115px auto 32px;
    width: 180px;
    height: 180px;
    > img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }
    > label {
        width: 48px;
        height: 48px;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        display: flex;
        justify-content: center;
        position: absolute;
        align-items: center;
        bottom: 7px;
        border-radius: 50%;
        right: 7px;

        input {
            display: none;
        }
        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.GRAY_300} ;
        }
    }
`;

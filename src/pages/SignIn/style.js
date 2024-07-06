import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    justify-content:center;

    > h1{
        font-size:48px;
        color: ${({ theme }) => theme.COLORS.ORANGE}
    }
    >h2{
        font-size: 24px;
        margin-top:84px;
        margin-bottom:24px;

        >strong{
            color: ${({ theme }) => theme.COLORS.ORANGE}
        }
    }
    >p{
        font-size:18px;
        margin-top:15px;
        text-align:center;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    >a{
        margin-top:25px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
    >
    `;

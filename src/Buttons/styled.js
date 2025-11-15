import styled, { css } from "styled-components";

export const SmallButton = styled.button`
    color: hsl(180, 100%, 25%);
    height: 50px;
    font-size: 20px;
    padding: 10px;
    border: none;
    background-color: white;

    &:hover{
        color: hsl(180, 100%, 40%);
        height: 50px;
        font-size: 20px;
        padding: 10px;
        border: none;
        transition: 0.3s;
    }

    ${({ done }) => done && css`
        color: grey;
        height: 50px;
        font-size: 20px;
        padding: 10px;
        border: none;

        &:hover {
            color: grey;
        }
    `}
`
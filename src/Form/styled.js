import styled, { css } from "styled-components";

export const FormField = styled.input`
    color: rgb(0, 0, 0);
    padding: 5px;
    border: 2px solid rgba(109, 77, 8, 0.555);
    border-radius: 5px;
    width: 80%;
    max-width: 80%;
    margin: 5px;

    @media (max-width: 767px) {
        width: 100%;
        max-width: 100%;
        margin: auto;
    }
`
export const StyledButton = styled.button`
    color: rgb(255, 255, 255);
    background-color:hsl(180, 100%, 25%);
    border: none;
    padding: 10px;
    width: auto;
    margin: 10px;

    &:hover{
        color: rgb(241, 232, 211);
        background-color: hsl(180, 100%, 40%);
        transition: 0.3s;
        transform: scale(1.1);
    }

    @media (max-width: 767px) {
        width: 100%;
        margin: 10px auto;
    }
`

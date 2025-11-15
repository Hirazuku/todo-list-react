import styled, { css } from "styled-components";

export const StyledContainer = styled.main`
    margin: 10px;
    max-width: 900px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.ebb};
    font: 25px / 2 'Oswald', sans-serif;
`
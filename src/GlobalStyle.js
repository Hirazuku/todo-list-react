import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

.body {
    margin: auto;
    max-width: 900px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font: 25px/2 'Oswald', sans-serif;
    padding: 10px;
}
`
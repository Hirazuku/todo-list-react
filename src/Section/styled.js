import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background-color: rgb(255, 255, 255);
    padding: 10px;
    margin: 15px 0;
    box-shadow: 15px 15px 15px 15px rgba(188, 182, 170, 0.26);
    font-size: 25px;
`

export const SectionGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(2, 150px);
    align-content: right;
    grid-gap: 20px;
    padding: 10px;

    @media (max-width: 767px){
        padding: 5px;
        grid-template-columns: 3fr;
    }
`
export const SectionTitle = styled.div`
    padding: 0;
    font-weight: bold;
    font-size: 25px;
`

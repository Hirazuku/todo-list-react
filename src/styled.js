import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

&:hover{
        color: ${({ theme }) => theme.colors.twine};
        height: 50px;
        font-size: 20px;
        transition: 0.3s;
    }

&.${activeClassName} {
    font-weight: bold;
}
`;

export const List = styled.ul`
    margin: 15px 0;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.teal};
    list-style-type: none;
    text-decoration: none;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
`

export const ListItem = styled.li`
    padding: 0px 15px;
`
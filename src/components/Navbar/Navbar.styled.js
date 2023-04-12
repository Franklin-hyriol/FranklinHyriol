import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
    width: 100%;
    height: 64px;
    background-color: ${props => props.theme.navbarBg};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
`;

const HomeIcon = styled(Link)`
    color: ${props => props.theme.text};
    margin-left: 15px;
    padding: 15px;

    &:hover{
        color: ${props => props.theme.textHover};
    }

    svg{
        font-size: 1.6rem;
    }
`;

const NavLink = styled.div`
    display: flex;
    flex-direction: row;

    div{
        cursor: pointer;
        padding: 21px 15px;
        position: relative;
        color: ${props => props.theme.text};
        font-size: 1.2rem;
        font-weight: 500;

        &:hover{
            color: ${props => props.theme.textHover};
        }
    }


    div.active{
        color: ${props => props.theme.textHover};

        &::before{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 5px;
            background-color: ${props => props.theme.textHover};
            bottom: 1px;
            left: 0;
        }
    }
`;

const ThemeSwitch = styled.div`
    margin-right: 30px;
    width: 50px;
    height: 25px;
    cursor: pointer;
`;

/* Switch toggle theme */

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: ${props => props.theme.switchBg};
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transition: left 2s ease-in;

    svg{
        position: absolute;
        margin-left: 4px;
        color: ${props => props.theme.switchSvgColor};
        left: ${props => props.bgcolor === 'light' ? '0px' : '25px'};
    }
`

export { Container, HomeIcon, NavLink, ThemeSwitch, Wrapper };
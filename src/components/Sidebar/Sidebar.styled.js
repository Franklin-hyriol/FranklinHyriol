import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.nav`
    flex-basis: 15%;
    height: 100%;
    background-color: ${props => props.theme.sidebarBg};
    text-align: center;
`;

const Information = styled.div`
    margin-top: 20px;
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    .name{
        color: ${props => props.theme.nameSidebar};
        font-size: calc(7px + 0.390625vw);
        letter-spacing: 1px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .job{
        color: ${props => props.theme.jobSidebar};
        font-size: calc(6px + 0.390625vw);
        font-weight: bold;
    }
`;

const Navigation = styled.div`
    margin-top: 13vh;
`;

const NavItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.navItemDisable};
    text-decoration: none;
    padding: 2.5vh 0;
    position: relative;

    svg{
        font-size: calc(25px + 0.390625vw);
        margin-bottom: 1.5vh;
    }

    span{
        font-size: calc(5px + 0.390625vw);
        font-weight: 600;
    }

    &.active{
        color: ${props => props.theme.navItemActive};
        background-color: ${props => props.theme.navItemActiveBg};
    }

    &.active::before{
        content: '';
        position: absolute;
        width: 5px;
        height: 100%;
        background-color: ${props => props.theme.navItemActive};
        left: 2px;
    }

    &:hover{
        color: ${props => props.theme.navItemActive};
        background-color: ${props => props.theme.navItemActiveBg};
    }
`;

export { Container, Information, Navigation, NavItem };
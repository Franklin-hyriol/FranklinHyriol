import React from 'react';
import { Container, Information, Navigation, NavItem } from './Sidebar.styled';
import ProfileLight from '../../assets/profile-light.png';
import ProfileDark from '../../assets/profile-dark.png';

//Icons
import { BsInfoCircle } from 'react-icons/bs';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdOutlineFolderSpecial, MdAlternateEmail } from 'react-icons/md';
import { useSelector } from 'react-redux';


function Sidebar() {

    const checkTheme = useSelector(state => state.theme.value);

    return (
        <Container>
            <Information>
                <img src={checkTheme === 'light' ? ProfileLight : ProfileDark} alt="Photo Franklin Hyriol" />
                <p className="name">Franklin Hyriol</p>
                <p className="job">Développeur<br />Front-end</p>
            </Information>

            <Navigation>
                <NavItem to="/">
                    <BsInfoCircle />
                    <span>INFORMATION</span>
                </NavItem>
                <NavItem to="/competence">
                    <IoSchoolOutline />
                    <span>COMPÉTENCE</span>
                </NavItem>
                <NavItem to="/mes_projets">
                    <MdOutlineFolderSpecial />
                    <span>MES PROJETS</span>
                </NavItem>
                <NavItem to="/contact">
                    <MdAlternateEmail />
                    <span>CONTACT</span>
                </NavItem>
            </Navigation>
        </Container>
    )
}

export default Sidebar;

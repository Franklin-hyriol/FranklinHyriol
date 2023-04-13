import React, { useContext } from 'react';
import { Container } from './Content.styled';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function Content() {

    return (
        <Container>
            <Sidebar />
            <Outlet /> {/* inject all content here */}
        </Container>
    )
}

export default Content;

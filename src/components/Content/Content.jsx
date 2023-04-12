import React, { useContext } from 'react';
import { Container } from './Content.styled';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai'

function Content() {

    return (
        <Container>
            <Sidebar />
            <Outlet /> {/* inject all content here */}

            <p className='copyright'>Designed and Developed with <AiFillHeart /> by <a href="/#" target="_blank" rel="noopener noreferrer">Franklin Hyriol</a></p>
        </Container>
    )
}

export default Content

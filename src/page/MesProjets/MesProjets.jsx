import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Wrapper, Content } from './MesProjets.styled';
import { AiFillHeart } from 'react-icons/ai';

/* Components */
import Integration from './Integration/Integration';
import FrontEnd from './FrontEnd/FrontEnd';
import FullStack from './FullStack/FullStack';


function MesProjets() {
    const menu = ['Integration', 'Front End', 'Full Stack'];
    const [toggle, setToggle] = useState(0);

    const handleToggle = (id) => {
        setToggle(id);
    }

    return (
        <Container>
            <Navbar menu={menu} change={handleToggle} active={toggle} />

            <Wrapper>
                <Content>
                    {
                        toggle === 0 ? <Integration /> :
                            toggle === 1 ? <FrontEnd /> :
                                <FullStack />
                    }
                </Content>
                <div className='copyright'>Designed and Developed with <AiFillHeart /> by <a href="/#" target="_blank" rel="noopener noreferrer">Franklin Hyriol</a></div>
            </Wrapper>
        </Container>
    )
}

export default MesProjets;

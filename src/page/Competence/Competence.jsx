import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Wrapper, Content } from './Competence.styled';
import { AiFillHeart } from 'react-icons/ai';

/* components */
import HardSkills from './HardSkills/HardSkills';
import SoftSkills from './SoftSkills/SoftSkills';
import Difficulte from './Difficulte/Difficulte';

function Competence() {
    const menu = ['Hard skills', 'Soft Skills', 'Difficulté'];
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
                        toggle === 0 ? <HardSkills /> :
                            toggle === 1 ? <SoftSkills /> :
                                <Difficulte />
                    }
                </Content>
                <div className='copyright'>Designed and Developed with <AiFillHeart /> by <a href="/#" target="_blank" rel="noopener noreferrer">Franklin Hyriol</a></div>
            </Wrapper>
        </Container>
    )
}

export default Competence;

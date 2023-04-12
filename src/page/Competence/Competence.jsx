import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Wrapper, Content } from './Competence.styled';

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
            </Wrapper>
        </Container>
    )
}

export default Competence;

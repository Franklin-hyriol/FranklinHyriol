import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Wrapper, Content } from './Information.styled';

/* Components */
import Presentation from './Presentation/Presentation';
import Parcours from './Parcours/Parcours';
import Passions from './Passions/Passions';


function Information() {
    const menu = ['Présentation', 'Parcours', 'Passions'];
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
                        toggle === 0 ? <Presentation /> :
                            toggle === 1 ? <Parcours /> :
                                <Passions />
                    }
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Information;

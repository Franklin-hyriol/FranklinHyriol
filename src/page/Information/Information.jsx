import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, Wrapper, Content } from './Information.styled';
import { AiFillHeart } from 'react-icons/ai';

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
                <div className='copyright'>Designed and Developed with <AiFillHeart /> by <a href="/#" target="_blank" rel="noopener noreferrer">Franklin Hyriol</a></div>
            </Wrapper>
        </Container>
    )
}

export default Information;

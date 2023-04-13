import React, { useState } from 'react';
import Navbar from './../../components/Navbar/Navbar';
import { Container, Wrapper, Content } from './Contact.styled';
import { AiFillHeart } from 'react-icons/ai';

/*Components*/
import Email from './Email/Email';
import ReseauxSociaux from './ReseauxSociaux/ReseauxSociaux';

function Contact() {
    const menu = ['Email', 'Réseaux Sociaux'];
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
                        toggle === 0 ? <Email /> : <ReseauxSociaux />
                    }
                </Content>
                <div className='copyright'>Designed and Developed with <AiFillHeart /> by <a href="/#" target="_blank" rel="noopener noreferrer">Franklin Hyriol</a></div>
            </Wrapper>
        </Container>
    )
}

export default Contact;

import React, { useState } from 'react';
import Navbar from './../../components/Navbar/Navbar';
import { Container, Wrapper, Content } from './Contact.styled';

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
            </Wrapper>
        </Container>
    )
}

export default Contact;

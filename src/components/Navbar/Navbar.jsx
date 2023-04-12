import React, { useState } from 'react';
import { Container, HomeIcon, NavLink, ThemeSwitch, Wrapper } from './Navbar.styled';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../../redux/slice/themeSlice';

function Navbar(props) {

    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch();

    const active = (id) => id === props.active ? 'active' : '';

    const handleTheme = () => {
        if (theme === 'light') {
            dispatch(setTheme('dark'));
            window.localStorage.setItem('theme', 'dark');
        }

        if (theme === 'dark') {
            dispatch(setTheme('light'));
            window.localStorage.setItem('theme', 'light');
        }
    }

    return (
        <Container>
            <HomeIcon to="/">
                <AiOutlineHome />
            </HomeIcon>

            <NavLink>
                {props.menu.map((item, id) => (
                    <div className={active(id)} key={id} onClick={() => props.change(id)}>{item}</div>
                ))}
            </NavLink>

            <ThemeSwitch onClick={() => handleTheme()}>
                <Wrapper bgcolor={theme}>
                    {theme === 'light' ? <BsMoonStarsFill className='moon' /> : <BsFillSunFill className='sun' />}
                </Wrapper>
            </ThemeSwitch>
        </Container>
    )
}

export default Navbar;

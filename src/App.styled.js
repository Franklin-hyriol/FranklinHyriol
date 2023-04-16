import styled from "styled-components";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;

    .copyright{
        position: absolute;
        bottom: 3vh;
        left: 50%;
        transform: translateX(-50%);
        font-size: calc(8px + 0.390625vw);
        color: ${props => props.theme.text};
        font-weight: 600;
        z-index: 3;

        a{
            color: ${props => props.theme.text};
            font-weight: 900;
        }
    }
`;

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export { Container, Background };
import styled from "styled-components";

const Container = styled.div`
    flex-basis: 85%;
    background-color: ${props => props.theme.BgBlur};
    backdrop-filter: blur(15px);
    overflow-y: hidden;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 91%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 90%;
    height: 80%;
    background-color: ${props => props.theme.contentBg};
`;

export { Container, Wrapper, Content };
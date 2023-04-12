import styled from "styled-components";

const Container = styled.section`
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;

    .copyright{
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-20%);
        font-size: 0.8rem;
        color: ${props => props.theme.text};
        font-weight: 600;
        z-index: 3;

        a{
            color: ${props => props.theme.text};
            font-weight: 900;
        }
    }
`;

export { Container };
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const Left = styled.div`
    height: 100%;
    flex-basis: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;

    p:first-child{
        align-self: flex-end;
        font-size: calc(7px + 0.390625vw);
        margin-bottom: 10px;
        font-weight: 600;
        color: ${props => props.theme.textHelloJob};
    }

    h2{
        font-size: calc(38px + 0.390625%);
        letter-spacing: 2px;
        white-space: nowrap;
        font-weight: 900;
        color: ${props => props.theme.nameContent};
    }

    p:last-child{
        margin-top: 10px;
        font-size: calc(12px + 0.390625vw);
        text-align: center;
        color: ${props => props.theme.textHelloJob};
        font-weight: 600;
    }
`;

const Text = styled.div`
    margin: 0px 30px;
    font-size: calc(10px + 0.390625vw);
    color: ${props => props.theme.contentText};
    line-height: 4vh;

    span{
        font-size: 1.6rem;
        font-weight: 600;
    }
`;


const Right = styled.div`
    height: 100%;
    flex-basis: 45%;
    position: relative;

    img, svg{
        position: absolute;
    }

    img:first-child{
        width: 90%;
        height: auto;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    svg{
        width: 80%;
        height: auto;
        fill: ${props => props.theme.nameContent};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export { Container, Left, Right, Name, Text };


import styled from "styled-components";

const Container = styled.div`
    height: 100%;

    hr{
        margin-bottom: 40px;
        border-top: 1px solid ${props => props.theme.text};
    }
`;

const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 12%;

    div{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 50%;
        position: relative;
        height: 100%;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${props => props.theme.text};
    }

    div.active{
        color: ${props => props.theme.textHover};

        &::after{
            content: '';
            display: block;
            position: absolute;
            bottom: -1px;
            width: 100%;
            height: 5px;
            background-color: ${props => props.theme.textHover};
        }
    }
`;

const Wrapper = styled.div`
    height: 83%;
`;


const Scolaires = styled.div`
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    color: ${props => props.theme.text};

    .desc{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 1.4rem;
    }

    .content{
        div:not(:last-child){
            display: flex;
            flex-direction: row;
            font-size: 1.2rem;
            p:first-child{
                flex-basis: 35%;
            }

            p:last-child{
                flex-basis: 65%;
            }
        }

        div:first-child{
            margin-top: 35px;
        }

        div:not(:first-child){
            margin-top: 20px;
        }

        hr{
            margin-top: 20px;
            margin-bottom: 0px;
        }

        .arrow{
            position: absolute;
            right: 0px;
            bottom: 50px;
            svg{
                display: block;
                font-size: 1.5rem;
                cursor: pointer;

                &:hover{
                    color: ${props => props.theme.textHover};
                }

                &:active{
                    transform: scale(1.2);
                }
            }
        }
    }
`;

const Professionnels = styled(Scolaires)`

`;

export { Container, Tabs, Wrapper, Scolaires, Professionnels };
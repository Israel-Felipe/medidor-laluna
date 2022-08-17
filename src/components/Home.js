import styled from "styled-components"
import logo from "../imgs/logo.svg"
import { Link } from "react-router-dom";

export default function Home () {
    return (
        <Container>
            <Topo>
                <img src={logo}/>
            </Topo>

            <Link to={"/Calibragem"}>
                <button>Tenho um anel para usar de modelo</button>
            </Link>
            
            <Link to={"/Calibragem"}>
                <button>Não tenho nenhum anel para modelo</button>
            </Link>
            
        </Container>
    )
}
const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        width: 60vw;
        height: auto;
        margin: 20px;
        padding: 20px;
        background-color: #A3612F;
        color: #FFFFFF;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    }
`

const Topo = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    img {
        width: 70%;
        max-width: 300px;
        height: auto;
        position: inherit;
        margin-bottom: 100px;
    }
`


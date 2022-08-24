import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext} from "react";
import UserContext from "../context/UserContext"; 
import cartao from "../imgs/cartao.png";

export default function Calibragem () {
    const { tamCartao, setTamCartao } = useContext(UserContext);
    return (
        <Container>

            <Ajuste>
                <Cartao largura={`${tamCartao}px`}>
                    <img src={cartao} alt="calibragem"/>
                </Cartao>
            </Ajuste>
            
            <Instrucoes>
                <h2>Instrução:</h2>
                <h3> Primeiro precisamos calibrar o medidor. Para isso, posicione um CARTÃO BANCÁRIO na figura acima e ajuste-a arrastando a bolinha abaixo, até que fique com a mesma LARGURA do cartão.</h3>
            </Instrucoes>

            <Botoes>
                <input type="range" name="tamanho" min="250" max="400" step="1" value={tamCartao} onChange={e => setTamCartao(e.target.value)} />
                <Link to={"/MedicaoComAnel"}>
                    <button>Pronto, já calibrei!</button>
                </Link>
                <Link to={"/"}>
                    <Voltar>Voltar</Voltar>
                </Link> 
            </Botoes>
            
            
            
        </Container>
    )
}
const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2vh;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2 {
        font-weight: bold;
        line-height: 40px;
        font-size: 20px;
    }

    h3 {
        line-height: 22px;
        font-size: 14px;
    }
    input {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 5px;
    background-color: #F7EDE4;
    outline: none;
    width: 60vw;
    height: 10px;
    margin: 10px 20px;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1); 
    }

    input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);   
    background: #A3612F;     
    cursor: pointer;
}

    input::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
    background: #A3612F;
    cursor: pointer;
}
`

const Ajuste = styled.div`
    width: 90%;
    height: auto;
    margin-bottom: 3vh;
`

const Cartao = styled.div`
    width: ${props => props.largura};
    max-width: 100%;
    height: 40vh;
    border-radius: 20px;
    border: 1px solid black;
    padding: 40px;
    background-color: #F7EDE4;
    position: relative;

    img {
        max-height: 100%;
        max-width: 100%;
    }
`

const Botoes = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        bottom: 5vh;

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

const Voltar = styled.div`
    display: flex;
    align-items: center;
    color: #A3612F;
    cursor: pointer;
    font-size: 20px;
`

const Instrucoes = styled.div`
    width: 80vw;
    text-align: left;
`
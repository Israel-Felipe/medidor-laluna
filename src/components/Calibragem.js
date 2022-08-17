import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState, useContext} from "react";
import UserContext from "../context/UserContext"; 

import logo from "../imgs/logo.svg";

export default function Calibragem () {
    const { tamCartao, setTamCartao } = useContext(UserContext);
    return (
        <Container>

            <Ajuste>
                <Cartao largura={`${tamCartao}px`}><img src={logo}></img><div></div></Cartao>
            </Ajuste>
            
            <div>
                <input type="range" name="tamanho" min="0" max="400" step="1" value={tamCartao} onChange={e => setTamCartao(e.target.value)} />
                <Link to={"/MedicaoComAnel"}>
                    <button>Pronto, já calibrei!</button>
                </Link>
                <Link to={"/"}>
                    <Voltar>Voltar</Voltar>
                </Link> 
            </div>
            
            
            
        </Container>
    )
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
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
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
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
    width: 80%;
`

const Cartao = styled.div`
    width: ${props => props.largura};
    height: 60vh;
    margin-bottom: 100px;
    border-radius: 20px;
    border: 2px solid black;
    padding: 30px;
    background-color: #F7EDE4;

`

const Voltar = styled.div`
    display: flex;
    align-items: center;
    color: #A3612F;
    cursor: pointer;
    font-size: 20px;
`
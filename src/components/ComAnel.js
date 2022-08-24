import { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import UserContext from "../context/UserContext"; 
import { Link } from "react-router-dom";

import bganel from "../imgs/bganel.png"

export default function Home() {
    const { umCm } = useContext(UserContext);
    
    const [tamAnel, setTamAnel] = useState(150);
    
    const tamAnelCm = tamAnel / umCm;

    const [aro, setAro] = useState(10)

    useEffect(() => {
        if (tamAnelCm < 1.45) {
            setAro("Aro: ##")
        } else if (tamAnelCm <= 1.48) {
            setAro("Aro: 10")
        } else if (tamAnelCm <= 1.52) {
            setAro("Aro: 11")
        } else if (tamAnelCm <= 1.55) {
            setAro("Aro: 12")
        } else if (tamAnelCm <= 1.58) {
            setAro("Aro: 13")
        } else if (tamAnelCm <= 1.62) {
            setAro("Aro: 14")
        } else if (tamAnelCm <= 1.65) {
            setAro("Aro: 15")
        } else if (tamAnelCm <= 1.68) {
            setAro("Aro: 16")
        } else if (tamAnelCm <= 1.72) {
            setAro("Aro: 17")
        } else if (tamAnelCm <= 1.75) {
            setAro("Aro: 18")
        } else if (tamAnelCm <= 1.78) {
            setAro("Aro: 19")
        } else if (tamAnelCm <= 1.82) {
            setAro("Aro: 20")
        } else if (tamAnelCm <= 1.85) {
            setAro("Aro: 21")
        } else if (tamAnelCm <= 1.88) {
            setAro("Aro: 22")
        } else if (tamAnelCm <= 1.92) {
            setAro("Aro: 23")
        } else if (tamAnelCm <= 1.95) {
            setAro("Aro: 24")
        } else if (tamAnelCm <= 1.99) {
            setAro("Aro: 25")
        } else if (tamAnelCm <= 2.02) {
            setAro("Aro: 26")
        } else if (tamAnelCm <= 2.05) {
            setAro("Aro: 27")
        } else if (tamAnelCm <= 2.08) {
            setAro("Aro: 28")
        } else if (tamAnelCm <= 2.12) {
            setAro("Aro: 29")
        } else if (tamAnelCm <= 2.15) {
            setAro("Aro: 30")
        } else if (tamAnelCm <= 2.18) {
            setAro("Aro: 31")
        } else if (tamAnelCm <= 1.22) {
            setAro("Aro: 32")
        } else if (tamAnelCm <= 2.25) {
            setAro("Aro: 33")
        } else if (tamAnelCm <= 2.28) {
            setAro("Aro: 34")
        } else if (tamAnelCm <= 2.32) {
            setAro("Aro: 35")
        } else {
            setAro("Aro: ##")
        }
    }, [tamAnelCm])
    
    return (
        <Container>
            <BoxTamanho>
                <CirculoMaior>
                    <Circulo tamAnel={`${tamAnel}px`}><img src={bganel} alt="anel"></img></Circulo>
                </CirculoMaior>
            </BoxTamanho>

            <h1>{aro}</h1>
            
            <Instrucoes>
                <h2>Instrução:</h2>
                <h3> Posicione O ANEL na figura acima e ajuste-a até que fiquem do mesmo tamanho.</h3>
                <h4> OBS: Caso o seu anel modelo for anatômico, considere um número a menos do aro.</h4>
            </Instrucoes>

            <Botoes>
            <input type="range" name="tamanho" min="50" max="200" step="0.5" value={tamAnel} onChange={e => setTamAnel(e.target.value)} />
                <a href="https://www.lalunapratas.com.br/aneis" target="_blank" rel="noreferrer">
                    <button>Ir para o site</button>
                </a>
                <Link to={"/Calibragem"}>
                    <Voltar>Voltar</Voltar>
                </Link>
            </Botoes>

        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20%;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        height: 100px;
        font-size: 35px;
        text-align: center;
        display: flex;
        align-items: center;
        font-weight: bold;
    }

    h2 {
        font-weight: bold;
        line-height: 40px;
        font-size: 20px;
    }

    h3, h4 {
        line-height: 22px;
        font-size: 14px;
    }

    h4 {
        font-weight: bold;
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

const BoxTamanho = styled.div`
    width: 80vw;
    height: 30vh;
    align-items: left;
    margin-top: 5vw;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    position: relative;
`

const CirculoMaior = styled.div`
    width: ${props => props.tamAnel};
    height: ${props => props.tamAnel};
    padding: 5px;
    background-color: #CF6B2D;
    border-radius: 100px;
    position: absolute;
    bottom: 0px;
`

const Circulo = styled.div`
    width: ${props => props.tamAnel};
    height: ${props => props.tamAnel};
    border-radius: 100px;
    background-image: ${bganel};

    img {
        border-radius: 100px;
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
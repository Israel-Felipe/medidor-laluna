import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Home() {
    
    const [tamAnel, setTamAnel] = useState(5);
    
    const [aro, setAro] = useState(10)

    useEffect(() => {
        if (tamAnel < 5.10) {
            setAro("Aro: 10")
        } else if (tamAnel < 5.20) {
            setAro("Aro: 11")
        } else if (tamAnel < 5.30) {
            setAro("Aro: 12")
        } else if (tamAnel < 5.40) {
            setAro("Aro: 13")
        } else if (tamAnel < 5.50) {
            setAro("Aro: 14")
        } else if (tamAnel < 5.60) {
            setAro("Aro: 15")
        } else if (tamAnel < 5.70) {
            setAro("Aro: 16")
        } else if (tamAnel < 5.80) {
            setAro("Aro: 17")
        } else if (tamAnel < 5.90) {
            setAro("Aro: 18")
        } else if (tamAnel < 6.00) {
            setAro("Aro: 19")
        } else if (tamAnel < 6.10) {
            setAro("Aro: 20")
        } else if (tamAnel < 6.20) {
            setAro("Aro: 21")
        } else if (tamAnel < 6.30) {
            setAro("Aro: 22")
        } else if (tamAnel < 6.40) {
            setAro("Aro: 23")
        } else if (tamAnel < 6.50) {
            setAro("Aro: 24")
        } else if (tamAnel < 6.60) {
            setAro("Aro: 25")
        } else if (tamAnel < 6.70) {
            setAro("Aro: 26")
        } else if (tamAnel < 6.80) {
            setAro("Aro: 27")
        } else if (tamAnel < 6.90) {
            setAro("Aro: 28")
        } else if (tamAnel < 7.00) {
            setAro("Aro: 29")
        } else if (tamAnel < 7.10) {
            setAro("Aro: 30")
        } else if (tamAnel < 7.20) {
            setAro("Aro: 31")
        } else if (tamAnel < 7.30) {
            setAro("Aro: 32")
        } else if (tamAnel < 7.40) {
            setAro("Aro: 33")
        } else if (tamAnel < 7.50) {
            setAro("Aro: 34")
        } else {
            setAro("Aro: 35")
        }
    }, [tamAnel])
    
    return (
        <Container>
            
            
            <Instrucoes>
                <h2>Instrução:</h2>
                <h3> Arraste a bolinha até que indique a medida exata da circuferência do seu dedo, conforme você mediu seguindo as orientações da tela anterior. </h3>
            </Instrucoes>
            
            <h2>{tamAnel} cm</h2>
            <input type="range" name="tamanho" min="5" max="7.5" step="0.1" value={tamAnel} onChange={e => setTamAnel(e.target.value)} />

            <Footer>
                <h1>{aro}</h1>
                
                
                <a href="https://www.lalunapratas.com.br/aneis" target="_blank" rel="noreferrer">
                    <button>Ir para o site</button>
                </a>
                <Link to={"/InstrucaoSemAnel"}>
                    <Voltar>Voltar</Voltar>
                </Link>
            </Footer>

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
    padding-top: 30%;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        height: 100px;
        font-size: 50px;
        text-align: center;
        display: flex;
        align-items: center;
    }

    h2 {
        font-weight: bold;
        line-height: 40px;
        font-size: 20px;
    }

    h3 {
        line-height: 22px;
        font-size: 16px;
        margin-bottom: 2vh;
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

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
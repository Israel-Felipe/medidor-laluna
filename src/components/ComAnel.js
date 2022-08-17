import { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import logo from "../imgs/logo.svg"
import bgimg from "../imgs/bg.svg"
import UserContext from "../context/UserContext"; 

export default function Home() {
    const { umCm } = useContext(UserContext);
    
    const [tamAnel, setTamAnel] = useState(150);
    
    const tamAnelCm = tamAnel / umCm;

    const [aro, setAro] = useState(10)

    useEffect(() => {
        if (tamAnelCm < 1.45) {
            setAro("Faça o ajuste corretamente")
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
            setAro("Faça o ajuste corretamente")
        }
    }, [tamAnel])
    
    return (
        <Container>
            <Topo>
                <img src={logo}></img>
            </Topo>

            <h1>{aro}</h1>
            <BoxTamanho>
                <Quadrado>
                    <Circulo tamAnel={`${tamAnel}px`} />
                </Quadrado>
                
            </BoxTamanho>
            
            <div>
                <input type="range" name="tamanho" min="50" max="150" step="1" value={tamAnel} onChange={e => setTamAnel(e.target.value)} />
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
    padding-bottom: 20%;

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

const Topo = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    img {
        width: 50%;
        max-width: 300px;
        height: auto;
    }
`

const BoxTamanho = styled.div`
    width: 60vw;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`
const Quadrado = styled.div`
    width: ${props => props.tamAnel};
    height: ${props => props.tamAnel};
    padding: 5px;
    background-color: #CF6B2D;
    border-radius: 100px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
`

const Circulo = styled.div`
    width: ${props => props.tamAnel};
    height: ${props => props.tamAnel};
    border-radius: 100px;
    background-color: #F7EDE4;
`


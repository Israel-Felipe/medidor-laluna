import { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import logo from "../imgs/logo.svg"
import bgimg from "../imgs/bg.svg"
import UserContext from "../context/UserContext"; 

export default function Home() {
    const { umCm } = useContext(UserContext);
    
    const [tamAnel, setTamAnel] = useState(150);
    
    const tamAnelCm = tamAnel / umCm;

    console.log(tamAnelCm);

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


            <BoxTamanho>
                <Quadrado>
                    <Circulo tamAnel={`${tamAnel}px`} />
                </Quadrado>
                
            </BoxTamanho>
            

            <input type="range" name="tamanho" min="0" max="150" step="1" value={tamAnel} onChange={e => setTamAnel(e.target.value)} />
               
               <h1>{aro}</h1>
                       
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin-top: -15px;
    }
`

const Topo = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    img {
        width: 50%;
        max-width: 300px;
        height: auto;
    }
`

const BoxTamanho = styled.div`
    width: 300px;
    max-width: 300px;
    height: 200px;
    background-image: url(${bgimg});
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`
const Circulo = styled.div`
    width: ${props => props.tamAnel};
    height: ${props => props.tamAnel};
    border-radius: 100px;
    border: 1px solid black;
    background-color: #FFFFFF;
`

const Quadrado = styled.div`
    width: ${props => props.tamAnel};
    height: ${props => props.tamAnel};
    border: 1px solid black;

`
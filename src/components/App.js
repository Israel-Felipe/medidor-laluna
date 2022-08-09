
import { useEffect, useState } from "react"
import styled from "styled-components"
import logo from "../imgs/logo.svg"
import bgimg from "../imgs/bg.svg"

export default function App() {
    const [tamAnel, setTamAnel] = useState(20);
    let tamdiv = tamAnel*1.47;

    console.log(tamdiv)
    const [aro, setAro] = useState(10)

    useEffect(() => {
        if(tamAnel <= 14.80) {
            setAro(10)
        } else if (tamAnel <= 15.20) {
            setAro(11)
        } else if (tamAnel <= 15.50) {
            setAro(12)
        } else if (tamAnel <= 15.80) {
            setAro(13)
        } else if (tamAnel <= 16.20) {
            setAro(14)
        } else if (tamAnel <= 16.50) {
            setAro(15)
        } else if (tamAnel <= 16.80) {
            setAro(16)
        } else if (tamAnel <= 17.20) {
            setAro(17)
        } else if (tamAnel <= 17.50) {
            setAro(18)
        } else if (tamAnel <= 17.80) {
            setAro(19)
        } else if (tamAnel <= 18.20) {
            setAro(20)
        } else if (tamAnel <= 18.50) {
            setAro(21)
        } else if (tamAnel <= 18.80) {
            setAro(22)
        } else if (tamAnel <= 19.20) {
            setAro(23)
        } else if (tamAnel <= 19.50) {
            setAro(24)
        } else {
            setAro(25)
        } 
    }, [tamAnel])
    
    return (
        <Container>
            <Topo>
                <img src={logo}></img>
            </Topo>


            <BoxTamanho>
                <Quadrado>
                    <Circulo tamAnel={`${tamdiv}mm`} />
                </Quadrado>
                
            </BoxTamanho>
            

            <h3>{tamAnel} mm</h3>
            <input type="range" name="tamanho" min="14.6" max="20" step="0.2" value={tamAnel} onChange={e => setTamAnel(e.target.value)} />
               
               <h1>Aro: {aro}</h1>
            
                
            
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;

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
    width: ${props => props.tamAnel} !important;
    height: ${props => props.tamAnel} !important;
    border-radius: 100px;
    border: 1px solid black;
    background-color: #FFFFFF;
`

const Quadrado = styled.div`
    width: ${props => props.tamAnel}!important;
    height: ${props => props.tamAnel}!important;
    border: 1px solid black;

`
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import UserContext from "../context/UserContext";
import { useState } from "react";

import Home from "./Home";
import Calibragem from "./Calibragem";
import ComAnel from "./ComAnel";

import InstrucaoSemAnel from "./InstrucaoSemAnel";
import SemAnel from "./SemAnel";

import wallpaper from "../imgs/wallpaper.png";

export default function App() {
    const [tamCartao, setTamCartao] = useState("400");
    const umCm = tamCartao / 5.4;

    return (
        <>
        <Wallpaper src={wallpaper}></Wallpaper>
        <BrowserRouter>
            <GlobalStyled />
            <UserContext.Provider value={{ tamCartao, setTamCartao, umCm }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/calibragem" element={<Calibragem />} />
                        <Route path="/MedicaoComAnel" element={<ComAnel />} />

                        <Route path="/InstrucaoSemAnel"  element={<InstrucaoSemAnel />} />
                        <Route path="/MedicaoSemAnel"  element={<SemAnel />} />
                        
                    </Routes>
            </UserContext.Provider>
        </BrowserRouter>
        
        </>
    )
}


const GlobalStyled = createGlobalStyle`
    ${reset}
    
    *, body {
        box-sizing: border-box;
        cursor: default;
        font-family: 'Roboto', sans-serif;
    a {
        text-decoration: none;
    }
    }
`
const Wallpaper = styled.img`
    position: fixed;
    height: 100vh;
    z-index: -1;
`
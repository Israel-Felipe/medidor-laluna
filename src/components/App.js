import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import UserContext from "../context/UserContext";
import { useState } from "react";

import Home from "./Home";
import ComAnel from "./ComAnel";
import SemAnel from "./SemAnel"
import Calibragem from "./Calibragem";
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
                        <Route path="/"          element={<Home />} />
                        <Route path="/MedicaoComAnel"  element={<ComAnel />} />
                        <Route path="/semanel"  element={<SemAnel />} />
                        <Route path="/calibragem"  element={<Calibragem     />} />
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
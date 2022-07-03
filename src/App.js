import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import FooterComponent from "./Components/Footer"
import HeaderComponent from "./Components/Header"
import MainComponent from "./Components/Main"
import WorksComponent from "./Components/Works"
import * as S from "./Components/styles"
import "./styles.css"
export default function App(){
  return(
    <>
      {HeaderComponent()}
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/Works" element={<WorksComponent />} />
      </Routes>
    </>
  )
}

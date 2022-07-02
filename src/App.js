import React from "react"
import FooterComponent from "./Components/Footer"
import HeaderComponent from "./Components/Header"
import MainComponent from "./Components/Main"
import * as S from "./Components/styles"
import "./styles.css"
export default function App(){
  return(
    <>
      {HeaderComponent()}
      {MainComponent()}
      {FooterComponent()}
    </>
  )
}

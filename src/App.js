import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HeaderComponent from "./Components/Header"
import MainComponent from "./Components/Main"
import WorksComponent from "./Components/Works"
import AboutMeComponent from "./Components/AboutMe"
import ContactsMeComponent from "./Components/Contacts"
import "./styles.css"
export default function App(){
  return(
    <>
      {HeaderComponent()}
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/Works" element={<WorksComponent />} />
        <Route path="/AboutMe" element={<AboutMeComponent />} />
        <Route path="/Contacts" element={<ContactsMeComponent/>}/>
      </Routes>
    </>
  )
}

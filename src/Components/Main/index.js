import React from "react"
import { Link } from "react-router-dom"
import {FaMoon, FaSun} from "react-icons/fa"
import * as S from "../styles"
import "../../styles.css"
import ProfilePic from "../Assets/Profile.png"
import FooterComponent from "../Footer"
export default function MainComponent (){
    return(
        <>
        <S.DarkModeButtonDiv>
            <button onClick={()=>{
                document.body.style.backgroundColor = "#30cfd0";
        }}><FaSun className="SunIcon" /></button>
            <button onClick={()=>{document.body.style.backgroundColor = "#150e2f"}}><FaMoon className="MoonIcon" /></button>
        </S.DarkModeButtonDiv>
        <S.Main>
            <S.DescriptionDiv>
                <S.TitleDescription>
                    Brendon Rodrigues Desenvolvedor Web
                </S.TitleDescription>
                <S.Description>
                    Olá, me chamo Brendon e sou desenvolvedor front-end. Conheça meu trabalho nos links a baixo.
                </S.Description>
                <Link to="/Works">
                  <S.SeeMoreButton>
                    Ver mais
                  </S.SeeMoreButton>  
                </Link>               
            </S.DescriptionDiv>
            <S.ProfilePicDiv>
               <S.ProfilePic src={ProfilePic} />
            </S.ProfilePicDiv>
        </S.Main>
        {FooterComponent()}
        </>
    )
}

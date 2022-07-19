import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import * as S from "../styles"
import ProfilePic from "../Assets/Profile.png"
import FooterComponent from "../Footer"
export default function MainComponent (){
    return(
        <>
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
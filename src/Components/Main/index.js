import React from "react"
import * as S from "../styles"
import ProfilePic from "../Assets/Profile.png"
export default function MainComponent (){
    return(
        <S.Main>
            <S.DescriptionDiv>
                <S.TitleDescription>
                    Brendon Rodrigues Desenvolvedor Web
                </S.TitleDescription>
                <S.Description>
                    Olá, me chamo Brendon e sou desenvolvedor front-end. Conheça meu trabalho nos links a baixo.
                </S.Description>
                <S.SeeMoreButton>
                    Ver mais
                </S.SeeMoreButton>
            </S.DescriptionDiv>
            <S.ProfilePicDiv>
               <S.ProfilePic src={ProfilePic} />
            </S.ProfilePicDiv>
        </S.Main>
    )
}
import React from "react"
import FooterComponent from "../Footer"
import * as S from "../styles"
export default function AboutMeComponent(){
    return(
        <>
         <S.SectionContainer>
            <S.AboutMeDiv>
                <S.ContainerTitle> Sobre mim</S.ContainerTitle>
                <S.ContainerText>
                    Olá, me chamo Brendon, sou desenvolvedor web apaixonado por tecnologia. Atualmente em React, mas apaixonado por CSS e design de interfaces
                    Desde muito novo sempre tive contato com a tecnologia, por meio dos video-games e dos computadores,
                    posso dizer que cresci nas saudosas Lan Houses, também sempre fui muito curioso, o que me direcionou a sempre estar aprendendo tecnologia.
                    Hoje eu tenho o computador como uma extensão de mim, assim como todo Dev. Por ter me apaixonado pela área, também sinto vontade de ensinar.
                    Então, junto de um coletivo chamado InfoCria, pesquiso também os impactos da tecnologia na sociedade e ajudo a levar os saberes tecnológicos para a nossa comunidade de forma popular. 
                </S.ContainerText>
            </S.AboutMeDiv>
        </S.SectionContainer>
        {FooterComponent()}
        </>
       
    )
}
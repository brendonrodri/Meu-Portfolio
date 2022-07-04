import React from "react"
import FooterComponent from "../Footer"
import * as S from "../styles"
export default function ContactsMeComponent(){
    return(
        <>
        <S.SectionContainer>
            <S.ContactsDiv>
                <S.ContainerTitle> Contatos</S.ContainerTitle>
                <S.ContainerTextContacts>
                    <a href="https://www.linkedin.com/in/brendonrodri/">LinkedIn</a>
                </S.ContainerTextContacts>
                <S.ContainerTextContacts>
                    <a href="https://www.github.com/brendonrodri">GitHub</a>
                </S.ContainerTextContacts>
                <S.ContainerTextContacts>
                    <a href="https://wa.me/5521983141408">Whatsapp: +55 21 983141408</a>
                </S.ContainerTextContacts>
                <S.ContainerTextContacts> 
                    <a href="mailto:rbrendonm@gmail.com">E-mail: rbrendonm@gmail.com</a>
                </S.ContainerTextContacts>
                
            </S.ContactsDiv>
        </S.SectionContainer>
        {FooterComponent()}
        </>
        
    )
}
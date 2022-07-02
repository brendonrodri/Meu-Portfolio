import React from "react"
import {FaGithubSquare, FaWhatsappSquare} from "react-icons/fa"
import * as S from "../styles"
import "./styles.css"
export default function HeaderComponent (){
    return(
        <S.Header>
            <S.Menu>
                <S.MenuItemList><a href="">Home</a></S.MenuItemList> 
                <S.MenuItemList><a href="">Sobre</a></S.MenuItemList> 
                <S.MenuItemList><a href="">Works</a></S.MenuItemList>
                <S.MenuItemList><a href="">Contatos</a></S.MenuItemList>
            </S.Menu>
            <S.SocialMedia>
                <FaGithubSquare className="SocialMediaIcons"/>
                <FaWhatsappSquare className="SocialMediaIcons" />
            </S.SocialMedia>
        </S.Header>
    )
}
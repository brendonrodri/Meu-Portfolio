import React from "react"
import * as S from "../styles"
export default function HeaderComponent (){
    return(
        <S.Header>
            <S.Menu>
                <S.MenuItemList><a href="">Home</a></S.MenuItemList> 
                <S.MenuItemList><a href="">Sobre</a></S.MenuItemList> 
                <S.MenuItemList><a href="">Works</a></S.MenuItemList>
                <S.MenuItemList><a href="">Contatos</a></S.MenuItemList>
            </S.Menu>
        </S.Header>
    )
}
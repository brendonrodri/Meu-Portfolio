import React, {useState} from "react"
import {Link} from "react-router-dom"
import {FaGithubSquare, FaWhatsappSquare} from "react-icons/fa"
import * as S from "../styles"
import "./styles.css"
const DropDownMenu = ()=>{
    return(
        <S.MenuDropDown>
            <S.DropDownList>
                <S.DropDownItem><a href="">Agenda 2030 </a> </S.DropDownItem>
                <S.DropDownItem><a href="">ToDoFlix </a> </S.DropDownItem>
                <S.DropDownItem><a href="">KaneyWesApi </a> </S.DropDownItem>
                <S.DropDownItem><a href="">Basquiat </a> </S.DropDownItem>
            </S.DropDownList>
        </S.MenuDropDown>
    )
}
export default function HeaderComponent (){
    const [menuswitch, setMenuswitch] = useState()
    return(
        <S.Header>
            <S.Menu>
                <S.MenuItemList><Link to="/">Home</Link></S.MenuItemList> 
                <S.MenuItemList><a href="">Sobre</a></S.MenuItemList> 
                <S.MenuItemList><a href="">Contatos</a></S.MenuItemList>
                <S.MenuItemList><S.MenuButton onClick={()=>{
                    setMenuswitch(!menuswitch)
                    console.log(menuswitch)
                }}>Works</S.MenuButton>
                
                </S.MenuItemList>
                { menuswitch  && DropDownMenu() }
            </S.Menu>
            <S.SocialMedia>
                <FaGithubSquare className="SocialMediaIcons"/>
                <FaWhatsappSquare className="SocialMediaIcons" />
            </S.SocialMedia>
        </S.Header>
    )
}
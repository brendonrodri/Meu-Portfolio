import React, {useState} from "react"
import {Link} from "react-router-dom"
import {FaGithubSquare, FaWhatsappSquare} from "react-icons/fa"
import DropDownMenu from "./DropdownMenu"
import * as S from "../styles"
import "./styles.css"

export default function HeaderComponent (){
    const [menuswitch, setMenuswitch] = useState()
    return(
        <S.Header>
            <S.Menu>
                <S.MenuItemList><Link to="/">Home</Link></S.MenuItemList> 
                <S.MenuItemList><Link to="/AboutMe">Sobre</Link></S.MenuItemList> 
                <S.MenuItemList><Link to="/Contacts" >Contatos</Link></S.MenuItemList>
                <S.MenuItemList><S.MenuButton onClick={()=>{
                    setMenuswitch(!menuswitch)
                    console.log(menuswitch)
                }}>Works</S.MenuButton>
                
                </S.MenuItemList>
                { menuswitch  && DropDownMenu() }
            </S.Menu>
            <S.SocialMedia>
                <a href="https://github.com/brendonrodri" target="_blank"><FaGithubSquare className="SocialMediaIcons"/></a>
                <a href="https://wa.me/5521983141408" target="_blank"><FaWhatsappSquare className="SocialMediaIcons" /></a>
            </S.SocialMedia>
        </S.Header>
    )
}
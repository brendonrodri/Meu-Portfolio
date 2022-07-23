import React,{useState} from "react";
import {Link} from "react-router-dom"
import {FaGithubSquare, FaWhatsappSquare} from "react-icons/fa"
import * as S from "../styles"
import "./styles.css"
export default function HeaderDesktop (){
    const [menuswitch, setMenuswitch] = useState()
    const menuclose = () =>{
        setMenuswitch(false)
    }
    return(
        <S.Header>
            <S.Menu>
                <S.MenuItemList onClick={()=>{menuclose()}}><Link to="/">Home</Link></S.MenuItemList> 
                <S.MenuItemList onClick={()=>{menuclose()}}><Link to="/AboutMe">Sobre</Link></S.MenuItemList> 
                <S.MenuItemList onClick={()=>{menuclose()}}><Link to="/Contacts" >Contatos</Link></S.MenuItemList>
                <S.MenuItemList><S.MenuButton onClick={()=>{
                    setMenuswitch(!menuswitch)
                    console.log(menuswitch)
                }}>Works</S.MenuButton>
                
                </S.MenuItemList>
                { menuswitch  && (
                    <S.DropDownList>
                        <S.DropDownItem onClick={()=>{menuclose()}}><Link to="/Works">Mostrar todos </Link> </S.DropDownItem>
                        <S.DropDownItem><a href="https://agendaparadaangelica2030.netlify.app/">Agenda 2030 </a> </S.DropDownItem>
                        <S.DropDownItem><a href="https://ueefgv.csb.app/">ToDoFlix </a> </S.DropDownItem>
                        <S.DropDownItem><a href="https://n2fcrd.csb.app/">PetApi </a> </S.DropDownItem>
                        <S.DropDownItem><a href="https://brendonrodri.github.io/Basquiat/">Basquiat </a> </S.DropDownItem>
                    </S.DropDownList>     
                ) }
            </S.Menu>
            <S.SocialMedia>
                <a href="https://github.com/brendonrodri" ><FaGithubSquare className="SocialMediaIcons"/></a>
                <a href="https://wa.me/5521983141408" ><FaWhatsappSquare className="SocialMediaIcons" /></a>
            </S.SocialMedia> 
        </S.Header>
    );
}

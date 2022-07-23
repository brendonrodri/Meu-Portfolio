import React,{useState} from "react";
import {FaGithubSquare, FaWhatsappSquare, FaBars} from "react-icons/fa"
import {Link} from "react-router-dom"
import * as S from "../styles"
import "./styles.css"
export default function HeaderMobile (){
    const [menuswitch, setMenuswitch] = useState()
    const menuclose = () =>{
        setMenuswitch(false)
    }
    return(
        <>
        <S.Header>
            <S.MenuMobileButton onClick={()=>{
                setMenuswitch(!menuswitch)
                console.log(menuswitch)
            }}>
                <FaBars />
            </S.MenuMobileButton>
            <S.SocialMedia>
                <a href="https://github.com/brendonrodri" ><FaGithubSquare className="SocialMediaIcons"/></a>
                <a href="https://wa.me/5521983141408" ><FaWhatsappSquare className="SocialMediaIcons" /></a>
            </S.SocialMedia>
        </S.Header>
        { menuswitch  && (
                        <S.MenuMobileList>
                        <S.DropDownItem onClick={()=>{menuclose()}}><Link to="/">Home</Link> </S.DropDownItem>
                        <S.DropDownItem onClick={()=>{menuclose()}}><Link to="/AboutMe">Sobre mim </Link> </S.DropDownItem>
                        <S.DropDownItem onClick={()=>{menuclose()}}><Link to="/Contacts">Contatos </Link> </S.DropDownItem>
                        <S.DropDownItem onClick={()=>{menuclose()}}><Link to="/Works">Works</Link> </S.DropDownItem>
                    </S.MenuMobileList>
            ) }
        </>
    );
}
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {FaGithubSquare, FaWhatsappSquare, FaBars} from "react-icons/fa"
import DropDownMenu from "./DropdownMenu"
import * as S from "../styles"
import "./styles.css"
export default function HeaderComponent(){
    const [width, setWidth] =useState(window.innerWidth);
    const breakpoint = 700;
    useEffect(() => {
     const handleResizeWindow = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
    if (width > breakpoint) {
      return (
       <HeaderDesktop />
      );
    }
    return (
      <HeaderMobile />
    );
  }
function HeaderDesktop (){
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
                <a href="https://github.com/brendonrodri" ><FaGithubSquare className="SocialMediaIcons"/></a>
                <a href="https://wa.me/5521983141408" ><FaWhatsappSquare className="SocialMediaIcons" /></a>
            </S.SocialMedia>
            
        </S.Header>
    )
}
function HeaderMobile (){
    const [menuswitch, setMenuswitch] = useState()
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
                        <S.DropDownItem><Link to="/">Home</Link> </S.DropDownItem>
                        <S.DropDownItem><Link to="/AboutMe">Sobre mim </Link> </S.DropDownItem>
                        <S.DropDownItem><Link to="/Contacts">Contatos </Link> </S.DropDownItem>
                        <S.DropDownItem><Link to="/Works">Works</Link> </S.DropDownItem>
                    </S.MenuMobileList>
            ) }
        </>
        
    )
}
export const MenuMobile = ()=>{

}
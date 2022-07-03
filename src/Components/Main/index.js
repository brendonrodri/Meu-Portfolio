import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import * as S from "../styles"
import ProfilePic from "../Assets/Profile.png"
import FooterComponent from "../Footer"
/*const App = () => {
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
        <div>
          <h3>Component 1</h3>
          <p>Current width is {width} px</p>
        </div>
      );
    }
    return (
      <div>
        <h3>Component 2</h3>
        <p>Current width is {width} px</p>
      </div>
    );
  }
*/
export default function MainComponent (){
    return(
        <>
        <S.Main>
            <S.DescriptionDiv>
                <S.TitleDescription>
                    Brendon Rodrigues Desenvolvedor Web
                </S.TitleDescription>
                <S.Description>
                    Olá, me chamo Brendon e sou desenvolvedor front-end. Conheça meu trabalho nos links a baixo.
                </S.Description>
                <S.SeeMoreButton>
                    <Link to="/Works"> Ver mais</Link>
                </S.SeeMoreButton>
            </S.DescriptionDiv>
            <S.ProfilePicDiv>
               <S.ProfilePic src={ProfilePic} />
            </S.ProfilePicDiv>
        </S.Main>
        {FooterComponent()}
        </>
    )
}
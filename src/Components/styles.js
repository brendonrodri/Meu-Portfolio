import styled from "styled-components"
import BackgroundMain from "./Assets/background.jpg"
export const Main = styled.main`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 43vh;

`
export const Header = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to left, #30cfd0 0%, #330867 100%);

`
export const Footer = styled.footer`
    width: 100%;
    position: relative;
    top: 40px;
`
export const Menu = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin: 15px;
    position: relative;
    left: 4%;
    list-style: none;
    a{
        text-decoration: none;
        color: #fff;
        margin: 15px;
        font-size: 1.3em;
    }
    
`
export const MenuItemList = styled.li`
    &:hover{
        font-weight: bold;
        position: relative;
        top: 5px;
    }
`
export const SocialMedia = styled.div`
    display: flex;
    position: relative;
    left: 25%;
`
export const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 40%;
    height: 70vh;
    position: relative;
    left: 15px;
    -webkit-animation: fadeIn .8s ease-in-out;
    -moz-animation: fadeIn .8s ease-in-out;
    -o-animation: fadeIn .1s ease-in-out;
    animation: fadeIn 1.3s ease-in-out;
    @-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; } 
    }
    @-moz-keyframes fadeIn {
        0% { opacity: 0;}
        100% { opacity: 1; }
    }
    @-o-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-30px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
`
export const TitleDescription = styled.h1`
    color: #fff;
    font-size: 50px;
    margin: 15px 0;
`
export const Description = styled.p`
    width: 70%;
    color: #fff;
    font-size: 20px;
    

`
export const SeeMoreButton = styled.button`
    width: 10vw;
    height: 6vh;
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
    border: none;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    top: 25px;
    right: 3px;
    color: rgba(255,255,255,.8); 
    background-image: linear-gradient(to left, #30cfd0 0%, #330867 100%);
    &:hover{
        background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%);
        cursor: pointer;
    }
`
export const ProfilePicDiv = styled.div`
  width: 30%;
  height: 50vh;
`
export const ProfilePic= styled.img`
  width: 90% ;
  z-index: 1;
position: relative;
top: 57px;
`
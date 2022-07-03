import styled from "styled-components"
import BackgroundMain from "./Assets/background.jpg"
export const Main = styled.main`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 46vh;
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
    align-items: center;
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
export const MenuButton = styled.button`
    border: none;
    background: none;
    color: #fff;
    font-size: 1.2em;
    padding: 5px 15px;
`
export const MenuDropDown = styled.div`
    width: 13vw;
    height: 20vh;
`
export const DropDownList= styled.ul`
   display: block;
    color: #fff;
    position: relative;
    top: 100px;
    z-index: 10;
    border-radius: 10px;
    padding: 10px;
    background-color: #330867;
    -webkit-animation: fadeIn .5s ease-in-out;
    -moz-animation: fadeIn .5s ease-in-out;
    -o-animation: fadeIn .5s ease-in-out;
    animation: menufadeIn .5s ease-in-out;
    @-webkit-keyframes menufadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; } 
    }
    @-moz-keyframes menufadeIn {
        0% { opacity: 0;}
        100% { opacity: 1; }
    }
    @-o-keyframes menufadeIn {
        0% { opacity: 0;
            transform: translateY(-30px); }
        100% { opacity: 1; }
    }
    @keyframes menufadeIn {
        from { opacity: 0;
             top: 30px;
        }
        to { opacity: 1;
            top: 60px;
        }
    }
`
export const DropDownItem = styled.li`
    font-size: 1em;
    padding: 5px;
    list-style: none ;
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
    left: 50px;
    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn .1s ease-in-out;
    animation: fadeIn 1s ease-in-out;
    @-webkit-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @-moz-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @-o-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
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
    a{
        color: rgba(255,255,255,.8);
        text-decoration: none;
        padding: 5px;
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
right: 20px;
`
export const CarouselContainer = styled.section`
    width: 65%;
    margin: 0 auto;
    position: relative;
    top: 50px;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    -webkit-animation: workPage 1s ease-in-out;
    -moz-animation: workPage 1s ease-in-out;
    -o-animation: workPage 1s ease-in-out;
    animation: workPage 1s ease-in-out;
    @-webkit-keyframes workPage {
        from { opacity: 0;
             transform: translateX(-200px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @-moz-keyframes workPage {
        from { opacity: 0;
             transform: translateX(-200px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @-o-keyframes workPage {
        from { opacity: 0;
             transform: translateX(-200px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @keyframes workPage {
        from { opacity: 0;
             transform: translateX(-200px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    img{
        width: 50%;
    }

`
export const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 46vh;
    margin: 0 auto;
    color: #fff;
    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn .1s ease-in-out;
    animation: fadeIn 1s ease-in-out;
    @-webkit-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @-moz-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @-o-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    a{
        text-decoration: none;
        color: #fff;
        text-align: center;
    }
`
export const ContainerTitle = styled.h2`
    font-size: 2em;
`
export const ContainerText = styled.p`
    font-size: 1.2em;
    margin: 20px 0;
    width: 70%;
    text-align: justify;
`
export const ContainerTextContacts = styled.p`
    font-size: 1.2em;
    margin: 5px 0;
    width: 100%;
    text-align: center;
`
export const AboutMeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 60px;
`
import styled from "styled-components"
export const Main = styled.main`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 43vh;
`
export const Header = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-around;

`
export const Menu = styled.nav`
    display: flex;
    margin: 30px;
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
export const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50vh;

`
export const TitleDescription = styled.h1`
    color: #fff;
    margin: 30px;
`
export const Description = styled.p`
    width: 70%;
    color: #fff;
    margin: 0px 30px;
`
export const ContactsButton = styled.button`
    width: 9vw;
    height: 4vh;
    font-size: 16px;
    font-weight: bold;
    margin: 30px;
    border: none;
    border-radius: 10px;
  
`
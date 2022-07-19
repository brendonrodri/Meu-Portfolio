import React from "react"
import {Link} from "react-router-dom"
import * as S from "../styles"
const DropDownMenu = ()=>{
    return(
            <S.DropDownList>
                <S.DropDownItem><Link to="/Works">Mostrar todos </Link> </S.DropDownItem>
                <S.DropDownItem><a href="https://agendaparadaangelica2030.netlify.app/" target="_blank">Agenda 2030 </a> </S.DropDownItem>
                <S.DropDownItem><a href="https://ueefgv.csb.app/" target="_blank">ToDoFlix </a> </S.DropDownItem>
                <S.DropDownItem><a href="https://n2fcrd.csb.app/" target="_blank">PetApi </a> </S.DropDownItem>
                <S.DropDownItem><a href="https://brendonrodri.github.io/Basquiat/" target="_blank">Basquiat </a> </S.DropDownItem>
            </S.DropDownList>     
    )
}
export default DropDownMenu
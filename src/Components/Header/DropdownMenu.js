import React from "react"
import {Link} from "react-router-dom"
import * as S from "../styles"
const DropDownMenu = ()=>{
    return(
            <S.DropDownList>
                <S.DropDownItem><Link to="/Works">Mostrar todos </Link> </S.DropDownItem>
                <S.DropDownItem><a href="https://agendaparadaangelica2030.netlify.app/">Agenda 2030 </a> </S.DropDownItem>
                <S.DropDownItem><a href="https://ueefgv.csb.app/">ToDoFlix </a> </S.DropDownItem>
                <S.DropDownItem><a href="https://n2fcrd.csb.app/">PetApi </a> </S.DropDownItem>
                <S.DropDownItem><a href="https://brendonrodri.github.io/Basquiat/">Basquiat </a> </S.DropDownItem>
            </S.DropDownList>     
    )
}
export default DropDownMenu
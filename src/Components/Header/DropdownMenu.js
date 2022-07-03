import React from "react"
import {Link} from "react-router-dom"
import * as S from "../styles"
const DropDownMenu = ()=>{
    return(
            <S.DropDownList>
                <S.DropDownItem><Link to="/Works">Mostrar todos </Link> </S.DropDownItem>
                <S.DropDownItem><a href="">Agenda 2030 </a> </S.DropDownItem>
                <S.DropDownItem><a href="">ToDoFlix </a> </S.DropDownItem>
                <S.DropDownItem><a href="">KaneyWesApi </a> </S.DropDownItem>
                <S.DropDownItem><a href="">Basquiat </a> </S.DropDownItem>
            </S.DropDownList>
        
    )
}
export default DropDownMenu
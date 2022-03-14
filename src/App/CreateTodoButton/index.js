import React from "react";
import './CreateTodoButton.css';
import {TodoContext} from '../TodoContext'

function CreateToDoButton(){

const{setOpenModal}= React.useContext(TodoContext)
    const onClickButton = () =>{
        setOpenModal(prevState=>!prevState)}

    return(
        <button 
        className="todoButton"
        onClick={onClickButton}>
            +
        </button>
    )
}
export {CreateToDoButton}
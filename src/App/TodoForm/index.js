import React from "react";
import {TodoContext} from '../TodoContext'
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue,setNewTodoValue]=React.useState("")

    const {setOpenModal,
        addTodo} = React.useContext(TodoContext);

    const onCancel=()=>{
        setOpenModal(false)
    }
    const onSubmit=(event)=>{
        //se recarga por defecto;
        event.preventDefault(); //para q no se recargue
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TOdo</label>
            <textarea placeholder="Agregar todo"
            value={newTodoValue} onChange={(e)=>setNewTodoValue(e.target.value)}></textarea>
           <div className="TodoForm-buttonContainer">
               <button type="button" 
               className="TodoForm-button TodoForm-button-cancel"
               onClick={onCancel}>Cancelar</button>
               <button type="sumbit" 
                 className="TodoForm-button TodoForm-button-add">Añadir</button>
           </div>
        </form>
    )
}

export {TodoForm}
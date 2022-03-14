import React from "react";
import './TodosLoading.css'

function TodosLoading (){
    return(
       <div className="LoadingTodo-container">
           <span className="LoadingTodo-completeIcon"></span>
           <p className="LoadingTodo-text"> Cargando todos ...</p>
           <span className="LoadintTodo-deleteIcon"></span>
       </div>
    )
}

export {TodosLoading}
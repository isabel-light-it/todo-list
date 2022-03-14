import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import {TodoItem} from './TodoItem'
import {TodoForm} from './TodoForm'
import { CreateToDoButton } from './CreateTodoButton';
import {Modal} from './Modal'
import {TodosError} from './TodosError'
import { TodosLoading } from "./TodosLoading";
import { EmptyTodos } from "./EmptyTodos";
import {TodoIcon} from './TodoIcon'

function AppUI(){
const {error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal} 
    = React.useContext(TodoContext) //el mismo value que teniamos en TodoContext.Consumer

    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch />
   
       <TodoList>
       {error&&<TodosError/>}
       {loading&&<TodosLoading/>}
       {(!loading&&!searchedTodos.length&&<EmptyTodos/>)}
   
         {searchedTodos.map((item,i)=>(
         <TodoItem 
        onDelete={()=>deleteTodos(i)} 
        onComplete={()=>completeTodos(i)} 
        key={i} 
        text={item.text} 
        completed={item.completed}/>))}
         </TodoList>

      {openModal&&(  <Modal>
       <TodoForm/>
       </Modal>  ) }

   <CreateToDoButton setOpenModal={setOpenModal}/>
  
   </React.Fragment>
    )
}

export {AppUI}
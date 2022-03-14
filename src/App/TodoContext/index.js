import React from 'react';
import { useLocalStorage } from './UseLocalStorage';

const TodoContext = React.createContext(); 

function TodoProvider(props){ //puente para llegar a TodoProvider

    const {item:todos ,saveItems: saveTodos,loading,error}=useLocalStorage('TODOS_V1',[]);

    const [searchValue,setSearchValue]=React.useState("");
    const [openModal,setOpenModal]=React.useState(false)
    
    const completedTodos= todos.filter(todo=>todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos=[]
    
    if(!searchValue.length>=1) {//q hayan buscado algo
    searchedTodos=todos
    }else{
      searchedTodos=todos.filter(todo=>{
        const todoText= todo.text.toLowerCase()
        const searchText=searchValue.toLowerCase();
        return todoText.includes(searchText) //devolverlo para q sepa a partir de que va a filtrar
      })
    
      
    }
    
    const addTodo = (text) => {
      const newTodos = [...todos,{completed:false,
        text:text}];
        saveTodos(newTodos);
    }
    const completeTodos = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed=true
      saveTodos(newTodos);
    }
    
    const deleteTodos = (index) => {
      /* const newTodos = todos.filter((todo,i)=>i!==index); */
    
      const newTodos = [...todos]
      newTodos.splice(index,1);
      saveTodos(newTodos);
    } 
    return(
    <TodoContext.Provider value={
    { loading,
     error,
     totalTodos, 
     completedTodos,  
     searchValue,
     setSearchValue,
     searchedTodos,
     completeTodos,
     deleteTodos,
    openModal,
    setOpenModal,
    addTodo}
}> {/* las propiedades q queramos compartir van en value*/}
   {props.children} 
</TodoContext.Provider>
    )



}

export {TodoContext,TodoProvider}
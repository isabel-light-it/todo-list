import React from "react";

function useLocalStorage(itemName,initialValue){
  
    const [loading,setLoading]=React.useState(true); 
    const [error,setError]=React.useState(false); 
    const [item,setItem]=React.useState(initialValue); //arranca vacío
  
   React.useEffect(()=>{
      setTimeout(()=>{ //para simular q demora un tiempo como una API
       try{ 
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem=initialValue;
        } else{
          parsedItem=JSON.parse(localStorageItem);
        }
        setItem(parsedItem) //actualiza estado con la info del local storage
        setLoading(false);}
        catch (error) {
          setError(error)
        }
      },1000)
    })
  
    const saveItems = (newItem) =>{
      try{
        const stringifiedItem =JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem)
      }
      catch(error){
        setError(error)
      }
    }
  
    return {
      item,
      saveItems,
      loading,
      error
    }
      
  }

  export {useLocalStorage}
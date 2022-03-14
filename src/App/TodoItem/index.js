import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'

function TodoItem(props){

    return(

<li className='TodoItem'>
{/* <span 
onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}> √</span> */}

<CompleteIcon completed={props.completed} onComplete={props.onComplete}/>

<p className={`TododItem-p ${props.completed && 'TodoItem-p--complete'}`} >{props.text}</p>
<DeleteIcon onDelete={props.onDelete}/>
{/* <span onClick={props.onDelete} className='Icon Icon-delete'>X</span>  */}
</li>
    )
}
 export {TodoItem}
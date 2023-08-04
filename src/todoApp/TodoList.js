import React, { useState } from 'react'
import "../todoApp/Todo.css";
const TodoList = () => {
    const [input,setInput]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();

    }
  return (
   <>
   <div className='main-container'>
   <div className='form-container'>
    <form>
        <input type='text' placeholder='enter an item' onClick={(e)=>{
         setInput(e.target.value)
        }}/>
        <button className='add' onClick={handleSubmit}>Add Item</button>
        
    </form>
    </div>
    </div>
   </>
  )
}

export default TodoList
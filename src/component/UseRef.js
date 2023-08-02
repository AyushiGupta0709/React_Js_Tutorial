import React, { useRef, useState } from 'react'

const UseRef = () => {
    const name=useRef(null);
    const [show,setShow]=useState(false);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       const newName=name.current.value;
       newName===""? alert("Name is empty") : setShow(true);

    }
  return (
    <>
        <h1>Use Refercence</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor='name'/>Name:
            <input type='text' ref={name} placeholder='name'></input>
            <button type='submit'>Submit </button> 
        </form>
        <p>
            {
               show ? `My lucky name is ${name.current.value}`:""
            }
        </p>
    </>
  )
}

export default UseRef
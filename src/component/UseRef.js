import React, { useRef } from 'react'

const UseRef = () => {
    const name=useRef();
  return (
    <>
        <h1>Use Refercence</h1>
        <form>
            <input type='text' value={name}></input> 
        </form>
    </>
  )
}

export default UseRef
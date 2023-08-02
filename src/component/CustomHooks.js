import React, {  useState } from 'react'
import useDocument from './useDocument';

const CustomHooks = () => {
    const [count,setCount]=useState(0);
    useDocument(count);

  return (
    <>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>Increament</button>
    <button onClick={()=>setCount(count-1)}>Decreament</button>

    </>
  )
}

export default CustomHooks
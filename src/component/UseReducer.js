import React, { useReducer } from 'react'
const initialState=0;
const reducer=(state,action)=>{
    
    if(action.type === "Increament"){
        return state + 1;
    }
    if(action.type === "Decreament"){
        return state - 1;
    }
    return state;
}


const UseReducer = () => {
  const [state,dispatch]= useReducer(reducer,initialState);
  return (
    <>
        <p>{state}</p>
        <div>
            <button onClick={()=>dispatch({type:"Increament"})}>Increament</button>
            <button onClick={()=> dispatch({type:"Decreament"})}>Decreament</button>
        </div>
    </>
  )
}

export default UseReducer
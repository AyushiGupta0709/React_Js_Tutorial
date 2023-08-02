import React from 'react'
import ComB from './ComB'

const ComA = (props) => {   
  return (
    <div><ComB name={props.name}/></div>
  )
}

export default ComA
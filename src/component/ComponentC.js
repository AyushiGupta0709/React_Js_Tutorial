import React, { useContext } from 'react'
import { BioData } from './UseContext'
const ComponentC = () => {
    const name=useContext(BioData);
  return (
    <p>Hi this is {name}</p>
  )
}

export default ComponentC
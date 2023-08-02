import React,{createContext} from 'react';
import ComponentB from './ComponentB';
const BioData=createContext();
const UseContext = () => {

  return (
    <>
        <BioData.Provider value={"Ayushi Gupta"}> 
         <ComponentB/>
        </BioData.Provider>
    </>
  )
}

export default UseContext;
export {BioData};
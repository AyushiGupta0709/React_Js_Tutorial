import React,{useEffect} from "react";


const useDocument = (count) => {
    useEffect(()=>{
        if(count >=1){
            document.title=`Chats (${count})`;
        }
    },[count]);
  return (
    <div>useDocument</div>
  )
}

export default useDocument
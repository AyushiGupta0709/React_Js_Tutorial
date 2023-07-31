import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {
    const [user,setUser]= useState([]);
    const [loading,setLoading]=useState(true);
    const getData= async ()=>{
        try {
            setLoading(false);
            const response = await fetch("https://api.github.com/users");
            const data =await response.json();
            console.log(data);
            setUser(data);
            console.log(user);
        } catch (error) {
            setLoading(false);
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getData();
    },[])
    if(loading){
       return(<h1>Loading...</h1>);
    }
  return (
    <>
    <h1>GIT HUB USERS</h1>
    {
        user.map((ele,index)=>(
          <div className='user-details'>
            <p>{ele.login}</p>
          </div>
        ))

    }


    </>
  )
}

export default UseEffectApi
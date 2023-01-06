import React, { useEffect, useMemo, useState } from 'react'

function UseMemo() {

    const [count,setCount]=useState(0);

    const [run,setRun]=useState(false);

    const [effect,setEffect]=useState(1);

   const [msg,setMsg]=useState("")

   const [effectmsg,setEffectMsg]=useState("")


    // Use Effect take 2 things, 1. Callback function 2. Array of Dependency[]
    // to cleanup the effect use return and add fucntion accordingly
    useMemo(()=>{},[])

    useEffect(()=>{

        
       
        setEffect(effect+1);
        setEffectMsg("EFFECT HAS RUN")
        console.log("UseEffect Started!!!!")

        return()=>{
  
            setMsg(`EFFECT HAS RUN ${effect} times`)
            
            console.log("")
            console.log("UseEffect Cleanup")
        }
    },[])

    const handleChange= useMemo(()=>{

        for(let i=0; i<1000000000;i++){}

        return count*3;

    },)

    const addCounter=()=>setCount(count+1)
  
    
    const decCounter=()=>setCount(count-1);
  
    
  return (
    <div className="container">
        <h1>UseEffect Component</h1>
        <p>{msg}</p>
       <p>{effectmsg}</p> 
       {run && <p>{handleChange}</p>}
        <h2> Count Update {count}</h2>
        <div className="actions">
        <button className='add-button' onClick={addCounter}>Add Counter</button>
        <button className='dec-button' onClick={decCounter}> Sub Counter</button>
        </div>
        <button className='toggle' onClick={()=>setRun((prev)=> !prev)}>Toggle</button>
    </div>
  )
}

export default UseMemo
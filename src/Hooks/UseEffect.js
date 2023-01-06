import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count,setCount]=useState(0);

    const [run,setRun]=useState(true);

    const [effect,setEffect]=useState(1);

   const [msg,setMsg]=useState("")

   const [effectmsg,setEffectMsg]=useState("")


    //Use Effect take 2 things, 1. Callback function 2. Array of Dependency[]
    //to cleanup the effect use return and add fucntion accordingly


    useEffect(()=>{

        
       
        setEffect(effect+1);
        setEffectMsg("EFFECT HAS RUN")
        console.log("UseEffect Started!!!!")

        return()=>{
  
            setMsg(`Cleanup click ${effect} times`)
            setRun(false);
            console.log("")
            console.log("UseEffect Cleanup")
        }
    },[count])

 

    const addCounter=()=>setCount(count+1)
  
    
    const decCounter=()=>setCount(count-1);
  
    
  return (
    <div className="container">
        <h1>UseEffect Component</h1>
        <p>{msg}</p>
       {run && <p>{effectmsg}</p> } 
        <h2> Count Update {count}</h2>
        <div className="actions">
        <button className='add-button' onClick={addCounter}>Add Counter</button>
        <button className='dec-button' onClick={decCounter}> Sub Counter</button>
        </div>
    </div>
  )

}

export default UseEffect
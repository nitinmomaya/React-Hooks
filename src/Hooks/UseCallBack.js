import React, {useState } from 'react'
import JustAnotherComponent from '../compoents/JustAnotherComponent';


//usecallback is similar to useMemo hook

//useMemo remembers the value

//where as useCallback remember the function

//if we use useMemo and sends a value through prop the function is created and useMemo consider that value has been changed
//but through callback it remember the function, if value changes on the dependency that only it will be re-renderd


function UseCallBack() {

    
    const [count,setCount]=useState(0);

 

    const addCounter=()=>{
  
      // e.preventDefault();
  
      setCount(count+1)
  
    }
    const decCounter=()=>{
  
      // e.preventDefault();
  
      setCount(count-1);
  
    }

    

    
  return (
    <div className="container">
        <h1>UseCallback Component</h1>
        <h2> Count Update {count}</h2>
        <div className="actions">
        <button className='add-button' onClick={addCounter}>Add Counter</button>
        <button className='dec-button' onClick={decCounter}> Sub Counter</button>
        <JustAnotherComponent count={count}/>
        </div>
    </div>
  )
  
  }

  

export default UseCallBack


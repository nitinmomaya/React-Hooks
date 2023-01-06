import React, { useState } from 'react';



function App () {

  const [count,setCount]=useState(0);

 

  const addCounter=()=>{

    // e.preventDefault();

    setCount(count+1)

  }
  const decCounter=()=>{

    // e.preventDefault();

    setCount(count-1);

  }
  return <>

    <div className="wrapper">
    <div className="container">
        <h1>UseState Hooks</h1>
        <h2> Count Update {count}</h2>
        <div className="actions">
        <button className='add-button' onClick={addCounter}>Add Counter</button>
        <button className='dec-button' onClick={decCounter}> Sub Counter</button>
        </div>
    </div>
    </div>
    
  </>;
};

export default App;

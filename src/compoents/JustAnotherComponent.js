import React, { useCallback, useMemo, useState } from 'react'

function JustAnotherComponent({count}) {

    const [flag,setFlag]=useState(0)
    useCallback(()=>{
        setFlag(flag+1)
        console.log("Hii!!!");
       
    },[count])

    return(<><p>{flag}</p></>)
}

export default JustAnotherComponent
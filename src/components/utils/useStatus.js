import React, { useEffect, useState } from 'react'

function useStatus() {
    const [status, setstatus] = useState(true)
  useEffect(()=>{
    window.addEventListener("offline", ()=>{
        setstatus(false)
    })
    window.addEventListener("online", ()=>{
        setstatus(true)
    })
  })
  
  
    return status;
}

export default useStatus

import { useState, useEffect } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"

export const Spinner = () => {
    const [count,setCount]=useState(3);
    const navigate=useNavigate()
    useEffect(()=>{
        const interval=setInterval(() => {
            setCount((prevValue)=>--prevValue)            
        }, 1000);
        count===0 && navigate('/login')
        return ()=>clearInterval(interval);
    },[count,navigate])
  return (
    <div style={{height:'65vh',background:'black',color:'white'}}>
    <h1 style={{textAlign:'center',paddingTop:'150px'}}>Please wait...{count}</h1>
    </div>
  )
}
export default Spinner;
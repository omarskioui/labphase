import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const user=useSelector(state=>state.user)
    const [loading,setLoading]=useState(true)
    console.log(user)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)   
        }, 1000);
       
    },[])
    const navigate=useNavigate()
    if(loading) return <div>Loading...</div>
    if(!user) {
        return navigate("/signin")
    }
  return children
}

export default ProtectedRoute
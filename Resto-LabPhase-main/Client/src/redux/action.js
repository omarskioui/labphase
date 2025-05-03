import axios from "axios"
import { GETPRODUCTS, GETRESERVATION, GETUSERPROFILE, SIGNIN, SIGNOUT } from "./actiontype"
export const getproducts=()=>async(dispatch)=>{
    try {
        const response=await axios.get('http://localhost:5000/product/getproducts')
        dispatch({type:GETPRODUCTS,payload:response.data})
    } catch (error) {
        console.error(error)
    }
}
export const login=(user,navigate)=>async(dispatch)=>{
    try {
        const response=await axios.post('http://localhost:5000/signin',user)
        console.log(response.data)
        dispatch({type:SIGNIN,payload:response.data})
        navigate('/Admin')
    } catch (error) {
        console.error(error)
    }
}
export const logout=(user,navigate)=>async(dispatch)=>{
    localStorage.removeItem('token')

    navigate('/')
    dispatch({type:SIGNOUT})
}
export const getuser=()=>async(dispatch)=>{
    const config={
        headers:{
            token:localStorage.getItem('token')
        }
    }
    try {
        const response=await axios.get('http://localhost:5000/connected',config)
        dispatch({type:GETUSERPROFILE,payload:response.data})
    } catch (error) {
        console.error(error)
    }
}
export const addproduct=(product,navigate)=>async(dispatch)=>{
    const config={
        headers:{
            token:localStorage.getItem('token')
        }
    }
    try {
        const response=await axios.post('http://localhost:5000/product/addproduct',product,config)
        console.log(response.data)
        dispatch(getproducts())
        navigate('/Menu')
    } catch (error) {
        console.error(error)
    }
}

export const getreservation=()=>async(dispatch)=>{
    const config={
        headers:{
            token:localStorage.getItem('token')
        }
    }
    try {
        const response=await axios.get('http://localhost:5000/reservation/getreservations',config)
        dispatch({type:GETRESERVATION,payload:response.data})
    } catch (error) {
        console.error(error)
    }
}
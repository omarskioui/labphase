import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addproduct } from '../../redux/action'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Addproduct() {
    const [show,setShow]=useState(false)
        const handleshow=()=>setShow(true)
        const[title,settitle]=useState("")
        const[price,setprice]=useState(0)
        const[description,setdescription]=useState("")
        const[category,setcategory]=useState("Appetizers")
        const[image,setimage]=useState([])
        const dispatch = useDispatch()
        const navigate=useNavigate()
        const handleSubmit=async(e)=>{
            e.preventDefault()
            const formData = new FormData()
            const newproduct=  {title,price,description,category,image}
            if(image.length!==0) {
              formData.append('file',image)
              formData.append('upload_preset',"ml_default")
              const response = await axios.post('https://api.cloudinary.com/v1_1/dum40z2ki/upload',formData)
                newproduct.image=[response.data.secure_url]
                
            }
            
         
         dispatch(addproduct(newproduct,navigate))
        }
  return (
    <div>
<div className="container-add">
  <h1>Add products</h1>
  <div className="admin-form">
    <div className="input-group">
      <label htmlFor="title"></label>
      <input onChange={(e)=>settitle(e.target.value)} type="text" id="title" placeholder="Enter title" />
    </div>
    <div className="input-group">
      <label htmlFor="title"></label>
      <input onChange={(e)=>setimage(e.target.files[0])} type="file" id="title" placeholder="Enter your image URL" />
    </div>
    <div className="input-group">
      <label htmlFor="price"></label>
      <input onChange={(e)=>setprice(e.target.value)} type="number" id="price" step="0.01" placeholder="Enter price" />
    </div>
    <div className="input-group">
      <label htmlFor="category"></label>
      <select onChange={(e)=>setcategory(e.target.value)} name="category" id="">
        <option value="Appetizers">Appetizers</option>
        <option value="Drinks">Drinks</option>
        <option value="Breakfast">Breakfast</option>
      </select>
    </div>
    <div className="input-group">
      <label htmlFor="description"></label>
      <textarea
      onChange={(e)=>setdescription(e.target.value)}
        id="description"
        placeholder="Enter description"
        defaultValue={""}
      />
    </div>
    <button onClick={handleSubmit} className="save-btn">
      Save Changes
    </button>
  </div>
  
</div>


    </div>
  )
}

export default Addproduct
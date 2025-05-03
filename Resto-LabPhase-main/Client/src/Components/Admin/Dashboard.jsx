import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
    const [show,setShow]=useState(false)
    const [avtive,setactive] = useState("Reservations")
    
    
  return (
    <div style={{paddingTop:"200px",display:"flex",}}>
        
  <div className="sidebar">
    <div className="logo">
      <span className="material-icons">restaurant</span>
      <h2>Restaurant Admin</h2>
    </div>
    <nav>
      <Link to="/Admin" className={avtive==="Reservations"?"active":""} onClick={()=>setactive("Reservations")} data-view="reservations">
        <span className="material-icons">event</span>Reservations
      </Link>
      <Link to="/Admin/products" className={avtive==="Products"?"active":""} onClick={()=>setactive("Products")} data-view="reservations">
        <span className="material-icons">event</span>Products
      </Link>
      <Link to="/Admin/tables" className={avtive==="Tables"?"active":""} onClick={()=>setactive("Tables")} data-view="tables">
        <span className="material-icons">table_restaurant</span>Tables
      </Link>
      <Link to="/Admin/Statics" className={avtive==="Statics"?"active":""} onClick={()=>setactive("Statics")} data-view="Statics">
        <span className="material-icons">people</span>Statics
      </Link>
      <Link to="/Admin/Settings" className={avtive==="Settings"?"active":""} onClick={()=>setactive("Settings")} data-view="settings">
        <span className="material-icons">settings</span>Settings
      </Link>
      <Link to="/Admin/add" className={avtive==="addproduct"?"active":""} onClick={()=>setactive("addproduct")} data-view="addproduct">
      <span class="material-symbols-outlined"></span>addproduct
      </Link>
      
    </nav>
  </div>

 
  <div style={{height:"auto",width:"80%",marginLeft:"20px"}}>
    <Outlet></Outlet>
  </div>
  
    </div>
  )
}

export default Dashboard
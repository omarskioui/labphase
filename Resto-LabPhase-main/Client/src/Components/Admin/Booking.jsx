import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getreservation } from '../../redux/action'
import axios from 'axios'

function Booking() {
  const [show, setShow] = useState(false)
  const dispatch=useDispatch()
  const reservations = useSelector(state => state.reservations)
  useEffect(() => {
    dispatch(getreservation())
  },[reservations])
  
  const handleshow = () => setShow(true)
  const handleclose = () => setShow(false)

   const [newreservation,setnewreservation]=useState({name:"",time:"",date:new Date(),phone:"",message:"",person:1})
    const handlechange=(e)=>{
      setnewreservation({...newreservation,[e.target.name]:e.target.value})
    }
    const handlesubmit=async(e)=>{
      e.preventDefault()
      console.log(newreservation)
      try {
        const res=await axios.post("http://localhost:5000/reservation/createReservation",newreservation)
        console.log(res.data)
        if(res.status===201){
          alert("Reservation created successfully")
        }
      } catch (error) {
        console.log(error)
        alert("Failed to create reservation")
      }
      // setnewreservation({name:"",time:"",date:new Date(),phone:"",message:"",person:1})
    }
    const handleEdit = async (id,data) => {
      try {
        const res = await axios.put(`http://localhost:5000/reservation/updateReservation/${id}`,data,{headers:{token:localStorage.getItem("token")}});
        if (res.status === 200) {
          alert("Reservation updated successfully");
        }
      } catch (error) {
        console.log(error);
        alert("Failed to accept reservation");
      }
    };

  return (
    <>
      <div id="reservationsView" className="view active">

        <div className="filters">
          <div className="date-filter">
            <input type="date" id="dateFilter" defaultValue="" />
          </div>
          <div className="search">
            <span className="material-icons">search</span>
            <input
              type="text"
              id="searchReservations"
              placeholder="Search reservations..."
            />
          </div>
          <div className="status-filter">
            <button onClick={handleshow}>add reservation</button>
          </div>
        </div>
        <div className="reservations-grid">
          <table>
            <thead>
              <tr>
                <th>date</th>
                <th>Time</th>
                <th>Name</th>

                <th>Table</th>
                <th>Contact</th>
                <th>message</th>
                <th>accept or decline</th> 
              </tr>
            </thead>
            <tbody id="reservationsTable">
              {/* Reservations will be populated by JavaScript */}
              {reservations.map((reservation) => (
                <tr style={{backgroundColor:reservation.status==="pending"?"#FFD700":reservation.status==="accepted"?"green":"red"}} key={reservation._id}>
                  <td>{new Date(reservation.date).toLocaleDateString()}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.name}</td>
                  <td>{reservation.person}</td>
                  <td>{reservation.phone}</td>
                  <td>{reservation.message}</td>
                  <td>
                    <button onClick={()=>handleEdit(reservation._id,{status:"accepted"})}><i class="fa-solid fa-circle-check"></i></button>
                    <button onClick={()=>handleEdit(reservation._id,{status:"rejected"})} ><i class="fa-solid fa-ban"></i></button>
                  </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: show ? "block" : "none" }} id="reservationModal" className="modal">
        {/* Reservations View */}

        <div className="modal-content">
          <h2>New Reservation</h2>
          <form onSubmit={handlesubmit} id="reservationForm">
            <div className="form-group">
              <label>Date</label>
              <input min={new Date().toISOString().split("T")[0]} onChange={handlechange} type="date" name="date" required="" />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input onChange={handlechange} type="time" name="time" required="" />
            </div>
            <div className="form-group">
              <label>Guest Name</label>
              <input onChange={handlechange} type="text" name="name" required="" />
            </div>
            <div className="form-group">
              <label>Number of Guests</label>
              <input onChange={handlechange} type="number" name="person" min={1} required="" />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input onChange={handlechange} type="tel" name="phone" required="" />
            </div>

          
            <div className="button-group">
              <button
                type="button"
                className="btn secondary"
                onClick={handleclose}
              >
                Cancel
              </button>
              <button  type="submit" className="btn primary">
                Save Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Booking
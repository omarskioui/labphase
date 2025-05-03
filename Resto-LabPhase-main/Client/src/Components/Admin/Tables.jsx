import React, { useState } from 'react'

function Tables() {
    const [show,setShow]=useState(false)
    const handleshow=()=>setShow(true)
    const handleclose=()=>setShow(false)
  return (
    <>
    {/* Tables View */}
    <div  id="tablesView" className="view active">
      <header>
        <h1>Tables Management</h1>
        <button onClick={handleshow} id="addTable" className="btn primary">
          <span className="material-icons">add</span>
          New Table
        </button>
      </header>
      <div className="tables-grid" id="tablesGrid">
        {/* Tables will be populated by JavaScript */}
      </div>
    </div>
    <div style={{display:show?"block":"none"}} id="tableModal" className="modal">
    <div className="modal-content">
      <h2>Table Details</h2>
      <form id="tableForm">
        <div className="form-group">
          <label>Table Number</label>
          <input type="number" name="number" required="" min={1} />
        </div>
        <div className="form-group">
          <label>Capacity</label>
          <input type="number" name="capacity" required="" min={1} />
        </div>
        <div className="form-group">
          <label>Location</label>
          <select name="location">
            <option value="inside">Inside</option>
            <option value="outside">Outside</option>
           
          </select>
        </div>
        <div className="button-group">
          <button onClick={handleclose}
            type="button"
            className="btn secondary"
            onclick="closeModal('tableModal')"
          >
            Cancel
          </button>
          <button onClick={handleshow} type="submit" className="btn primary">
            Save Table
          </button>
        </div>
      </form>
    </div>
  </div>
    
    </>

  )
}

export default Tables